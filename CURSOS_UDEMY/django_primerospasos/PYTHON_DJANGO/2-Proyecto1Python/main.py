'''
    Proyecto Python y MySQL
    - Abrir asistente
    - Login o registro
    - Si elegimos registro, creara un usuario en la base de datos
    - Si elegimos login, identificara al usuario y nos preguntara
        - Crear nota
        - Mostrar notas
        - Eliminar notas

'''
from usuarios import acciones

print("""
Acciones disponibles:
    - registro
    - login
"""
)
hazEl = acciones.Acciones()     # tengo un objeto de tipo Acciones

accion = input("¿Qué quieres hacer?: ")

if accion == "registro":
    hazEl.registro()


elif accion == "login":
    hazEl.login()
