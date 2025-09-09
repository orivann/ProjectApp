from flask import Flask, session, render_template 
from flask_session import Session
import redis
import os

app = Flask(__name__) 

app.config["SECRET_KEY"] = "supersecretkey"
app.config["SESSION_TYPE"] = "redis"
app.config["SESSION_REDIS"] = redis.Redis(
    host=os.environ.get("REDIS_HOST", "redis"),
    port=int(os.environ.get("REDIS_PORT", 6379))
)
Session(app)

@app.route("/")
def index():
    if "visits" in session:
        session["visits"] = session.get("visits") + 1
    else:
        session["visits"] = 1
    return render_template("index.html", visits=session["visits"])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
