
// Chiedi all'utente il numero di km da percorrere
let km = prompt("Inserisci il numero di km da percorrere:");

// Chiedi all'utente l'età
let age = prompt("Inserisci la tua età:");

// Chiedi all'utente il nome
let lastname = prompt("Inserisci il tuo nome:");

// Chiedi all'utente il cognome
let firstname = prompt("Inserisci il tuo cognome:");

console.log(km)
console.log(age)
console.log(lastname)
console.log(firstname)


document.getElementById("lastname").textContent = "Nome: " + lastname;

document.getElementById("firstname").textContent = "Cognome: " + firstname;



// Calcola il prezzo del viaggio

let prezzo = km * 0.21; 

// Sconti in base all'età

if (age < 18) {
  prezzo = prezzo - (prezzo * 0.2);
} 
else if (age >= 65) {
  prezzo = prezzo - (prezzo * 0.4);
}


console.log("Il prezzo del biglietto è: " + prezzo.toFixed(2) + "€");


document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto è: " + prezzo.toFixed(2) + "€";
