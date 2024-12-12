
// OBJETOS 

// Type Alias
// Es una forma de definir un tipo de dato personalizado


// vamos a definir un tipo de dato personalizado llamado HeroId
// esto hacemos para que el tipo de dato sea más descriptivo
type HeroId = `${string}-${string}-${string}-${string}-${string}`

// UNION TYPES
type HeroPowerScale = 'local' | 'global' | 'universal'; // tipo de dato personalizado para representar el poder de un héroe

let ann: number | string; // esto es un tipo de dato personalizado que puede ser un número o un string

ann = 10; // esto es válido
ann = 'hola mundo'; // esto es válido

// INTERSECTION TYPES

type HeroBasicInfo = {
    name: string,
    age: number
}

type HeroProperties = {
    readonly id?: HeroId, // readonly indica que la propiedad no puede ser modificada 
    isActive?: boolean // el signo de interrogación indica que la propiedad es opcional
    powerScale?: HeroPowerScale // el signo de interrogación indica que la propiedad es opcional

}

// creamos un Hero que va tener todas las propiedades de HeroBasicInfo "y" HeroProperties
type Hero = HeroBasicInfo & HeroProperties; 

// con esto podemos crear objetos con la estructura de Hero
let hero: Hero = {
    name: 'Batman',
    age: 30
}

// CUANDO CREAS TUS PROPIOS TIPOS EL TIPADO SE HACE EN BASE AL NOMBRE DEL TIPO

// VAMOS A CREAR UNA FUNCION QUE DEVUELVA UN OBJETO DE TIPO HERO

function createHero(name: string, age: number): Hero {
    return {
        name,
        age
    }
}

let newHero = createHero('Superman', 30);

newHero.powerScale = 'universal'; // esto es válido ya que universal es un valor de HeroPowerScale
newHero.powerScale = 'zzz'; // esto no es válido ya que zzz no es un valor de HeroPowerScale


// VAMOS A CREAR UNA FUNCION QUE RECIBA UN OBJETO DE TIPO HERO Y DEVUELVA UN OBJETO DE TIPO HERO
function createHero2(input: HeroBasicInfo): Hero {
    const {name , age} = input;  // obtenemos los valores de name y age del objeto hero
    return {
        id: crypto.randomUUID(), // generamos un id aleatorio que sigue la estructura de HeroId
        name, 
        age , 
        isActive: true}; // retornamos un nuevo objeto con los valores de name y age y isActive en true
}

let newHero2 = createHero2(newHero);

// freeze es una función que congela un objeto, es decir, que no se puede modificar

let newHero3 = Object.freeze(createHero2({name: 'Wonder', age: 30}));

// newHero3.isActive = false; // esto no se puede hacer porque el objeto está congelado

// otro ejemplo

type HexadecimalColor = `#${string}`;       // tipo de dato personalizado para representar un color hexadecimal

// esto es buena practica para saber la estructura de los datos

const color: HexadecimalColor = '#ff0000'; // color hexadecimal rojo
const color2: HexadecimalColor = '00ff00'; // si no cumple con la estructura de HexadecimalColor, typescript marcará un error



// type indexing

// esto es interesante, ya que te permite reutilizar tipos de datos que ya has definido internamente

type HeroInfo = {
    name: string,
    age: number,
    address: {
        city: string,
        country: string
    }
}

// esto es un ejemplo de type indexing
const address: HeroInfo['address'] = {
    city: 'Gotham',
    country: 'USA'
}

// typeof sirve para extraer el tipo de un objeto, funciones o variables

type Address = typeof address; // extraemos el tipo de address

const address2: Address = {
    city: 'Metropolis',
    country: 'USA'
}

// Si quiero que me devuelva el tipo que retorna una funcion 
// ReturnType

function createAddress(){
    return {
        city: 'Metropolis',
        country: 'USA'
    }
}

type Address2 = ReturnType<typeof createAddress>; // extraemos el tipo de retorno de createAddress