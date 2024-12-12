from io import open
import pathlib  # Para trabajar con rutas de archivos
import shutil   # Copiar, mover y eliminar archivos
import os   # Para trabajar con el sistema operativo, como eliminar archivos

# Abrir archivo
ruta = str(pathlib.Path().absolute()) + "/fichero_texto.txt"   # Obtener la ruta absoluta del archivo

archivo = open(ruta, "a+")    # r = read, w = write, a = append, r+ = read and write
# a+ = append and read, osea que si el archivo no existe, lo crea

# Escribir en el archivo
#archivo.write("********** Soy un texto metido desde Python **********\n")

# Cerrar archivo
archivo.close()

# Leer archivo
archivo_lectura = open(ruta, "r")   # r = read only

# Leer contenido
contenido = archivo_lectura.read()
#print(contenido)


# Leer contenido y guardarlo en una lista
archivo_lectura.seek(0)  # Mover el cursor al principio del archivo
lista = archivo_lectura.readlines()   # Guardar cada linea en una lista
archivo_lectura.close()

for elemento in lista:
    print(elemento)


# copiar un archivo
'''
archivo_original = open(ruta, "r")
archivo_copia = str(pathlib.Path().absolute()) + "/fichero_copia.txt"

shutil.copyfile(ruta, archivo_copia)  # Copiar archivo

'''


# Mover archivo
'''
ruta_original = str(pathlib.Path().absolute()) + "/fichero_copia.txt"
ruta_nueva = str(pathlib.Path().absolute()) + "/fichero_texto_nuevo.txt"

shutil.move(ruta_original, ruta_nueva)  # Mover archivo
'''


# Eliminar archivo
ruta_nueva = str(pathlib.Path().absolute()) + "/fichero_texto_nuevo.txt"
#os.remove(ruta_nueva)   # Eliminar archivo
#print(os.path.abspath(./))    # Obtener la ruta absoluta del archivo

# Comprobar si un archivo existe
if os.path.exists(ruta_nueva):
    print("El archivo existe.")
else:
    print("El archivo no existe.")