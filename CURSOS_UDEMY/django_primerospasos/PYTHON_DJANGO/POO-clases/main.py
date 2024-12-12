# Programacion Orientada a Objetos
# Las clases son moldes para definir multiples objetos

class Coche:
    # propiedades - atributos - caracteristicas
    color = "Rojo" # por defecto el color es rojo
    marca = "Ferrari"
    modelo = "Aventador"
    velocidad = 300
    caballaje = 500

    # metodos - funciones
    # son acciones que hace el objeto
    # para acceder a las propiedades de la clase se utiliza "self"
    # self es como el "this" de otros lenguajes de programacion, eso debo pasarlo a todos mis metodos
    def setColor(self, color):
        self.color = color

    def getColor(self):
        return self.color

    def acelerar(self):
        self.velocidad += 1
    
    def frenar(self):
        self.velocidad -= 1
    
    def getVelocidad(self):
        return self.velocidad
    

# Fin de la definicion de la clase

# Crear objetos / instanciar la clase, instanciar es crear un objeto a partir de una clase

coche = Coche()     # cree un objeto de la clase Coche
coche.setColor("Amarillo")
print(coche.getColor())