# Importar modulo de sqlite
import sqlite3 # Este modulo nos permite trabajar con bases de datos SQLite3

# Conectar a la base de datos
conexion = sqlite3.connect('pruebas.db')    # Si no existe la base de datos, la crea

# Crear cursor
cursor = conexion.cursor() # Es lo que nos va a permitir ejecutar las consultas, crear tablas, etc

# Crear tabla -> es lo mismo para todos los motores de bases de datos
# tenemos que hacer codigo SQL
cursor.execute("""
    CREATE TABLE IF NOT EXISTS productos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo VARCHAR(255),
        descripcion TEXT,
        precio int(11)
    )
    """
)

# Guardar cambios -> es necesario para que se guarden los cambios en la base de datos
conexion.commit()

# Insertar datos
# el id es autoincremental, por lo que no es necesario pasarlo, entonces se pasa un null
# cursor.execute("INSERT INTO productos VALUES (null, 'Primer producto', 'Descripcion del producto', 550)")

# Borrar registros
# cursor.execute("DELETE FROM productos") #  -> Borra todos los registros de la tabla productos

# Insertar muchos registros de una sola vez
productos = [
    ("Ordenador portatil", "Buen PC", 700),
    ("Telefono movil", "Buen telefono", 140),
    ("Placa base", "Buena placa", 80),
    ("Tablet", "Buena tablet", 300),
]

#cursor.executemany("INSERT INTO productos VALUES (null, ?, ?, ?)", productos) # -> Insertar muchos registros con execumany

# Update
cursor.execute("UPDATE productos SET precio = 678 WHERE precio = 80")   # Actualizar registros cuando el precio sea 80

conexion.commit()  # Guardar cambios


# Listar datos
cursor.execute("SELECT * FROM productos;")
productos = cursor.fetchall()   # fetchall() trae todos los registros de la consulta en forma de lista
#print(productos)

for producto in productos:
    print("ID:", producto[0])
    print("Titulo:", producto[1])
    print("Descripcion:", producto[2])
    print("Precio:", producto[3])
    print("\n")

# Primer producto
producto = cursor.fetchone()   # fetchone() trae el primer registro de la consulta

# Cerrar conexion
conexion.close()