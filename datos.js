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