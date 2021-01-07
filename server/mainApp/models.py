from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    emails = db.Column(db.String, nullable=False)
    names = db.Column(db.String, nullable=False)
    passwords = db.Column(db.String, nullable=False)

    def __init__ (self, emails, names, passwords):
        self.emails = emails
        self.names = names
        self.passwords = passwords
