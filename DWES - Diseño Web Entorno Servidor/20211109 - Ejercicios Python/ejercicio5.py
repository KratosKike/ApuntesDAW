def sum(array):
    suma = 0
    for numero in array:
        suma+=numero
    return suma

def multip(array):
    multi = 1
    for numero in array:
        multi*=numero
    return multi


ejemplo = [1,2,3,4]

print(sum(ejemplo))

print(multip(ejemplo))
