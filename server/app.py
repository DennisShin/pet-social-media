from flask import make_response, jsonify, request, session
from flask import Flask
from flask_migrate import Migrate
from models import db, User, Pet, AdoptionApplication, Ownership
from config import app, db
from middleware import authorization_required
import bcrypt

# app = Flask(__name__)
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///petsocial.db"
# migrate = Migrate(app, db)
# db.init_app(app)

#######################################################
######## INITIAL SETUP ROUTES FOR APPLICATION #########
#######################################################

@app.route("/")
def home():
    return "Hello World!"

@app.get("/api")
@authorization_required
def api(current_user):
    return make_response({"user_id": current_user["id"], "msg": "API access granted."}, 200)


#################################################
######### API Routes for users in database ######
#################################################

# Get all users in the database
@app.get("/api/users")
def get_users():
    users = User.query.all()
    data = [user.to_dict() for user in users]
    return make_response(jsonify(data), 200)

@app.get("/api/me")
@authorization_required
def get_me(current_user):
    logged_in_user = User.query.get(current_user["id"])


    return make_response(jsonify(logged_in_user.to_dict(only=("adoption_applications", "email","id","ownerships","username","zipcode"))), 200)

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
    def encrypt_password(password):
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode("utf-8"), salt=salt)
        return hashed_password.decode("utf-8")
    
    data = request.get_json()
    new_user = User(
        username=data["username"],
        name = data["name"],
        email=data["email"],
        password_hash=encrypt_password(data["password_hash"]),
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



@app.get("/api/users/<int:user_id>/pets")
def get_users_pets(user_id):
    matching_user = User.query.get(user_id)
    data = [pet.to_dict() for pet in matching_user.ownerships]
    return make_response(jsonify(data), 200)

@app.post("/api/users/<int:user_id>/ownerships")
def create_user_pets(user_id: int):
    matching_user = User.query.get(user_id)
    data = request.get_json()
    pet_id = data["id"]
    matching_pet=Pet.query.get(pet_id)

    if not matching_user:
        return make_response(jsonify({'ERROR': 'USER NOT FOUND'}), 404)
    if not matching_pet:
        return make_response(jsonify({'ERROR': 'PET NOT FOUND'}), 404)
    
    new_ownership = Ownership(pet_id=matching_pet.id, user_id=matching_user.id)

    db.session.add(new_ownership)
    db.session.commit()
    
    return make_response(jsonify(new_ownership.to_dict()), 201)




#################################################
######### API Routes for pets in database #######
#################################################

# Get all pets in the database
@app.get("/api/pets")
def get_pets():
    pets = Pet.query.all()
    data = [pet.to_dict() for pet in pets]
    return make_response(jsonify(data), 200)

# Get current logged in user's pets
@app.get("/api/me/pets")
@authorization_required
def get_user_pets(current_user):
    logged_in_user = User.query.get(current_user["id"])
    data = [pet.pet.to_dict(only=("age","description","gender","id","is_adoptable","name", "photo")) for pet in logged_in_user.ownerships]
    return make_response(jsonify(data), 200)

@app.get("/api/adoptable_pets")
def get_adoptable_pets():
    pets = Pet.query.all()
    data = [pet.to_dict() for pet in pets if pet.is_adoptable == True]
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
        type=data["type"],
        is_adoptable=data["is_adoptable"]
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



####################################################################
################ ADDING A NEW ADOPTION APPLICATION #################
####################################################################


# Access a specific user's adoption applications
@app.get("/api/users/<int:user_id>/adoptions")
def get_adoption_applications(user_id):
    matching_user = User.query.get(user_id)
    data = [adoption_application.to_dict() for adoption_application in matching_user.adoption_applications]
    return make_response(jsonify(data), 200)


# Create a new adoption application
@app.post("/api/users/<int:user_id>/adoptions")
def create_adoption_application(user_id):
    matching_user = User.query.get(user_id)
    data = request.get_json()
    matching_pet = data["pet_id"]
    new_adoption_application = AdoptionApplication(
        pet_id=matching_pet.id,
        user_id=matching_user.id,
    )
    db.session.add(new_adoption_application)
    db.session.commit()
    return make_response(jsonify(new_adoption_application.to_dict()), 201)



# 404 Not Found Handler
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'You clicked on a link. But the page does not exist. Error 404.'}), 404)


# Authentication Handler #


@app.route("/signup", methods=["POST"])
def add_user():
    if request.method == "POST":
        # Retrieve POST request as JSONified payload.
        payload = request.get_json()

        # Extract username and password from payload.
        username = payload["username"]
        password = payload["password"]
        email = payload["email"]
        zipcode = payload["zipcode"]
        name = payload["name"]
        reason = payload["reason"]

        # Generate salt for strenghening password encryption.
        # NOTE: Salts add additional random bits to passwords prior to encryption.
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode("utf-8"), salt=salt)

        # Create new user instance using username and hashed password.
        new_user = User(
            username=username,
            name=name,
            password_hash=hashed_password.decode("utf-8"),
            email = email,
            zipcode = zipcode,
            reason = reason
        )

        if new_user is not None:
            # Add and commit newly created user to database.
            db.session.add(new_user)
            db.session.commit()

            # Save created user ID to server-persistent session storage.
            # NOTE: Sessions are to servers what cookies are to clients.
            # NOTE: Server sessions are NOT THE SAME as database sessions! (`session != db.session`)
            session["user_id"] = new_user.id

            return make_response(new_user.to_dict(only=("id", "username", "email")), 201)
        else:
            return make_response({"error": "Invalid username or password. Try again."}, 401)
    else:
        return make_response({"error": f"Invalid request type. (Expected POST; received {request.method}.)"}, 400)


# POST route to authenticate user in database using session-stored credentials.
@app.route("/login", methods=["POST"])
def user_login():
    if request.method == "POST":
        # Retrieve POST request as JSONified payload.
        payload = request.get_json()

        # Filter database by username to find matching user to potentially login.
        matching_user = User.query.filter(User.username.like(f"%{payload['username']}%")).first()

        # Check submitted password against hashed password in database for authentication.
        AUTHENTICATION_IS_SUCCESSFUL = bcrypt.checkpw(
            password=payload["password"].encode("utf-8"),
            hashed_password=matching_user.password_hash.encode("utf-8")
        )

        if matching_user is not None and AUTHENTICATION_IS_SUCCESSFUL:
            # Save authenticated user ID to server-persistent session storage.
            # NOTE: Sessions are to servers what cookies are to clients.
            # NOTE: Server sessions are NOT THE SAME as database sessions! (`session != db.session`)
            session["user_id"] = matching_user.id

            return make_response(matching_user.to_dict(only=("id", "username")), 200)
        else:
            return make_response({"error": "Invalid username or password. Try again."}, 401)
    else:
        return make_response({"error": f"Invalid request type. (Expected POST; received {request.method}.)"}, 400)
    


@app.route("/logout", methods=["DELETE"])
def user_logout():
    if request.method == "DELETE":
        # Clear user ID from server-persistent session storage.
        # NOTE: Sessions are to servers what cookies are to clients.
        # NOTE: Server sessions are NOT THE SAME as database sessions! (`session != db.session`)
        session["user_id"] = None

        return make_response({"msg": "User successfully logged out."}, 204)
    else:
        return make_response({"error": f"Invalid request type. (Expected DELETE; received {request.method}.)"}, 400)



if __name__ == "__main__":
    app.run(host="127.0.0.1",port=5555 ,debug=True)

