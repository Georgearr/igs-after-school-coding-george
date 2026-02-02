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