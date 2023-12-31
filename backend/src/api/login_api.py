import hashlib
import secrets
from flask_restful import Resource
from db import users_db

from flask_restful import request
from flask_restful import reqparse
import json
from  api.db_ultils import *

class Login(Resource):
    def post(self): 
        data = request.get_json()
        username = data.get('username')
        password = hashlib.sha512(bytes(data.get('password'), 'ascii')).hexdigest() 
        exist_password = users_db.get_user_password(username)
        if(exist_password and exist_password[0][0] == password):
            key = secrets.token_urlsafe(16)
            s = users_db.update_session_key(key,username)
            return {'session_key': key}, 200
        return "", 400



