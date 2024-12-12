import os  # Para trabajar con el sistema operativo, como directorios

# . -> Directorio actual
# .. -> Directorio anterior
# os.mkdir("./mi_carpeta")
# Crear directorio
if not os.path.isdir("./mi_carpeta"):   # Si no existe el directorio, en este directorio actual -> con ./ es el directorio actual
    os.mkdir("./mi_carpeta")    # Crear directorio
else:
    print("Ya existe el directorio.")

# Eliminar directorio
# os.rmdir("./mi_carpeta")    # Eliminar directorio

# copiar directorio
import shutil
ruta_original = "./mi_carpeta"
ruta_nueva = "./mi_carpeta_COPIA"

#shutil.copytree(ruta_original, ruta_nueva)  # Copiar directorio

# Listar directorio
print("Contenido de mi carpeta:")
contenido = os.listdir("./mi_carpeta")
print(contenido)

for fichero in contenido:
    print(fichero)
    print(os.path.abspath("./mi_carpeta") + "/" + fichero)   # Ruta absoluta del archivo
    print(os.path.isfile(os.path.abspath("./mi_carpeta") + "/" + fichero))    # Comprobar si es un archivo
    print(os.path.isdir(os.path.abspath("./mi_carpeta") + "/" + fichero)) # Comprobar si es un directorio
    print("")