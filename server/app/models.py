"""
from app import db

class ImageDatabase(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    imageName = db.Column(db.String(120), index=True, unique=True)
    caption = db.Column(db.String(120), index=True, unique=False)
    rating = db.Column(db.Integer, index=True, unique=False)

    def __repr__(self):
        return '<Image: %r>' % (self.caption)

def getImage(id):
    return ImageDatabase.query.get(int(id))

"""