from serverapi import views
from flask import Flask, render_template, url_for, make_response
import random

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/rate")
def evaluate_images():
    # print (views.get_doc("data", "categories", "4"))
    category = get_ref()[0]
    ref_img_arr = get_ref()[1]
    return render_template("image-rating.html", category = category, ref_img_arr = ref_img_arr)

def get_ref():
    randomInteger = str(random.randint(0,20))
    value = views.get_doc("data", "categories", randomInteger)
    return [value['name'], value['ref_image_paths']]
    # return get_doc(db_id, coll_id, doc_id)


if __name__ == "__main__":
    app.run(debug=True)