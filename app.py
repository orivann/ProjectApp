from flask import Flask, session, render_template
from flask_session import Session
import redis
import os

def create_app(config_overrides=None):
    app = Flask(__name__)

    # Session configuration
    app.config["SECRET_KEY"] = "supersecretkey"
    app.config["SESSION_TYPE"] = "redis"
    app.config["SESSION_REDIS"] = redis.Redis(
        host=os.environ.get("REDIS_HOST", "redis"),
        port=int(os.environ.get("REDIS_PORT", 6379))
    )

    if config_overrides:
        app.config.update(config_overrides)

    Session(app)

    # Routes
    @app.route("/")
    def index():
        if "visits" in session:
            session["visits"] = session.get("visits") + 1
        else:
            session["visits"] = 1
        return render_template("index.html", visits=session["visits"])

    @app.route("/products")
    def products():
        return render_template("products.html")

    @app.route("/services")
    def services():
        return render_template("services.html")

    @app.route("/about")
    def about():
        return render_template("about.html")

    @app.route("/contact")
    def contact():
        return render_template("contact.html")

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5000)
