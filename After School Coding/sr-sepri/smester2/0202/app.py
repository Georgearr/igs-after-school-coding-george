from flask import Flask, render_template, request, redirect, url_for, session
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)
print(app.secret_key)

usernameKey = "admin"
passwordKey = "admin123"

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == usernameKey and password == passwordKey:
            session['user'] = username
            return redirect(url_for('admin'))
    return render_template('home.html')

@app.route('/admin')
def admin():
    if session.get("user"):
        return render_template('admin.html')
    return redirect(url_for('home'))

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)