'''
Diccionarios
Un diccionario es una colección desordenada, modificable e indexada. En Python, los diccionarios se escriben con llaves y tienen claves y valores.
Un tipo de dato que almacena un conjunto de datos
En formato clave > valor
Es un conjunto de datos no ordenado
''' 

# Crear un diccionario
# Los diccionarios  tienen un indice que es la clave

persona = {
    "nombre": "Juan",
    "apellidos": "Perez",
    "web": "juanperez.com"
}

# si queremos acceder a un valor del diccionario, lo hacemos mediante la clave
print(persona["nombre"])

# Listado de diccionarios
# Podemos tener una lista con varios diccionarios
contactos = [
    {
        "nombre": "Antonio",
        "email": "antonio@gmail.com",
    },
    {
        "nombre": "Luis",
        "email": "luis123@gmail.com",
    },
    {
        "nombre": "Salvador",
        "email": "salvador@gmail.com",
    }
]

print("\nLISTADO DE CONTACTOS")
for contacto in contactos:
    print(f"Nombre del contacto: {contacto['nombre']}")
    print(f"Email del contacto: {contacto['email']}")
    print("------------")
    