from serverapi import views
from flask import Flask, render_template, url_for, make_response, request, Response, json, jsonify
import random

app = Flask(__name__)

#GLOBAL VARIABLES 

@app.route("/")
def home():
    tasks_completed = 0
    return render_template("index.html")

@app.route("/rate", methods=('GET', 'POST'))
def evaluate_images():
    # print (views.get_doc("data", "categories", "4"))
    # return render_template("image-rating.html")
    reference = get_ref()
    category = reference[0]
    ref_img_arr = reference[1]
    ver_img_arr = get_verify_images(category)
    ver_url_arr = []
    for image in ver_img_arr:
        ver_url_arr.append(image['img_url'])
    return render_template("image-rating.html", category = category, ref_img_arr = ref_img_arr, ver_img_arr = ver_url_arr)

@app.route("/rateimg", methods=('GET', 'POST'))
def verify():
    # increment numbers completed
    # upsert values
    if (request.method == 'POST'):
        arrString = request.data
        
    return evaluate_images()

@app.route("/rate")
def skip():
    return render_template("image-rating.html")

@app.route("/slotmachine")
def slot_machine():
    return render_template("slot-machine.html")

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