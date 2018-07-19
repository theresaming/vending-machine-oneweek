from serverapi import app
from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/rate")
def evaluate_images():
    return render_template("image-rating.html", category = "Adidas")

if __name__ == "__main__":
    app.run(debug=True)