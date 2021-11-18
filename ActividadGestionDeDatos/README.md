# Actividad Individual - Gestión de Datos.

Módulo Profesional: Desarrollo Web Entorno Servidor.

UD4. PHP - Acceso a Datos.

Para realizar esta práctica deberás pensar con anterioridad la temática sobre la que vas a trabajar, ya que deberás definir una tabla que almacene datos relacionados.

Te recomiendo que vayas solucionando los ejercicios en **orden secuencial**, no intentes resolverlos de forma salteada o como un único problema.

Antes de comenzar, crea la carpeta images en la raíz de la aplicación. En esa carpeta se almacenarán las imagénes que suban los usuarios.

***LA ENTREGA DEBE INCLUIR EL SCRIPT DE EXPORTACIÓN DE LA BASE DE DATOS EN EL FICHERO SCRIPT.SQL.***

# Ejercicio 1 - Definición de base de datos. (1,75 puntos)
1. Crea la base de datos en phpmyadmin cumpliendo con los siguientes campos:
    - ID que sea clave primaria, auto incremental.
    - 3 Campos de texto (TEXT).
    - 1 Campo de fecha (DATE).
    - 2 Campos numéricos (INT o FLOAT).
    - 1 Campo de texto para almacenar el nombre de la imagen (TEXT).



2. Utiliza el fichero ***databaseManagement.inc.php*** para definir las operaciones CRUD utilizando PHP Data Objects (PDO) tal y como se describe:
    - Almacena los datos de conexión en variables globales.

    - En cada una de las funciones descritas a continuación, establece la conexión y cierrala, además de controlar los posibles errores con bloques try-catch.

    - Crea la función **obtenerElemento** que devuelva un elemento a partir del id, el formato que devuelve debe ser un diccionario (clave-valor).

    - Crea la función **eliminarElemento** que elimina un elemento a partir del id, devolverá true en caso de que se haya borrado correctamente y falso en caso contrario.

    - Crea la función **editarElemento** que recibirá todos los datos que componen a un elemento y actualizará todos sus valores, devolverá true en caso de que se haya editado correctamente y false en caso contrario.

    - Crea la función **obtenerTodos** que devuelva una matriz (array de arrays) con los campos id, texto1, texto2 fecha y número1.

    - Crea la función **insertaElemento** que recibirá todos los datos que componen a un elemento e insertará un elemento nuevo, devolverá el id del elemento añadido.





# Ejercicio 2 - Página principal. (0,25 puntos)
Añade una pequeña descripción de la temática de la web:
  - Campos de la base de datos.

  - Funcionalidades implementadas.

  - Funcionalidades extra implementadas.




# Ejercicio 3 - Crear nuevo elemento. (1,5 puntos)
Ahora vamos a trabajar con el fichero ***create.php***. Sigue los pasos que se describen a continuación:

1. Modifica el formulario para que sea procesado de forma segura por si mismo.

2. Modifica los atributos name y placeholder de los inputs de acuerdo a los nombres de los campos de tu base de datos.

3. Incluye el fichero ***databaseManagement.inc.php*** al inicio del fichero.

4. Crea el código PHP necesario para que al enviar el formulario:
    - Se almacene la imagen en la carpeta images. AYUDA: https://www.w3schools.com/php/php_file_upload.asp
    - Se extraigan los campos de los inputs y se llame a la función **insertaElemento**, el campo relacionado con la imagen almacenará el nombre de esta.
      - Si no ha sido posible insertar el elemento, se mostrará un mensaje de error.
      - Si ha sido posible insertar el elemento, se redirigirá a la página ***view.php*** con un parámetro que sea el id del elemento que se acaba de añadir. http://www.formacionwebonline.com/enviar-parametros-traves-una-url-usando-headerlocation/


# Ejercicio 4 - Listar todos los elementos. (2 puntos)
Ahora vamos a trabajar con el fichero ***list.php***. Sigue los pasos que se describen a continuación:
1. Modifica las cabeceras de la tabla de acuerdo a los nombres de los campos de tu base de datos.
3. Incluye el fichero ***databaseManagement.inc.php*** al inicio del fichero.
4. Crea el código PHP necesario para que al entrar en la página se llame a la función **obtenerTodos** y se rellene la tabla con el resultado de esta.
5. En las columnas que no se corresponden con datos de la base de datos deberás implementar las siguientes funcionalidades:
    - Columna detalle: Enlace que redirige a la página ***view.php*** con un parámetro que sea el id del elemento de la fila correspondiente.
    - Columna editar: Enlace que redirige a la página ***edit.php*** con un parámetro que sea el id del elemento de la fila correspondiente.
    - Columna borrar: Enlace que redirige a la página ***delete.php*** con un parámetro que sea el id del elemento de la fila correspondiente.
    - AYUDA: https://desarrolloweb.com/articulos/317.php


# Ejercicio 5 - Editar un elemento (2 puntos)
Ahora vamos a trabajar con el fichero ***edit.php***. Sigue los pasos que se describen a continuación:
1. Modifica los atributos name y placeholder de los inputs de acuerdo a los nombres de los campos de tu base de datos.
2. Incluye el fichero ***databaseManagement.inc.php*** al inicio del fichero.
3. Crea el código PHP necesario para que al entrar en la página, se utilice el parámetro id, que se ha pasado utilizando el método GET, para extraer el elemento concreto de la base de datos utilizando la función **obtenerElemento**.
4. Utiliza el elemento para rellenar el formulario, cada campo en su input correspondiente, excepto la imagen que usaremos el atributo src del elemento img con name avatarActual. Ten en cuenta que la imagen se encuentra en la carpeta images.

Llegados a este punto, si desde **list.php** pinchamos en el enlace de editar, se debería cargar el elemento completo en el formulario de **edit.php**. A continuación desarrollaremos los pasos que nos permitan almacenar los cambios:
1. Modifica el formulario para que sea procesado de forma segura por si mismo, utilizando el método POST.
2. Cuando se le de al botón de editar, llama a la función editarElemento con todos los campos del formulario. CUIDADO CON LA IMAGEN, SI NO HAY IMAGEN NUEVA NO QUEREMOS CAMBIAR LA IMAGEN POR UNA VACÍA, TENDRÁS QUE MANTENER LA ANTERIOR.
    - Si se ha editado correctamente, se redirigirá a la página ***view.php*** con un parámetro que sea el id del elemento que se acaba de editar.
    - Si no ha sido posible la edición, se mostrará un mensaje de error en el div con id errores y se volverá a cargar el elemento tal y como aparece en la base de datos.
# Ejercicio 6 - Eliminar un elemento (0,5 puntos)
Ahora vamos a trabajar con el fichero ***delete.php***. Sigue los pasos que se describen a continuación:
1. Incluye el fichero ***databaseManagement.inc.php*** al inicio del fichero.
2. Crea el código PHP necesario para que al entrar en la página, se utilice el parámetro id, que se ha pasado utilizando el método GET, para eliminar el elemento concreto de la base de datos utilizando la función **eliminarElemento**.
    - Si se ha eliminado correctamente, se mostrará un mensaje de confirmación.
    - Si no se ha eliminado correctamente, se mostrará un mensaje de error.
    - Eres libre de realizar las modificaciones que quieras en el HTML para este apartado.

Llegados a este punto, si desde **list.php** pinchamos en el enlace de borrar, se debería borrar el elemento de la base de datos y mostrar un mensaje de confirmación en **delete.php**.

# Ejercicio 7 - Mostrar un elemento (1 punto)
Ahora vamos a trabajar con el fichero ***view.php***. Sigue los pasos que se describen a continuación:

1. Incluye el fichero ***databaseManagement.inc.php*** al inicio del fichero.

2. Crea el código PHP necesario para que al entrar en la página, se utilice el parámetro id, que se ha pasado utilizando el método GET, para extraer el elemento concreto de la base de datos utilizando la función **obtenerElemento**.

3. Sigue las instrucciones que puedes encontrar en el propio HTML para cargar cada campo del elemento en su lugar correspondiente del HTML, ten en cuenta que la imagen se encuentra en la carpeta images.

Llegados a este punto, si desde **list.php** pinchamos en el enlace de detalle, se debería cargar el elemento de la base de datos y mostrarlo en **view.php**.


# Ejercicio 8 - Importar elementos (1 punto)
Ahora vamos a trabajar con el fichero ***import.php***, desde aquí vamos a implementar la capacidad de hacer importaciones masivas a nuestra base de datos a partir de un fichero CSV.

Antes de continuar, debes crear un fichero CSV (Revisa las diapositivas de aula para acordarte de su formato) con al menos 5 filas y todas las columnas excepto las de id e imagen. A continuación, sigue los pasos que se describen:
1. Incluye el fichero ***databaseManagement.inc.php*** al inicio del fichero.
2. Modifica el formulario para que sea procesado de forma segura por si mismo, utilizando el método POST.
3. Crea el código PHP necesario para que al enviar el formulario se recorra el CSV fila a fila y se utilice la función **insertaElemento** para almacenarlos en la base de datos. Como en un CSV no tenemos imágenes, este campo permanecerá en blanco.
    - Si no ha habido problemas muestra un mensaje de confirmación con el número de elementos añadidos.
    - Si ha habido algún problema muestra un mensaje de error.
    - Eres libre de realizar las modificaciones que quieras en el HTML para este apartado.

Llegados a este punto, si cargamos el fichero CSV de ejemplo que hicimos antes de comenzar el ejercicio, los elementos se deberían almacenar en la base de datos.

# EXTRA - Otras funcionalidades (No aportan nota de forma directa, se valorarán positivamente)
1. Valida los datos de los formularios de forma que los campos de texto sean seguros.
2. Crea una página equivalente a **import.php** que permita exportar toda la información contenida en la base de datos a un fichero csv con el formato que se indica al comienzo del ejercicio 8.
