import os
WTF_CSRF_ENABLED = True
SECRET_KEY = 'you-will-never-guess'

basedir = os.path.abspath(os.path.dirname(__file__))

SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
SQLALCHEMY_MIGRATE_REPO = os.path.join(basedir, 'db_repository')

COSMOS = {
    'URI' : 'https://oneweek-vending-machine.documents.azure.com:443/',
    'KEY' : 'Cn1yLE1m2CZ2cxErvMDbcVV2nLg9EK24nw7hEOVNsCeUUXy1Evw2f422AaCrErjVOYKg7mhymio6J6m3wApwtw==`'
}