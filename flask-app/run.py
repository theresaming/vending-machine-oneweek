from serverapi import views
from flask import Flask, render_template, url_for, make_response, request, Response, json, jsonify
import random

app = Flask(__name__)
tasks_completed = 0
data = []
verified_data = []

@app.route("/")
def home():
    tasks_completed = 0
    return render_template("index.html")

global tasks_completed
@app.route("/rate", methods=('GET', 'POST'))
def evaluate_images():
    global tasks_completed, verified_data
    if (request.method == 'POST'):
        tasks_completed += 1
        arr_data = request.data
        arr_data = arr_data[1:len(arr_data) - 1]
        arr_data = arr_data.split(",")
        verified_data = arr_data
        print (tasks_completed)
    # print (views.get_doc("data", "categories", "4"))
    # return render_template("image-rating.html")
    if (tasks_completed == 5):
        # done go to slot machine
        return render_template("slot-machine.html")
    reference = get_ref()
    category = reference[0]
    ref_img_arr = reference[1]
    ver_img_arr = get_verify_images(category)
    ver_url_arr = []
    for image in ver_img_arr:
        ver_url_arr.append(image['img_url'])
    return render_template("image-rating.html", category = category, ref_img_arr = ref_img_arr, ver_img_arr = ver_url_arr)

@app.route("/rate")
def skip():
    return render_template("image-rating.html")

@app.route("/slotmachine")
def slot_machine():
    return render_template("slot-machine.html")

def get_ref():
    global data
    randomInteger = str(random.randint(0,20))
    value = views.get_doc("data", "categories", randomInteger)
    data = value
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