from app import db

class ImageDatabase(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    imagename = db.Column(db.String(120), index=True, unique=True)
    caption = db.Column(db.String(120), index=True, unique=True)
    rating = db.Column(db.Integer, index=True, unique=False)
    numberOfJudges = db.Column(db.Integer, index=True, unique=False)
    def __repr__(self):
        return '<Image: %r>' % (self.caption)
