#!/usr/bin/python3
from flask import Flask
app = Flask(__name__)
app.run(debug=True)

def get_database_link(database_id):
    return 'dbs/' + database_id

def get_collection_link(database_id, collection_id):
    return get_database_link(database_id) + '/colls/' + collection_id

def get_document_link(database_id, collection_id, document_id):
    return get_collection_link(database_id, collection_id) + '/docs/' + document_id

def get_client():
    connection_policy = documents.ConnectionPolicy()
    connection_policy.SSLConfiguration = documents.SSLConfiguration()
    # Try to setup the cacert.pem
    # connection_policy.SSLConfiguration.SSLCaCerts = CaCertPath
    # Else, disable verification
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    connection_policy.SSLConfiguration.SSLCaCerts = False
    return document_client.DocumentClient(config.COSMOS['URI'], {'masterKey': config.COSMOS['KEY']}, connection_policy)

# document db client global
client = get_client()

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/api/get/<string:db_id>/<string:coll_id>/<string:doc_id>', methods=['GET'])
def get_doc(db_id, coll_id, doc_id):
    return jsonify(client.ReadDocument(get_document_link(db_id, coll_id, doc_id)))