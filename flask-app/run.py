from serverapi import views, lottery, vendingmachine
from flask import Flask, render_template, url_for, make_response, request, Response, json, jsonify
import random

app = Flask(__name__)
tasks_completed = 0
data = []
verified_data = [] # this is the entire image query, just get the first six
lot = lottery.Lottery()
vending = vendingmachine.VendingMachine("test")

@app.route("/")
def home():
    global tasks_completed
    tasks_completed = 0
    return render_template("index.html", tasks_completed = tasks_completed)

@app.route("/rate", methods=('GET', 'POST'))
def evaluate_images():
    global tasks_completed, verified_data, data
    # print(data)
    if (request.method == 'POST'):
        tasks_completed += 1 
        arr_data = request.data
        arr_data = arr_data.decode()
        arr_data = arr_data[1:len(arr_data) - 1]
        arr_data = arr_data.split(",")
        # upsert
        print ("\n\n\n")
        for i in range(len(arr_data)):
            if (arr_data[i] == '1'):
                # upsert
                verified_data[i]['judgement_count'] += 1
                verified_data[i]['judgements'].append(1)
            else:
                verified_data[i]['judgement_count'] += 1
                verified_data[i]['judgements'].append(0)        
        # if completed
        views.upsert_doc("data", "images", verified_data)
        
        if (tasks_completed == 5): 
            return render_template("slot-machine.html")
    if (tasks_completed == 5):
        return render_template("slot-machine.html")
    reference = get_ref()
    category = reference[0]
    ref_img_arr = reference[1]
    ver_img_arr = get_verify_images(category)
    ver_url_arr = []
    for image in ver_img_arr:
        ver_url_arr.append(image['img_url'])
    return render_template("image-rating.html", category = category, ref_img_arr = ref_img_arr, ver_img_arr = ver_url_arr, tasks_completed = tasks_completed)

@app.route("/rate")
def skip():
    global data
    print (data['skip_count'])
    return render_template("image-rating.html")

@app.route("/slotmachine", methods=('GET', 'POST'))
def slot_machine():
    global lot, vending
    slot_result = lot.spin()
    if (request.method == 'POST'):
        print ("request.data", request.data)
        print (request.data.decode() == '1')
        if request.data.decode() == '1':
            print ("this happened")
            #  send result to arduino
            # print (result) 
            vending.vend(slot_result)
            new_slot_result = slot_result - 4
            return render_template("slot-machine.html", slot_result = new_slot_result)
    return render_template("slot-machine.html")

def get_ref():
    global data
    randomInteger = str(random.randint(0,20))
    value = views.get_doc("data", "categories", randomInteger)
    data = value   
    return [value['name'], value['ref_image_paths']]
    # return get_doc(db_id, coll_id, doc_id)

def get_verify_images(category):
    global verified_data
    query = "select * from c where c.category=\"{}\" order by c.judgement_count asc".format(category)
    img_json = views.query("data", "images", query)
    verified_data = img_json
    ver_img_arr = []
    for i in range(6):
        ver_img_arr.append(img_json[i])
    return ver_img_arr

if __name__ == "__main__":
    app.run(debug=True)