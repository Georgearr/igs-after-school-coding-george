from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
@app.route("/home")

def home():
    return f"Selamat, Berjuang! Sukseeeeeeees!!"

@app.route("/sapa/<name>")
def sapa(name):
    return f'Selamat datang, {name}! \n "Berjomok-jomoklah sebelum tidak boleh jomok lagi!!"'

@app.route("/profile/<name>/<kelas>")
def profile(name, kelas):
    return f'nama saya {name} kelas {kelas}!! {name} ganteng bgt!!'

@app.route("/hitung/<int:a>/<int:b>")
def hitung(a, b):
    return f'Hasil penjumlahan {a} + {b} = {a+b}'

@app.route("/biodata")
def biodata():
    return render_template("biodata.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)