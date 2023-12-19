from api.user_api import Users
from api.db_ultils import exec_sql_file
from db.users_db import *
from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)  # create Flask instance
CORS(app)  # Enable CORS on Flask server to work with Nodejs pages
api = Api(app)  # api router

api.add_resource(Users, '/users')

if __name__ == '__main__':
    print("Loading db")
    exec_sql_file('db/database.sql')
    print("Starting flask")
    app.run(debug=True, port=4999),
