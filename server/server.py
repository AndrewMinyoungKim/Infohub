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

f = open("movie_stars_db_setup_f.txt", "r")
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

# dynamic URL with int variable: <int:star_id>, <sex>
@app.route("/movie_stars/<int:star_id>/<sex>", methods=['GET', 'POST'])
def movie_stars(star_id=1, sex="male"):
    if(sex == "male"):
        query = f"SELECT * FROM movie_stars WHERE id={star_id}"
    else:
        query = f"SELECT * FROM movie_stars_female WHERE id={star_id}"

    c.execute(query)
    result = c.fetchall()
    print(result)
    return {"info": result}

@app.route("/movie_stars_list")
def movie_stars_list():
    c.execute("SELECT * FROM movie_stars")
    result_m = list(c.fetchall())
    c.execute("SELECT * FROM movie_stars_female")
    result_f = list(c.fetchall())
    return {"male": result_m, "female": result_f}

# Members API Route
if __name__ == "__main__":
    app.run(debug=True)
