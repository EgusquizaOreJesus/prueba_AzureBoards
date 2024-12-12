import mysql.connector

# Conexión a la base de datos
database = mysql.connector.connect(
    host="localhost",       # el servidor esta instalado en la misma máquina asi que localhost
    user="root",            # en waampserver el usuario es root por defecto
    passwd="",              # por defecto no tiene contraseña
    database="master_python"    # nombre de la base de datos, que ya hemos creado
)

# Para comprobar si la conexión ha sido correcta
#print(database) # Si imprime algo como <mysql.connector.connection.MySQLConnection object at 0x0000021E3D3E3A00> 
                #   es que la conexión ha sido correcta
# CURSOR
cursor = database.cursor()  # Crear cursor para ejecutar consultas SQL

# Crear base de datos
'''
cursor = database.cursor()  # Crear cursor para ejecutar consultas SQL

cursor.execute("CREATE DATABASE IF NOT EXISTS master_python")  # Crear base de datos si no existe

# Mostrar bases de datos
cursor.execute("SHOW DATABASES")

# Mostrar bases de datos
for bd in cursor:
    print(bd)   # Imprimir las bases de datos
'''


# Crear tablas
cursor.execute("""
    CREATE TABLE IF NOT EXISTS vehiculos(
        id int(10) auto_increment not null,
        marca varchar(40) not null,
        modelo varchar(40) not null,
        precio float(10,2) not null,
        CONSTRAINT pk_vehiculo PRIMARY KEY(id)
    )
    """
)   # CONSTRAINT pk_vehiculo PRIMARY KEY(id) -> Definir la clave primaria de la tabla


# Mostrar tablas
cursor.execute("SHOW TABLES")

for table in cursor:
    print(table)    # Imprimir las tablas de la base de datos

# Insertar datos en la tabla

#cursor.execute("INSERT INTO vehiculos VALUES(null, 'Opel','Astra',18500)")  # Insertar un registro

# Varios registros
coches = [
    ('Seat', 'Ibiza', 5000),
    ('Renault', 'Clio', 15000),
    ('Citroen', 'Saxo', 2000),
    ('Mercedes', 'Clase C', 35000),
]

#cursor.executemany("INSERT INTO vehiculos VALUES(null, %s, %s, %s)", coches)  # Insertar varios registros

# GUARDAR CAMBIOS
database.commit()   # Guardar cambios en la base de datos


# SELECT
cursor.execute("SELECT * FROM vehiculos")  # Seleccionar todos los registros de la tabla vehiculos

result = cursor.fetchall()  # Guardar todos los registros en una variable

for coche in result:
    print(coche)    # Imprimir los registros


# eliminar registros
cursor.execute("DELETE FROM vehiculos WHERE marca = 'Mercedes'")  # Eliminar registros de la tabla vehiculos

print(cursor.rowcount, "borrados!!")  # Imprimir cuantos registros han sido borrados

# Update
cursor.execute("UPDATE vehiculos SET modelo = 'Leon' WHERE marca = 'Seat'")  # Actualizar registros de la tabla vehiculos

print(cursor.rowcount, "actualizados!!")  # Imprimir cuantos registros han sido actualizados

database.commit()   # Guardar cambios en la base de datos
