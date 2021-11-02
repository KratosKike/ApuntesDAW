def maximo_de_tres(num1,num2,num3):

    if(num1==num2==num3):
        return print("Los 3 numeros son iguales")
    if(num1>num2):
        if(num1>num3):
            return print(str(num1)+" es el mayor de los 3")
        else:
            return print(str(num3)+" es el mayor de los 3")
    else:
        if(num2>num3):
            return print(str(num2)+" es el mayor de los 3")
        else:
            return print(str(num3)+" es el mayor de los 3")



numero1=int(input("Introduzca primer numero "))
numero2=int(input("Introduzca segundo numero "))
numero3=int(input("Introduzca tercer numero "))

maximo_de_tres(numero1,numero2,numero3)