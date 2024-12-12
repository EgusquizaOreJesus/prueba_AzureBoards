const a:string = "Hello World";             // String
const b:number = 10;                        // Number
const c:boolean = true;                     // Boolean
const d = [true, false, true];    // Array of boolean
// typescript ya me dice que es un array de boolean

// si quiero una variable que pueda ser de cualquier tipo
let e: any = 10;                    // Any

// NO ESTA BIEN USAR ANY


// En typescript podemos poner clases

class Transporte{
     velocidad: number;

    constructor(velocidad:number){  // con esto ya le decimos que velocidad es un number y no puede ser otra cosa usando typescript
        this.velocidad = velocidad;
    }

    getVelocidad():number{
        return this.velocidad;
    }

    setVelocidad(velocidad:number) :void{     // con esto ya le decimos que velocidad es un number y no puede ser otra cosa usando typescript
        this.velocidad = velocidad;
    }
}

// herencia
class Auto extends Transporte{
    numeroPuertas: number;

    constructor(velocidad:number, numeroPuertas:number){
        super(velocidad);       // con "super" llamamos al constructor de la clase padre
        this.numeroPuertas = numeroPuertas;
    }

    getNumeroPuertas(){
        return this.numeroPuertas;
    }

    setNumeroPuertas(numeroPuertas:number){
        this.numeroPuertas = numeroPuertas;
    }

    // sobreescribir metodos de la clase padre (override) 
    // POLIMORFISMO, una entidad puede comportarse de manera diferente de acuerdo a su contexto
    getVelocidad(){
        return super.getVelocidad() * 2;        // con "super" llamamos al metodo de la clase padre
    }


}


//const transporte: Transporte = new Transporte('20'); // esto no se puede hacer porque le estamos pasando un string y no un number

const transporte: Transporte = new Transporte(20); // esto si se puede hacer porque le estamos pasando un number
transporte.setVelocidad(30);    

const auto = new Auto(20,4);

const transporteArray = [transporte, auto]; // array de transporte

// saber la velocidad de cada transporte
transporteArray.forEach(transporte => {
    console.log(transporte.getVelocidad());     // segun la clase que sea, se ejecutara el metodo de la clase correspondiente (polimorfismo)
    // el contexto es si es un transporte o un auto
});


// INTERFACES EN TYPESCRIPT, para definir la estructura de un objeto
// Es parecido a una clase pero no se puede instanciar (NO HAY CONSTRUCTORES) es solamente un contrato que se debe cumplir
interface Persona{
    nombre: string;     
    edad: number;
    getVelocidad: (param: number) => number;     // funcion que devuelve un number
}

// si no cumple con la interfaz, typescript nos lo dira
const persona: Persona = {      // objeto que cumple con la interfaz
    nombre: 'Juan',
    edad: 30,
    //precio: 20      // esto no cumple con la interfaz, typescript nos lo dira, ya que la interfaz no tiene la propiedad precio
    getVelocidad: (param) => {
        return param * 2        // funcion que devuelve un number
    }
}
// esta interface se puede mejorar
/*
interface Character{
    id : number;
    name : string;
    status : string;
    species : string;
    type :  string;
    gender : string;
    origin : {
        name : string;
        url : string;
    };
}

*/

interface Character{
    id : number;
    name : string;
    status : string;
    species : string;
    type :  string;
    gender : string;
    origin : CharacterOrigin;   // otra interfaz
}
// Buena practica es tener un tipo por cada tipo complejo

interface CharacterOrigin{
    name : string;
    url : string;
}

// puedo tener un array de objetos que cumplan con la interfaz
const characters: Character[] = [
    {
        id: 1,
        name: 'Rick',
        status: 'Alive',
        species: 'Human',
        type: 'Mad scientist',
        gender: 'female',
        origin: {
            name: 'Earth',
            url: 'url'
        }
    },
]

// puedo recorrer el array de objetos que cumplan con la interfaz
characters.forEach(character => {
    console.log(character.name);
    console.log(character.origin.name);
});

// SHAPES, typescript funciona por shapes, por formas de las cosas

const transporteArray2: Transporte[] = [transporte, auto]; // estamos generalizando, ya que un auto es un transporte
// saber la velocidad de cada transporte
transporteArray2.forEach(transporte => {
    console.log(transporte.getVelocidad());   // esto es tipo transporte, solo accede a los metodos de la clase transporte
});

// pero si hago 
//const transporteArray2: Auto[] = [transporte, auto]; -> esto no se puede hacer porque un transporte no es un auto
// No todo transporte es un auto, pero todo auto es un transporte

// typescript no se da cuenta por el tipo, sino por la forma, por el shape el numero de propiedades y los metodos que tiene

// veamos este ejemplo

const auto2 = new Auto(20,4);
const auto3 ={
    velocidad: 20,
    numeroPuertas: 4,
    getVelocidad():number{
        return this.velocidad;
    },

    setVelocidad(velocidad:number) :void{     // con esto ya le decimos que velocidad es un number y no puede ser otra cosa usando typescript
        this.velocidad = velocidad;
    },
    getNumeroPuertas(){
        return this.numeroPuertas;
    }
}
// auto3 es un auto, pero no es una instancia de la clase Transporte, pero typescript lo toma como un Transporte
// y lo toma como un Transporte porque cumple con la forma de un Transporte (shape) tiene las mismas propiedades y metodos
const transporteArray3: Transporte[] = [transporte, auto2,auto3]; 


// PODEMOS CREAR TIPOS PERSONALIZADOS

type Dni = string;    // tipo personalizado

const dni: Dni = '12345678A';   // ahora dni es de tipo Dni
const dni2: string = '12345678A';    // esto no es un Dni, es un string 
// aunque sean lo mismo, esto puede ser util para hacer validaciones
// y si debemos cambiar el tipo de Dni, solo lo cambiamos en un sitio, en el tipo personalizado
// y no en todos los sitios donde se use

const tellMeMyDni = (dni: Dni) => {
    console.log(dni);
}

// EXTENSION DE INTERFACES

interface Personita{
    nombre: string;
    edad: number;
}
// Mi abogado tiene todo lo que tiene una personita y ademas tiene un legajo
interface Abogado extends Personita{
    legajo: number;
}

const abogado: Abogado = {
    nombre: 'Juan',
    edad: 30,
    legajo: 123
}

// UNION DE INTERFACES

interface Interface1{
    prop1: string;
}

interface Interface2{
    prop2: number;
}

type InterfaceMix = Interface1 | Interface2;    // union de interfaces (puede ser de un tipo o de otro)
// Va tener las propiedades de Interface1 o de Interface2 o de ambos
const interfaceMix: InterfaceMix = {
    prop1: 'hola',
    //prop2: 2
}

// INTERSECCION DE INTERFACES

type InterfaceMix2 = Interface1 & Interface2;   
 // interseccion de interfaces (tiene que tener las propiedades de Interface1 y de Interface2) NO PUEDE FALTAR NINGUNA
const interfaceMix2: InterfaceMix2 = {
    prop1: 'hola',
    prop2: 2
}

// TYPES A FUNCIONES

type SumaFunction = (a:number, b:number) => number;    // tipo de funcion que recibe dos numeros y devuelve un numero

// ahora puedo hacer una funcion que cumpla con el tipo de la funcion SumaFunction
const suma: SumaFunction = (a,b) => {
    return a + b;
}

//suma(1,"z");    // esto no se puede hacer porque el tipo de la funcion es que recibe dos numeros y devuelve un numero