# x = 127
# print(f"Nilai x = {x} tp = {type(x)}")
# y = str(x)
# print(f"Nilai y = {y} tp = {type(y)}")
# k = str(y)
# kata = "12"
# i = int(kata)

# j = 10
# print(f"j = {j} tp = {type(j)}")
# bol = bool(j)
# print(f"bol = {bol} tp = {type(bol)}")

# nama = input("Masukkan nama Anda: ")
# age = input("Masukkan umur Anda: ")
# umur = int(age)
# print(f"Nama Anda adalah {nama} dan tipe datanya adalah {type(nama)}")
# print(f"Umur Anda adalah {umur} dan tipe datanya adalah {type(umur)}")

# print("-"*25)
# x = int(input("Nilai x = "))
# y = int(input("Nilai y = "))
# print(f"Nilai x = {x} dan y = {y}, jika a+b = {x+y}")

a = int(input("Masukkan Nilai a: "))
b = int(input("Masukkan Nilai b: "))
c = int(input("Masukkan Nilai c: "))

hasil_1 = a*b-c
hasil_2 = a+b/23//(1+c) * hasil_1
hasil_3 = 127 + (a-c+b)%hasil_2**hasil_1

print("......LATIHAN 1.....")
print(f"Hasil 1: a * b - c = {hasil_1}")
print(f"Hasil 2: a + b // 23 // (1 + c) * hasil_1 = {hasil_2}")
print(f"Hasil 3: 127 + (a - c + b) % hasil_2 ** hasil_1 = {hasil_3}")