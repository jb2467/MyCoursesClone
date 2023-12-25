import hashlib
from flask_restful import Resource
from db import users_db

from flask_restful import request
from flask_restful import reqparse
import json
from  api.db_ultils import *

class Users(Resource):
    def put(self):
        return ""
    def get(self):
        return users_db.get_users();
    def delete(self):
       return ""
    def post(self): 
        id  = len(users_db.get_users()) + 1
        data = request.get_json()
        username = data.get('username')
        email = data.get('email')
        password = hashlib.sha512(bytes(data.get('password'), 'ascii')).hexdigest() 
        user = (users_db.get_user(username,email))
        if len(user)>0:
            print('hhelo')
            return '',400
        print(user, 'user')
        users_db.add_user((id, username,password,email, ''))
        print(users_db.get_users());
        return  '' ,200
