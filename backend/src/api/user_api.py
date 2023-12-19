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
        return ""