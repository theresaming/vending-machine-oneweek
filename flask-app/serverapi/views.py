from flask import Flask, jsonify, json, request, render_template
from serverapi import app, docdb
import requests

import os, sys, urllib3, config

# global
db = docdb.DocDbClient()

# @app.route('/api/get/<string:db_id>/<string:coll_id>/<string:doc_id>', methods=['GET'])
# def get_doc(db_id, coll_id, doc_id):
#     return jsonify(db.get_document(db_id, coll_id, doc_id))

# @app.route('/api/delete/<string:db_id>/<string:coll_id>/<string:doc_id>', methods=['GET'])
# def delete_doc(db_id, coll_id, doc_id):
#     db.delete_document(db_id, coll_id, doc_id)

# @app.route('/api/create/<string:db_id>/<string:coll_id>', methods=['POST'])
# def create_doc(db_id, coll_id):
#     # print(f'document to create: {request.json()["document"]}')
#     # return jsonify(db.create_document(db_id, coll_id, request.json()["document"]))
#     # return jsonify(db.create_document(db_id, coll_id, request.data))
#     return "Hello There!"

# @app.route('/api/upsert/<string:db_id>/<string:coll_id>', methods=['POST'])
# def upsert_doc(db_id, coll_id):
#     print(f'document to upsert: {request.get_json()["document"]}')
#     return jsonify(db.upsert_document(db_id, coll_id, request.json()["document"]))

# @app.route('/api/query/<string:db_id>/<string:coll_id>/<string:query>', methods=['GET'])
# def query(db_id, coll_id, query):
#     return jsonify(db.query(db_id, coll_id, f'select * from c where {query}'))