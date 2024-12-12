import clases

# Crear un objeto de la clase Persona
persona = clases.Persona()

persona.setNombre("Juan")
persona.setApellidos("Perez")
persona.setAltura(1.70)
persona.setEdad(35)

print(f"La persona es: {persona.getNombre()} {persona.getApellidos()}")

informatico = clases.Informatico()
informatico.setNombre("Juan") # heredado de la clase Persona
informatico.setApellidos("Perez") # heredado de la clase Persona
informatico.setAltura(1.70) # heredado de la clase Persona
informatico.setEdad(35) # heredado de la clase Persona

print(f"El informatico es: {informatico.getNombre()} {informatico.getApellidos()}")

# metodos exclusivos de la clase Informatico
print(f"Los lenguajes que sabe son: {informatico.getLenguajes()}")
informatico.aprender("Python")
print(f"Los lenguajes que sabe ahora son: {informatico.getLenguajes()}")


tecnico = clases.TecnicoRedes()
tecnico.setNombre("Ana")
print(f"El tecnico es: {tecnico.getNombre()} {tecnico.getApellidos()}, {tecnico.getLenguajes()}") 