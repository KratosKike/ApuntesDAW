def vocal(letra):

    if(letra=="a" or letra=="e" or letra=="i" or letra=="o" or letra=="u"):
        return True
    else:
        return False


letra = input("Introduce una letra ")

if(len(letra)>1):
    print ("Tiene que tener solo un caracter")
else:
    if(vocal(letra)):
        print("True")
    else:
        print("False")

