'''
Escribir una clase en python que obtenga todos los posibles subconjuntos 
únicos de un conjunto de números enteros distintos.
Entrada: [4, 5, 6]
Salida: [[], [6], [5], [5, 6], [4], [4, 6], [4, 5], [4, 5, 6]]
'''

def subconjuntos(numeros):
    return subconjuntos_recursivo([],sorted(numeros))

def subconjuntos_recursivo(actual, conjunto):
    if conjunto:
        return subconjuntos_recursivo(actual,
        conjunto[1:])+subconjuntos_recursivo(actual + [conjunto[0]],
        conjunto[1:])
    return [actual]


numeros = [1, 2, 3, 4, 5]
resultado = subconjuntos(numeros)
print(resultado)