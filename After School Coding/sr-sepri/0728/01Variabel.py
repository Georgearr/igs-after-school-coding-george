nama = "George"  # tipe string
umur = 15  # tipe int
tinggi = 175  # tipe float

print(f"nama saya {nama}, tipe data {type(nama)}")
print(f"umur saya {umur} tahun, tipe data {type(umur)}")
print(f"tinggi saya {tinggi} cm, tipe data {type(tinggi)}")
print(nama[0])
print(nama[0:5])  # slicing
print(nama[-1])  # karakter terakhir
print(nama[-5:-1])  # slicing dari belakang

name = "gor"
print(name)
name[0] = "G" + name[1:]
print(f"Heii \n nama saya {nama}, \t umur saya {umur} tahun, tinggi saya {tinggi} cm")