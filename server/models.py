#######################################################
############# IMPORTS AND INITIALIZATIONS #############
#######################################################


from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy import MetaData
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.associationproxy import association_proxy


#######################################################
########## SETTING UP DATABASE CONFIGURATION ##########
#######################################################


# Instantiate database connection using metadata schema.
db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tableneame__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)


class Pet(db.Model, SerializerMixin):
    __tablename__ = "pets"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    photo= db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    size = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(255), nullable=False)
    type = db.Column(db.String(255), nullable=False)



