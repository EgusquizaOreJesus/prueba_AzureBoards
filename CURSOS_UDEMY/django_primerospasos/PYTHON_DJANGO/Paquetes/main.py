'''
    Un paquete es un conjunto de modulos que se encuentran en un directorio
    Para indicar a Python que un directorio es un paquete, debemos crear un archivo llamado __init__.py
'''

# Importando el paquete mipaquete y el modulo pruebas - herramientas
from mipaquete import pruebas,herramientas
from pruebas import probando
pruebas.probando()
herramientas.nombreCompleto("Juan", "Perez")