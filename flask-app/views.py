#!/usr/bin/python3
from flask import render_template, url_for, jsonify, json, request
from app import app
# from app.vend import vending
from random import choice
import os, sys
from app.analyzeImage import magic

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html',
                           title='Swipe n\' Snack')

@app.route('/api/survey', methods=['GET', 'POST'])
def survey():
    # get a random image
    names = os.listdir(os.path.join(app.static_folder, 'assets/images/'))
    url_prefix = 'C:/Users/t-thming/Documents/GitHub/vending-machine-oneweek/server/app'
    # url_prefix = app.static_folder
    fileName = choice(names)
    # segmented_img_url = '/static/assets/images/' + fileName
    # full_img_url = url_prefix + segmented_img_url
    full_path = os.path.join(app.static_folder, 'assets\images\\', fileName)

    print("full_path", full_path)
    # img_url = url_for('static', filename=os.path.join('assets/images/', choice(names)))
    caption = magic(full_path)

    img_path = 'http://localhost:5000/static/assets/images/' + fileName
    # full_path = os.path.join(app.static_folder, 'assets\images\\', fileName)
    # print(os.path.join(app.static_folder, 'assets\images\\', fileName))
    print(app.static_folder)

    return jsonify(path = img_path, caption = caption)
    # return render_template('survey.html', img_url=segmented_img_url, title="Swipe n\' Snack", img_caption=caption)

@app.route('/api/rating', methods=['POST'])
def rating():
    content = request.get_json()
    print (content)
    return jsonify(path = 'asjdksaljdljda',caption= 'asjdklasjdlska', rating = 5)

@app.route('/api/vend', methods=['POST'])
def vend():
    vend = request.get_json()
    vending()
    return jsonify(path = 'asjdksaljdljda',caption= 'asjdklasjdlska', rating = 5)