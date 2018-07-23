from serverapi import views
from flask import Flask, render_template, url_for, make_response, request, Response, json, jsonify
import random

app = Flask(__name__)
tasks_completed = 0
data = []
verified_data = []

@app.route("/")
def home():
    global tasks_completed
    tasks_completed = 0
    return render_template("index.html", tasks_completed = 0)

@app.route("/rate", methods=('GET', 'POST'))
def evaluate_images():
    global tasks_completed, verified_data, data
    # print(data)
    if (request.method == 'POST'):
        tasks_completed += 1
        arr_data = request.data
        arr_data = arr_data[1:len(arr_data) - 1]
        arr_data = arr_data.split(",")
        verified_data = arr_data
        if (tasks_completed == 5):
            return slot_machine()
    if (tasks_completed == 5):
        # upsert
        return slot_machine()
    reference = get_ref()
    category = reference[0]
    ref_img_arr = reference[1]
    ver_img_arr = get_verify_images(category)
    ver_url_arr = []
    for image in ver_img_arr:
        ver_url_arr.append(image['img_url'])
    print ("tasks completed:", tasks_completed)
    return render_template("image-rating.html", category = category, ref_img_arr = ref_img_arr, ver_img_arr = ver_url_arr, tasks_completed = tasks_completed)

@app.route("/rate")
def skip():
    global data
    print (data['skip_count'])
    return render_template("image-rating.html")

@app.route("/slotmachine")
def slot_machine():
    # global tasks_completed
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