#######################################################
############# IMPORTS AND INITIALIZATIONS #############
#######################################################


from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.associationproxy import association_proxy


#######################################################
########## SETTING UP DATABASE CONFIGURATION ##########
#######################################################


# Instantiate database connection using metadata schema.
db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ("-ownerships.user", )

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)

    ownerships = db.relationship("Ownership", back_populates="user")
    adoption_applications = db.relationship("AdoptionApplication", back_populates="user")
    pets = association_proxy("ownerships", "pet")



class Pet(db.Model, SerializerMixin):
    __tablename__ = "pets"

    serialize_rules = ("-ownerships.pet", )

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    photo= db.Column(db.String(255), nullable=False)
    description = db.Column(db.String, nullable=False)
    size = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(255), nullable=False)
    type = db.Column(db.String(255), nullable=False)
    is_adoptable = db.Column(db.Boolean(), default=False)

    ownerships = db.relationship("Ownership", back_populates="pet")
    # adoption_applications = db.relationship("AdoptionApplication", back_populates="pet")
    users = association_proxy("ownerships", "user")



class Ownership(db.Model, SerializerMixin):
    __tablename__ = "ownerships"

    serialize_rules = ("-pet.ownerships", "-user.ownerships", )

    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    pet = db.relationship("Pet", back_populates="ownerships")
    user = db.relationship("User", back_populates="ownerships")




class AdoptionApplication(db.Model, SerializerMixin):
    __tablename__ = "adoption_applications"

    serialize_rules = ("-user.adoption_applications",)

    id = db.Column(db.Integer, primary_key=True)
    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    HasHadPetBefore = db.Column(db.Boolean())
    TypeOfHousing = db.Column(db.String(255), nullable=False)

    # pet = db.relationship("Pet", back_populates="adoption_applications")
    user = db.relationship("User", back_populates="adoption_applications")