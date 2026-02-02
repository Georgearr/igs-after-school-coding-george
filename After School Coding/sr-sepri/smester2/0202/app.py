from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

usernameKey = "admin"
passwordKey = "admin123"

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == usernameKey and password == passwordKey:
            session['user'] = True
            return render_template('admin.html')
    return render_template('home.html')

@app.route('/admin')
def admin():
    if session["user"]:
        return render_template('admin.html')
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)