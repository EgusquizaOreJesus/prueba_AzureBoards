// ARRAYS

const languages = []

languages.push('JavaScript') // esto maracara error

// debemos tipar el array para que no marque error

const languages2: string[] = []

languages2.push('JavaScript') // esto no marcará error

const languages3: string[] | number[] = []      // esto esta mal

languages3.push('JavaScript') // esto marcará error
languages3.push(1) // esto no marcará error

// la forma correcta de decir que un array puede contener strings o numeros es la siguiente

const languages4: (string | number)[] = []

languages4.push('JavaScript') // esto no marcará error
languages4.push(1) // esto no marcará error


// MATRICES

/*
QUEREMOS ESTA SINTAXIS
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
*/

const gameBoard: string[][] = [ 
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
]

gameBoard[0][1] = 'asjafjasjfijasf' // en cualquier posicion puedo poner lo que me de la gana

// si quisiéramos que solo se puedan poner 'X' o 'O' en el tablero, debemos tipar el array de la siguiente forma

type CellValue = 'X' | 'O' | ' '    

// com esto solo se podran poner 'X' o 'O' en el tablero
const gameBoard2: CellValue[][] = [ 
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
]

gameBoard2[0][1] = 'asjafjasjfijasf' // esto marcará error
gameBoard2[0][1] = ' ' // esto no marcará error

// ahora tambien hay otro problema es que se puede agregar mas de 3 elementos en el array

const gameBoard3: CellValue[][] = [ 
    ['X', 'O', 'X', 'X'],
    ['O', 'X', 'O', 'O'],
    ['X', 'O', 'X', ' ']
]   

// solo queremos que sea de 3x3, para eso debemos tipar el array de la siguiente forma

// la estructura que tendra el gameboard sera de la siguiente manera

type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]
// con esto ya no se podran agregar mas de 3 elementos en el array

const gameBoard4: GameBoard = [ 
    ['X', 'O', 'X', 'X'],
    ['O', 'X', 'O', 'O'],
    ['X', 'O', 'X', ' ']
]   // esto marcará error

const gameBoard5: GameBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
]   // esto no marcará error


// otro ejemplo

type RGB = [number, number, number]

const color3: RGB = [255, 0, 0] // color rojo
const color4: RGB = [0, 255, 0,1] // esto marcará error