#!/usr/bin/env python

import sys
import json
import urllib3
import config as cfg
import pydocumentdb.documents as documents
import pydocumentdb.document_client as document_client

def get_client():
    connection_policy = documents.ConnectionPolicy()
    connection_policy.SSLConfiguration = documents.SSLConfiguration()
    # Try to setup the cacert.pem
    # connection_policy.SSLConfiguration.SSLCaCerts = CaCertPath
    # Else, disable verification
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    connection_policy.SSLConfiguration.SSLCaCerts = False
    return document_client.DocumentClient(cfg.DATABASE['uri'], {'masterKey': cfg.DATABASE['key']}, connection_policy)

def get_database_link(database_id):
    return 'dbs/' + database_id

def get_collection_link(database_id, collection_id):
    return get_database_link(database_id) + '/colls/' + collection_id

def get_document_link(database_id, collection_id, document_id):
    return get_collection_link(database_id, collection_id) + '/docs/' + document_id
    
if __name__ == '__main__':
    client = get_client()
    if len(sys.argv) < 2:
        print('input file required')
        exit(1)
    lines = open(sys.argv[1], 'r').readlines()[1:]

    categories = {}

    for line in lines:
        line = [l.strip() for l in line.split('\t')]
        img_obj = {}

        # if we have not seen this category before
        if not line[0] in categories:
            categories[line[0]] = {}
            categories[line[0]]['name'] = line[0]
            categories[line[0]]['ref_image_paths'] = []
            categories[line[0]]['total_images'] = 0
            categories[line[0]]['solved_images'] = 0
            categories[line[0]]['judgements'] = 0
            categories[line[0]]['skip_count'] = 0

        # if this is a reference image
        if line[2] == '1':
            # add it to the category's images
            categories[line[0]]['ref_image_paths'].append(line[1])
        else:
            # create a new image object
            img_obj['category'] = line[0]
            img_obj['img_url'] = line[1]
            img_obj['is_positive'] = (line[3] == '1')
            img_obj['judgements'] = []
            img_obj['judgement_count'] = 0
            
            # update the image count of the category
            categories[line[0]]['total_images'] += 1

            # write the image object to the database
            print("inserting ... " + str(img_obj))
            client.CreateDocument(get_collection_link('data', 'images'), img_obj)

    for key, val in categories.items():
        print("inserting ... " + str(val))
        client.CreateDocument(get_collection_link('data', 'categories'), val)
