//CICLO WHILE

//ciclo while que cuente del 0 al 5
let contador = 0;

while (contador <= 5) {
    console.log(contador)
    contador++;
}


//ciclo while que cuente del 0 al 10
let secuencia = 0;

while (secuencia < 10) {
    console.log(secuencia)
    secuencia++;
}


//ciclo while que cuente del 10 al 1
let numeros = 10;

while (numeros >= 1) {
    console.log(numeros)
    numeros--;
}


//ciclo while que imprime solo los números pares
let pares = 10;

while (pares >=1) {
    if (pares % 2 === 0) {
        console.log(pares);
    }
    pares--;
}



let suma = 0; 
let numero = 1; 
while (suma < 5) {
     suma += numero; numero++; 
} console.log(suma);



//CICLO FOR
//Ciclo de for que imprime los números del 0 al 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}


//Ciclo de for que calcula la suma del 1 al 10
let adicion  = 0

for (let i = 1; i <= 10; i++){
    adicion += i;
}  
console.log(adicion);


//Programa que cuenta del 10 al 1 con el Ciclo For
for (let i = 10; i >= 0; i--){
    console.log(i)
}


//Cilclo de For para que sume los números pares del 1 al 20
let sumas = 0

for (let i = 1; i <= 20; i++){ 
    if(i % 2 === 0){
        sumas += i;
    }
}
console.log("La suma de los números pares del 1 al 20 es:", sumas);


for (let i = 0; i < 3; i++) {
     console.log("Hola"); }


let sum = 0;
 for (let i = 1; i <= 5; i++) { 
    suma += i; } 
console.log(sum);





//Clasificación de frutas con ciclo de FOR
const frutas = ['manzana', 'plátano', 'plátano', 'fresa', 'uva', 'plátano', 'manzana', 'uva', 'fresa'];

const conteoFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    }else{
        conteoFrutas[fruta] = 1;
    }
}

console.log("Conteo de frutas con ciclo de FOR:");
console.log(conteoFrutas);



// --- Clasificación de frutas con ciclo WHILE ---

const frutas2 = ['mango', 'fresa', 'mango', 'sandía', 'fresa', 'mango'];
const conteoFrutas2 = {};

let i = 0;

while (i < frutas2.length) {
  const fruta = frutas2[i];

  if (conteoFrutas2[fruta]) {
    conteoFrutas2[fruta]++;
  } else {
    conteoFrutas2[fruta] = 1;
  }

  i++;
}

console.log("Conteo de frutas con WHILE:");
console.log(conteoFrutas2);
