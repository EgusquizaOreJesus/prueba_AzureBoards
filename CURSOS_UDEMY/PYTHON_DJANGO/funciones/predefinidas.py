'''
Funciones predefinidas
'''

# Detectar el tipo de dato
nombre = "Juan"
comprobar = isinstance(nombre, str)
if comprobar:
    print("Esa variable es un string")
else:
    print("No es una cadena")

# limpiar espacios
frase = "    mi contenido    "
print(frase)
print(frase.strip())    # elimina los espacios al inicio y al final

# Eliminar variables
year = 2022
print(year)
del year
# print(year) # da error porque ya no existe la variable

# Comprobar variable vacía
texto = " ff "
if len(texto) <= 0:
    print("La variable está vacía")
else:
    print("La variable tiene contenido: ", len(texto))


# Encontrar caracteres
frase = "La vida es bella"
print(frase.find("vida")) # devuelve la posición de la primera coincidencia
print(frase.count("vida")) # cuantas veces aparece la palabra

# Reemplazar palabras en un string
nueva_frase = frase.replace("vida", "moto")
print(nueva_frase)

# Mayúsculas y minúsculas
print(nombre)
print(nombre.lower()) # minúsculas
print(nombre.upper()) # mayúsculas

# Capitalize: Pone la primera letra en mayúscula
print(nombre.capitalize())

# Alternativa a capitalize

print(nombre[0].upper() + nombre[1:])

# Funciones predefinidas
# print(len(nombre)) # longitud
# print(type(nombre)) # tipo de dato
# print(nombre)