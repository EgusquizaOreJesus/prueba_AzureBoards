class Coche:
    # propiedades - atributos - caracteristicas
    color = "Rojo" # por defecto el color es rojo
    marca = "Ferrari"
    modelo = "Aventador"
    velocidad = 300
    caballaje = 500

    soy_publico = "Hola, soy un atributo publico"
    __soy_privado = "Hola, soy un atributo privado" # __ es para hacer un atributo privado
    # Constructor
    # se define con el metodo __init__ y le paso los parametros que quiero que tenga mi objeto al instanciarlo
    def __init__(self, color, marca, modelo, velocidad, caballaje):
        self.color = color
        self.marca = marca
        self.modelo = modelo
        self.velocidad = velocidad
        self.caballaje = caballaje

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

    def getPrivado(self):
        return self.__soy_privado    # para acceder a un atributo privado se debe hacer mediante un metodo

    def getInfo(self):
        info = "----- Informacion del coche -----\n"
        info += f"Color: {self.getColor()}\n"
        info += f"Marca: {self.marca}\n"
        info += f"Modelo: {self.modelo}\n"
        info += f"Velocidad: {self.velocidad}\n"
        info += f"Caballaje: {self.caballaje}\n"
        return info
    

# Fin de la definicion de la clase