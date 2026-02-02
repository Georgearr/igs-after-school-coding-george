from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        return "validation"
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True)