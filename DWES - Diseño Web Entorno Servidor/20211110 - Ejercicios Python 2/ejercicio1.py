'''
Escribir una clase en python que convierta un número entero a 
número romano
'''
def entero_a_romano(entero):
    numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    numerales = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    numeral = ''
    i = 0

    enterito= int(entero)

    while enterito > 0:
        for _ in range(enterito // numeros[i]):
            numeral += numerales[i]
            enterito -= numeros[i]

        i += 1
    
    return numeral

num = input("Introduce entero ")

print("El numero "+num+" a romano es "+entero_a_romano(num))