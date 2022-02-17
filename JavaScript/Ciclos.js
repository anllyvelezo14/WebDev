//Para recorrer arrays

//CICLO FOR

//OPCION 1
var estudiantes = ["Maria", "Sergio", "Rosa", "Dario"];

function Saludo(estudiante){
    console.log(`hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    Saludo(estudiantes[i]);
}
//OPCION 2
var estudiantes = ["Maria", "Sergio", "Rosa", "Dario"];

function Saludo(estudiante){
    console.log(`hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    Saludo(estudiantes);
}


// Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

// for - recorre un bloque de código varias veces

// for/in - recorre las propiedades de un objeto

// for/of - recorre los valores de un objeto iterable

// while - recorre un bloque de código mientras se cumple una condición específica

// do/while - también recorre un bloque de código mientras se cumple una condición específica


//CILO WHILE

var estudiantes = ["Maria", "Sergio", "Rosa", "Dario"];

function Saludo(estudiante){
    console.log(`hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    Saludo(estudiante);
}
