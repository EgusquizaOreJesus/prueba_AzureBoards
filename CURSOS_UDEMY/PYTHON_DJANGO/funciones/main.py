"""
    Funciones
    - Son bloques de código que se pueden reutilizar
    - Se definen con la palabra reservada def
    - Pueden recibir parámetros
    - Pueden devolver valores
"""

def muestraNombre():
    print("Nombre: Juan")

#muestraNombre()
# con f puedo 
#print("Ejemplo")
#num = input("Ingrese un número: ")
def tabla(numero):
    print(f"Tabla de multiplicar del {numero}") # f es para concatenar con {}
    for i in range(1,11):
        print(f"{numero} x {i} = {numero*i}")       

#tabla(int(num)) # convierte a entero el valor ingresado

#print("Ejemplo 2 - funciones con retorno")
#num1 = int(input("Ingrese un número 1: "))
#num2 = int(input("Ingrese un número 2: "))
def calculadora(numero1, numero2, basicas = False):
    suma = numero1 + numero2
    resta = numero1 - numero2
    multi = numero1 * numero2
    divi = numero1 / numero2

    cadena = ""
    if basicas != False:
        cadena += "Suma: " + str(suma)
        cadena += "\n"
        cadena += "Resta: " + str(resta)
    else:
        cadena += "Multiplicación: " + str(multi)
        cadena += "\n"
        cadena += "División: " + str(divi)
    return cadena

#print(calculadora(num1, num2, False)) # True para operaciones básicas

print("Ejemplo 3 - funciones lambda")
# Funciones lambda
# Son funciones anónimas que se pueden utilizar para simplificar el código
# se definen con la palabra reservada lambda
# se pueden asignar a una variable
'''
    lambda argumentos: expresión
'''
dime_el_year = lambda year: f"El año es {year}"
print(dime_el_year(2021))