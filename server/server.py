from flask import Flask, redirect, url_for, render_template, request, session, flash
import datetime
from flask_sqlalchemy import SQLAlchemy
import sqlite3
import json

app = Flask(__name__)

conn = sqlite3.connect(':memory:', check_same_thread=False)
c = conn.cursor()
f = open("db_director_setup.txt", "r")
for entry in f:
    c.execute(entry)
f.close()

f = open("movie_stars_db_setup.txt", "r")
for entry in f:
    c.execute(entry)
f.close()

conn.commit()
@app.route("/dummy")
def dummy():
    c.execute("SELECT * FROM director")
    result = list(c.fetchall())
    print(result)
    # return result
    return {"result": result}

@app.route("/dumdum")
def dumd(argument=None):
    # select fn
    query_str = "SELECT * FROM director WHERE id > 3"
    c.execute(query_str)
    result = list(c.fetchall())
    print(result)
    # return result
    return {"result": result}

@app.route("/")
def home():
    return "The Smurfs Page!"

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

# dynamic URL with int variable: <int:star_id>
@app.route("/movie_stars/<int:star_id>", methods=['GET', 'POST'])
def movie_stars(star_id):
    # request_data = json.loads(request.data)
    # query = f"SELECT * FROM movie_stars WHERE id={request_data['content']}"
    query = f"SELECT * FROM movie_stars WHERE id={star_id}"

    c.execute(query)
    result = c.fetchall()
    print(result)
    return {"info": result}

@app.route("/movie_stars_list")
def movie_stars_list():
    c.execute("SELECT * FROM movie_stars")
    result = list(c.fetchall())
    return {"info": result}

# Members API Route
if __name__ == "__main__":
    app.run(debug=True)
