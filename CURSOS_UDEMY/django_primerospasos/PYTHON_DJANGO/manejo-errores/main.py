# Capturar excepciones y manejar errores en código

# Este codigo es susceptible a errores, por lo que se debe manejar las excepciones
# Entonces si tu codigo genera algun tipo de error, es mejor meterlo en un bloque try except

'''
try:    # Intenta hacer el siguiente codigo
    nombre = input("Introduce el nombre: ")

    if len(nombre) > 1:
        nombre_usuario = "El nombre es: " + nombre


    print(nombre_usuario)
except: # Captura cualquier tipo de error
    print("Ha ocurrido un error, introduce bien el nombre.")
else:   # Si no hay errores
    print("Todo ha funcionado correctamente.")
finally:   # Siempre se ejecuta independientemente de si hay errores o no. Detecta cuando haya terminado el try except
    print("Fin de la iteración.")

'''

# Como manejar multiples excepciones
'''
# En este caso, si el usuario introduce un string, el programa fallara, por lo que se debe manejar la excepcion
try:
    numero = int(input("Numero para elevarlo al cuadrado: "))
    print(f"El cuadrado es: {numero*numero}")
except TypeError:   # Si el error es de tipo TypeError osea que el usuario introdujo un string
    print("Debes convertir las cadenas a enteros en el codigo.")
#except ValueError:  # Si el error es de tipo ValueError osea que el usuario introdujo un string o un float o vacio
#    print("Introduce un numero correcto.")
except Exception as e:  # puedo capturar cualquier tipo de error y guardarlo en una variable
    print("Ha ocurrido un error: ", type(e).__name__) # Imprimir el tipo de error con __name__

'''

# Excepciones personalizadas o lanzar excepciones
nombre = input("Introduce el nombre: ")
edad = int(input("Introduce la edad: "))

# puedo generar diferentes tipos de errores utilizando la instruccion "raise"
if edad < 5 or edad > 110:
    raise ValueError("La edad introducida no es real.") # Indicar el tipo de error y el mensaje
elif len(nombre) <= 1:
    raise ValueError("El nombre no esta completo.")
else:
    print(f"Bienvenido al master en Python {nombre}.") 
