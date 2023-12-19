from api.db_ultils import exec_get_all


def get_users():
    query = "SELECT * FROM users"
    return exec_get_all(query)