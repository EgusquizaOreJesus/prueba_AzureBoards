'''
    Modulos
    - Son funcionalidades ya hechas para reutilizar.
    - Podemos conseguir modulos que ya vienen en el lenguaje, modulos en internet y tambien podemos crear nuestros modulos.
'''

# Importamos todo el modulo
import mimodulo

# Llamamos a la funcion del modulo
print(mimodulo.holaMundo())


# Modulo de fechas
import datetime

# Fecha actual
print(datetime.date.today())

# Fecha completa
fecha_completa = datetime.datetime.now()

print(fecha_completa)
# Formatear fechas
print(fecha_completa.year)
print(fecha_completa.month)
print(fecha_completa.day)

# fecha personalizada
print(fecha_completa.strftime("%d/%m/%Y, %H:%M:%S"))    # 16/06/2021, 20:00:00

# Timestamp
print(datetime.datetime.now().timestamp()) # El timestamp es el tiempo que ha pasado desde el 1 de enero de 1970
print(datetime.datetime.now().time()) # Hora actual