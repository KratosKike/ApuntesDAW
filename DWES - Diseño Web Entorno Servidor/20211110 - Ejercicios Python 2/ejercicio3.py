'''
Escribir una clase en python para encontrar la validez de una 
cadena de paréntesis, '(', ')', '{', '}', '['  ']. Los paréntesis 
deben aparecer en el orden correcto, por ejemplo "()" y "()[]{}" 
son validos, pero "[)", "({[)]" y "{{{" son inválidos.
'''
def validar_Parentesis(cadena):

    validar = True

    #recorrer cadena
    for i in range (len(cadena)):
        #detectar ultimo elemento
        if(i==len(cadena)):
            break
        #detectar inicio de parentesis
        if(cadena[i] =="("):
            #mirar si el siguiente es la buena
            if(cadena[i+1]!=")"):
                #peta
                validar=False
        if(cadena[i] =="["):
            #mirar si el siguiente es la buena
            if(cadena[i+1]!="]"):
                #peta
                validar=False
        if(cadena[i] =="{"):
            #mirar si el siguiente es la buena
            if(cadena[i+1]!="}"):
                #peta
                validar=False






    return validar



cadenaParentesis=input("Introduce una cadena de parentesis ")

print(validar_Parentesis(cadenaParentesis))