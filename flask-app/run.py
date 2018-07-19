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
    reference = get_ref()
    category = reference[0]
    ref_img_arr = reference[1]
    ver_img_arr = get_verify_images(category)
    ver_url_arr = []
    for image in ver_img_arr:
        ver_url_arr.append(image['img_url'])
    print (ver_url_arr)

    return render_template("image-rating.html", category = category, ref_img_arr = ref_img_arr, ver_img_arr = ver_url_arr)

def get_ref():
    randomInteger = str(random.randint(0,20))
    value = views.get_doc("data", "categories", randomInteger)
    return [value['name'], value['ref_image_paths']]
    # return get_doc(db_id, coll_id, doc_id)

def get_verify_images(category):
    query = "select * from c where c.category=\"{}\" order by c.judgement_count asc".format(category)
    img_json = views.query("data", "images", query)
    ver_img_arr = []
    for i in range(6):
        ver_img_arr.append(img_json[i])
    return ver_img_arr


if __name__ == "__main__":
    app.run(debug=True)