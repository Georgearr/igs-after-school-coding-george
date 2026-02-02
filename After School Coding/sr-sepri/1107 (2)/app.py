from flask import Flask, render_template

app = Flask(__name__)

a = 11
b = 15

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html", a=a, b=b)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)