# Herencia
'''
   Herencia
   Es la posibilidad de compartir atributos y métodos entre clases. Y que diferentes clases hereden de otras.
   De forma que puedo tener una clase padre y luego puedo tener diferentes clases hijas que hereden de la clase padre. 
'''

class Persona:
    # atributos
    nombre = ""
    apellidos = ""
    altura = 0
    edad = 0

    # metodos
    def getNombre(self):
        return self.nombre
    
    def getApellidos(self):
        return self.apellidos
    
    def getAltura(self):
        return self.altura
    
    def getEdad(self):
        return self.edad
    
    def setNombre(self, nombre):
        self.nombre = nombre
    
    def setApellidos(self, apellidos):
        self.apellidos = apellidos
    
    def setAltura(self, altura):
        self.altura = altura
    
    def setEdad(self, edad):
        self.edad = edad
    
    def hablar(self):
        return "Estoy hablando"
    
    def caminar(self):
        return "Estoy caminando"
    
    def dormir(self):
        return "Estoy durmiendo"
    

# Clase informatico que hereda de la clase Persona
class Informatico(Persona):
    # atributos
    lenguajes = []
    experiencia = 0

    # metodos
    # constructor por defecto:
    def __init__(self):
        self.lenguajes = ["HTML", "CSS", "JavaScript", "PHP"]
        self.experiencia = 5
    
    def getLenguajes(self):
        return self.lenguajes
    
    def aprender(self, lenguajes):
        self.lenguajes.append(lenguajes)
        return self.lenguajes
    
    def programar(self):
        return "Estoy programando"
    
    def repararPC(self):
        return "He reparado tu PC"
    
# Fin de la definicion de la clase

# Podemos heredar de la clase Informatico, que a su vez hereda de la clase Persona

class TecnicoRedes(Informatico):
    # atributos
    auditarRedes = ""
    experienciaRedes = 0

    def __init__(self):
        # Un constructor es exclusivo de cada clase.
        # Un constructor padre no se ejecuta en un constructor hijo, por lo que debo llamar al constructor padre
        # con super() llamo al constructor de la clase padre
        super().__init__() # con super() llamo al constructor de la clase padre
        self.auditarRedes = "Experto"
        self.experienciaRedes = 15
    
    def auditoria(self):
        return "Estoy auditando una red"