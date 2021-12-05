/*//1 užduotis

let pvm = 0.21;
let kaina;

//ne ok, jeigu įveda tekstą arba minusinį skaičių
//kaina = Number(prompt("Įveskite prekės kainą"));

do {
    kaina = Number (prompt("Įveskite prekės kainą"))
}
while (isNaN(kaina) || kaina <=0)

//if(2 > 3 || 3 < 5) {
    //kodas su veiks jeigu dešinėje arba kairėje pusėje bus įvykdyta sąlyga, bent viena sąlyga turi būti teisinga, kad veiktų šis kodas
//{

let mokestis = kaina * pvm;
let bendraKaina = kaina + mokestis;
console.log ("Prekės kaina su PVM: " + bendraKaina.toFixed(2) + " €");
console.log ("PVM: " + mokestis.toFixed(2) + " €");
console.log ("Prekės kaina be PVM: " + kaina.toFixed(2) + " €");*/

//2 Užduotis

let prekesKaina;
let pristatymoMiestas;
let reikalingasPristatymas;
const pristatymoKaina = 20;
const nemokamoPristatymoRiba = 50;

//Klausiu kainos tol, kol yra įvedamas tekstas, kurį įmanoma paversti į skaičių (nėra NaN po konversijos) ir skaičius nėra 0 arba ma
do {
    prekesKaina = prompt("Įveskite prekės kainą");
    prekesKaina = Number(prekesKaina);
    //arba galimas kodas prekesKaina = Number(prompt("Įveskite prekės kainą"));
}
while (isNaN(prekesKaina) || prekesKaina <=0)

//Po kainos klausiu, ar reikia pristatymo
reikalingasPristatymas = confirm("Ar reikalingas pristatymas į namus"); // true arba false 

//Jei reikalingas pristatymas
if (reikalingasPristatymas) {
    //Klausiu pristatymo miesto, kol nėra įvedamas tekstas
    do {
        pristatymoMiestas = prompt("Į kurį miestą reiks pristatyti?");
    }
    while (pristatymoMiestas.length === 0) //tikrinu ar tuščias laukelis. jeigu tuščias kartoju ciklą.

    //jeigu miestas Vilnius ARBA kaina daugiau nei 50, pristatom nemokamai
    if (pristatymoMiestas.toLocaleLowerCase() === "vilnius" || prekesKaina >= nemokamoPristatymoRiba) {
        console.log("Prekės kaina: " + prekesKaina.toFixed(2) + " €");
        console.log('Prekę nemokamai pristatysime į "' + pristatymoMiestas + '" per 1-3 dienas.');
    }
    //jeigu kaina mažiau 50 ARBA betkoks kitas miestas, pritaikau pristatymo mokestį
    else {
        let bendraKaina = prekesKaina + pristatymoKaina;

        console.log('Prekės kaina: ' + prekesKaina.toFixed(2) + " €");
        console.log('Pristatymas: ' + pristatymoKaina.toFixed(2) + " €");
        console.log('Iš viso: ' + bendraKaina.toFixed(2) + " €");
        console.log('Prekę pristatysime į "'+ pristatymoMiestas + '" per 1-3 dienas.');
    }
}
// jeigu pristatymas nereikalingas, tiesiog atvaizduoju kainą

else {
    console.log('Prekės kaina: ' + prekesKaina.toFixed(2) + " €" );
    console.log('Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a');
}













