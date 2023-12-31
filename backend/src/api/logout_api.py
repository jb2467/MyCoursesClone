import hashlib
import secrets
from flask_restful import Resource
from db import users_db

from flask_restful import request
from flask_restful import reqparse
import json
from  api.db_ultils import *

class LogOut(Resource):
    def put(self, username):
        users_db.update_session_key('',username)
    