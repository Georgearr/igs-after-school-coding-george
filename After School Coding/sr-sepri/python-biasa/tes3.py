a = 11
b = 15
nilaiSiwa = [80, 85, 90, 75, 95]

from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html", a=a, b=b)

@app.route("/nilai")
def kegiatan():
    return render_template("nilai.html",nilaiSiwa=nilaiSiwa)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)