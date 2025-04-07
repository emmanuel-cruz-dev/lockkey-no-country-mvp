from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "user"
    __table_args__ = {"schema": "public"}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(250), nullable=False)

    def __init__(self, email, password):
        self.email = email
        self.set_password(password)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            'id': self.id,
            'email': self.email,
        }

class Password(db.Model):
    __tablename__ = "password"
    __table_args__ = {"schema": "public"}

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("public.user.id"), nullable=False)
    url = db.Column(db.String(255), nullable=True)
    name = db.Column(db.String(100), nullable=False)
    folder = db.Column(db.String(100), nullable=True)
    username = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(250), nullable=False)
    notes = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", backref="passwords")

    def __init__(self, user_id, url, name, folder, username, password, notes):
        self.user_id = user_id
        self.url = url
        self.name = name
        self.folder = folder
        self.username = username
        self.password = password
        self.notes = notes

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "name": self.name,
            "folder": self.folder,
            "username": self.username,
            "password": self.password,
            "notes": self.notes,
            "created_at": self.created_at.isoformat() if self.created_at else None,
        }