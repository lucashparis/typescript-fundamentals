// String
let nameStudent: string = 'Paris';

// Numbers
let age: number = 27;
age = 27.5;

// Boolean
let hobbies: boolean = false;

// Explicit types

let myAge: number;
myAge = 21;

let myHobbies: string[] = ['game', 'sports'];

// Tuplas
let address: [string, number] = ['AV. Princiapal', 666];

// Enums - Tipo de dado utilizado para armazenar um conjunto de valores constantes, 
// ou seja, são valores fixos, que não podem ser modificados. 
// Na prática, o enum é um tipo especial de classe que utiliza a palavra-chave enum ao ser declarado.
enum Color {
    green,
    yellow,
    red
}
let myColor: Color = Color.green; 

// Functions 
function returnName(): string {
    return nameStudent;
}
// void - Para funções que não possue retorno.
function hello(): void {
    console.log('Hello');
}
hello();

function sum(numA: number, numB:number){
    return numA + numB;
}

// Tipo Função 
let calculate: (numA: number, numB: number) => number; 
calculate = sum; 
console.log(calculate);

// Objeto
let user: {
    name: string,
    age: number
} = {
    name: 'Lucas',
    age: 21
}

// Challenge Collaborator
let collaborator: {
    supervisors: string[],
    registration: (horary: number) => string
} = {
    supervisors: ['Yuri', 'Jhuonas'],
    registration(horary: number): string {
        if (horary <= 8) return 'Horary OK';
        return 'Bad time';
    }
}
console.log(collaborator.supervisors);
console.log(collaborator.registration(8));

