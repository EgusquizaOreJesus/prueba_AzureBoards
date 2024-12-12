import usuarios.usuario as modelo

class Acciones:

    def registro(self):

        print("Registro de usuario")
        nombre = input("Introduce el nombre: ")
        apellidos = input("Introduce los apellidos: ")
        email = input("Introduce el email: ")
        password = input("Introduce la contraseña: ")
        usuario = modelo.Usuario(nombre,apellidos,email,password)
        registro = usuario.registrar()

        if registro[0] >= 1:
            print(f"Perfecto, {registro[1].nombre} te has registrado con el email {registro[1].email}")
        else:
            print("No te has registrado correctamente")
    def login(self):
        print("Identificate")
        email = input("Introduce el email: ")
        password = input("Introduce la contraseña: ")

