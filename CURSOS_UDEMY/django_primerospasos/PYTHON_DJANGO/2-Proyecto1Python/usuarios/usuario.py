import mysql.connector
import datetime

database = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "",
    database = "master_python",
    port = 3306
)

cursor = database.cursor(buffered = True) # esto me va permitir hacer muchas consultas, usando el mismo cursor

class Usuario:

    def __init__(self, nombre, apellidos, email, password):
        self.nombre = nombre
        self.apellidos = apellidos
        self.email = email
        self.password = password


    def registrar(self):
        fecha = datetime.datetime.now()     # me va a dar la fecha y hora actual
        sql = "INSERT INTO usuarios VALUES(null,%s,%s,%s,%s,%s)"   # el %s sirve para sustituir datos que yo tenga dentro de una tupla

        usuario  = (self.nombre,self.apellidos,self.email,self.password,fecha)

        cursor.execute(sql,usuario)
        database.commit()

        # rowcount me va a decir cuantas filas se han insertado en la base de datos
        # self es para que me devuelva el objeto que se ha insertado
        return [cursor.rowcount, self]  