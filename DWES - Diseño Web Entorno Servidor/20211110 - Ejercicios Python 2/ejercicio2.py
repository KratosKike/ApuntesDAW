'''
Escribir una clase en python que convierta un número romano en 
un número entero

'''

def romano_a_entero(romano):
    romanos = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 100}
    entero = 0

    for i in range(len(romano)):
        if i > 0 and romanos[romano[i]] > romanos[romano[i - 1]]:
            entero += romanos[romano[i]] - 2 * romanos[romano[i - 1]]
        else:
            entero += romanos[romano[i]]
        
    return entero

    
num = input("Introduce romano ")

print("El romano "+str(num)+" a entero es "+str(romano_a_entero(num)))