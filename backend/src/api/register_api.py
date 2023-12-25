import hashlib
from flask_restful import Resource
from db import users_db

from flask_restful import request
from flask_restful import reqparse
import json
from  api.db_ultils import *

class register(Resource):
    def put(self):
        return ""
    def get(self):
        return ""
    def delete(self):
       return ""
    def post(self): 
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = hashlib.sha512(bytes(data.get('password'), 'ascii')).hexdigest() 
        users_db.add_user((id, username,email,password, ''))
        return ""