# tengo que importar el modulo que quiero utilizar
from coche import Coche

# creando un objeto mediante el constructor
carro = Coche("Amarillo", "Renault", "Clio", 150, 200)

print(carro.getInfo())

# Detectar tipado de un objeto

if type(carro) == Coche:
    print("Es un objeto Coche")
else:
    print("No es un objeto Coche")