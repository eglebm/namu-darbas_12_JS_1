/*//1 užduotis

let pvm = 0.21;
let kaina;

//ne ok, jeigu įveda tekstą arba minusinį skaičių
kaina = Number(prompt("Įveskite prekės kainą"));

do {
    kaina = Number (prompt("Įveskite prekės kainą"))
}
while (isNaN(kaina) || kaina <=0)

let mokestis = kaina * pvm;
let bendraKaina = kaina + mokestis;

console.log ("Prekės kaina su PVM: " + bendraKaina.toFixed(2) + " €");
console.log ("PVM: " + mokestis.toFixed(2) + " €");
console.log ("Prekės kaina be PVM: " + kaina.toFixed(2) + " €");*/
