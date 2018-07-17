#!/usr/bin/python3
from flask import Flask, request, jsonify
from docdb import Client

import os, sys, urllib3

# globals
app = Flask(__name__)
db = Client()

# routes
@app.route("/")
def hello():
    return "Hello World!"

@app.route('/api/get/<string:db_id>/<string:coll_id>/<string:doc_id>', methods=['GET'])
def get_doc(db_id, coll_id, doc_id):
    return jsonify(db.get_document(db_id, coll_id, doc_id))

@app.route('/api/create/<string:db_id>/<string:coll_id>', methods=['POST'])
def create_doc(db_id, coll_id):
    db.create_document(db_id, coll_id, request.document)

@app.route('/api/query/<string:db_id>/<string:coll_id>/<string:query>', methods=['GET'])
def query(db_id, coll_id, query):
    return jsonify(db.query(db_id, coll_id, f'select * from c where {query}'))

# run app
app.run(debug=True)