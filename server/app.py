from flask import make_response, jsonify, request
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, User, Pet, AdoptionApplication, Ownership

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///petsocial.db"
migrate = Migrate(app, db)
db.init_app(app)
CORS(app)

#######################################################
######## INITIAL SETUP ROUTES FOR APPLICATION #########
#######################################################

@app.route("/")
def home():
    return "Hello World!"

@app.get("/api")
def api_access():
    return make_response(jsonify({'status': 'Up and running!'}), 200)


#################################################
######### API Routes for users in database ######
#################################################

# Get all users in the database
@app.get("/api/users")
def get_users():
    users = User.query.all()
    data = [user.to_dict() for user in users]
    return make_response(jsonify(data), 200)

# Querying a specific user given id
@app.get("/api/users/<int:user_id>")
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return make_response(jsonify({'ERROR': 'USER NOT FOUND'}), 404)
    data = user.to_dict()
    return make_response(jsonify(data), 200)


# Create a new user
@app.post("/api/users")
def create_user():
    data = request.get_json()
    new_user = User(
        username=data["username"],
        email=data["email"],
        password_hash=data["password_hash"],
        zipcode=data["zipcode"]
    )
    db.session.add(new_user)
    db.session.commit()
    return make_response(jsonify(new_user.to_dict()), 201)


# Delete a user given id
@app.delete("/api/users/<int:user_id>")
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return make_response(jsonify({'ERROR': 'USER NOT FOUND'}), 404)
    db.session.delete(user)
    db.session.commit()
    return make_response(jsonify(user.to_dict()), 200)




#################################################
######### API Routes for pets in database #######
#################################################

# Get all pets in the database
@app.get("/api/pets")
def get_pets():
    pets = Pet.query.all()
    data = [pet.to_dict() for pet in pets]
    return make_response(jsonify(data), 200)


# Querying a specific pet given id
@app.get("/api/pets/<int:pet_id>")
def get_pet(pet_id):
    pet = Pet.query.get(pet_id)
    if not pet:
        return make_response(jsonify({'ERROR': 'PET NOT FOUND'}), 404)
    data = pet.to_dict()
    return make_response(jsonify(data), 200)


# Create a new pet
@app.post("/api/pets")
def create_pet():
    data = request.get_json()
    new_pet = Pet(
        name=data["name"],
        photo=data["photo"],
        description=data["description"],
        size=data["size"],
        age=data["age"],
        gender=data["gender"],
        type=data["type"]
    )
    db.session.add(new_pet)
    db.session.commit()
    return make_response(jsonify(new_pet.to_dict()), 201)


# Delete a pet given id
@app.delete("/api/pets/<int:pet_id>")
def delete_pet(pet_id):
    pet = Pet.query.get(pet_id)
    if not pet:
        return make_response(jsonify({'ERROR': 'PET NOT FOUND'}), 404)
    db.session.delete(pet)
    db.session.commit()
    return make_response(jsonify(pet.to_dict()), 200)



# 404 Not Found Handler
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)


# 500 Internal Server Error Handler










if __name__ == "__main__":
    app.run(debug=True)

