def longitud(array):
    contador = 0
    for elemento in array:
        contador+=1

    return print("La longitud es "+str(contador))


inp_lst = ['Python','Java','Kotlin','Machine Learning','Keras']
longitud(inp_lst)

palabra ="hola que tal"
longitud(palabra)

testeo = input("Introduce una cadena")
longitud(testeo)
