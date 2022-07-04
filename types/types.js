// String
var nameStudent = 'Paris';
// Numbers
var age = 27;
age = 27.5;
// Boolean
var hobbies = false;
// Explicit types
var myAge;
myAge = 21;
var myHobbies = ['game', 'sports'];
// Tuplas
var address = ['AV. Princiapal', 666];
// Enums - Tipo de dado utilizado para armazenar um conjunto de valores constantes, 
// ou seja, são valores fixos, que não podem ser modificados. 
// Na prática, o enum é um tipo especial de classe que utiliza a palavra-chave enum ao ser declarado.
var Color;
(function (Color) {
    Color[Color["green"] = 0] = "green";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
var myColor = Color.green;
// Functions 
function returnName() {
    return nameStudent;
}
// void - Para funções que não possue retorno.
function hello() {
    console.log('Hello');
}
hello();
function sum(numA, numB) {
    return numA + numB;
}
// Tipo Função 
var calculate;
calculate = sum;
console.log(calculate);
// Objeto
var user = {
    name: 'Lucas',
    age: 21
};
var collaborator = {
    supervisors: ['Yuri', 'Jhuonas'],
    registration: function (horary) {
        if (horary <= 8)
            return 'Horary OK';
        return 'bad time';
    }
};
console.log(collaborator.supervisors);
console.log(collaborator.registration(8));
