def maximo(num1, num2):
    if(num1==num2):
        return print(" Los 2 numeros son iguales")
    if(num1>num2):
        return print(str(num1) + " es el numero mayor")
    else:
        return print(str(num2) + " es el numero mayor")
        


numero1=int(input("Introduzca primer numero "))
numero2=int(input("Introduzca segundo numero "))

maximo(numero1,numero2)
