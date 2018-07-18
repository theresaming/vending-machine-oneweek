from pydocumentdb import documents, document_client
import urllib3, config

class DocDbClient:

    def __get_database_link(self, database_id):
        return 'dbs/' + database_id

    def __get_collection_link(self, database_id, collection_id):
        return self.__get_database_link(database_id) + '/colls/' + collection_id

    def __get_document_link(self, database_id, collection_id, document_id):
        return self.__get_collection_link(database_id, collection_id) + '/docs/' + document_id

    def __get_client(self):
        connection_policy = documents.ConnectionPolicy()
        connection_policy.SSLConfiguration = documents.SSLConfiguration()
        # Try to setup the cacert.pem
        # connection_policy.SSLConfiguration.SSLCaCerts = CaCertPath
        # Else, disable verification
        urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
        connection_policy.SSLConfiguration.SSLCaCerts = False
        return document_client.DocumentClient(config.COSMOS['URI'], {'masterKey': config.COSMOS['KEY']}, connection_policy)

    # get document by id
    def get_document(self, db_id, coll_id, doc_id):
        return self.client.ReadDocument(self.__get_document_link(db_id, coll_id, doc_id))

    # set document by id
    def create_document(self, db_id, coll_id, new_doc):
        return self.client.CreateDocument(self.__get_collection_link(db_id, coll_id), new_doc)

    def delete_document(self, db_id, coll_id, doc_id):
        return self.client.DeleteDocument(self.__get_document_link(db_id, coll_id, doc_id))

    def upsert_document(self, db_id, coll_id, new_doc):
        return self.client.UpsertDocument(self.__get_collection_link(db_id, coll_id), new_doc)

    def query(self, db_id, coll_id, query_string):
        return list(self.client.QueryDocuments(self.__get_collection_link(db_id, coll_id), query_string))

    # constructor
    def __init__(self):
        self.client = self.__get_client()