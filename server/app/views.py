from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    user = {'nickname': 'Miguel'}  # fake user
    return render_template('index.html',
                           title='Swipe n\' Snack',
                           user=user)

@app.route('/survey')
def survey():
    # get a random image
    return render_template('survey.html', title="Swipe n\' Snack")
