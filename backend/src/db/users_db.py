from api.db_ultils import *


def get_users():
    query = "SELECT * FROM users"
    return exec_get_all(query)

def add_user(data):
    return exec_commit("INSERT INTO users(id, username, password, email, session_key ) VALUES (%s, %s, %s, %s, %s)", data)
def get_user(username,email):
    return exec_get_all("SELECT * FROM users WHERE username = %s OR email = %s", (username, email))
