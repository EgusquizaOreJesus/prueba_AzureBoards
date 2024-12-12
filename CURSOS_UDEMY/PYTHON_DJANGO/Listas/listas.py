print("------- LISTADO DE FUNCIONES PARA LISTAS -------")

nueva_pelicula = ""
while nueva_pelicula != "parar":
    nueva_pelicula = input("Introduce la nueva película: ")
    if nueva_pelicula != "parar":
        peliculas.append(nueva_pelicula)

print("\nLISTADO DE PELÍCULAS")
for pelicula in peliculas:
    print(f"{peliculas.index(pelicula) + 1}. {pelicula}")       # index() devuelve la posición de un elemento en la lista

# Ordenar lista
peliculas.sort()
