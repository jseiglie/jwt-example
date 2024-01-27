"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/login", methods=["POST"])
def login():
    data= request.json
    user = Users.query.filter_by(email=data["email"], password=data["password"]).first()
    if not user:
        return jsonify({"error": "Usuario no encontrado"}), 404
    return jsonify({"data": user.serialize()}),200

@api.route("/admin", methods=["GET"])
@jwt_required
def admin():
    id = get_jwt_identity()
    #verificar que el id pertenece a un admin 

    #lo que va a hacer el endpoint

