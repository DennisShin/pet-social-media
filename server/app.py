from flask import make_response, jsonify, request
from flask import Flask
from flask_migrate import Migrate
from models import db

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///petsocial.db"
migrate = Migrate(app, db)
db.init_app(app)

#######################################################
######## INITIAL SETUP ROUTES FOR APPLICATION #########
#######################################################

@app.route("/")
def home():
    return "Hello World!"