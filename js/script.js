/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/
//Pseudo codice
/* 
Inizio del programma

1. Dichiaro tutte le mie variabili.
2. Chiedi all'utente di inserire il proprio nome.
3. Chiedi all'utente di inserire il numero di chilometri da percorrere.
4. Chiedi all'utente di inserire la propria età.
5. Calcoliamo il prezzo del biglietto.
6. Vediamo se l'età dell'utente è inferiore o uguale a 18 anni.
7. Applichiamo uno sconto del 20% al prezzo base.
8. Altrimenti, se l'età dell'utente è maggiore o uguale a 65 anni.
9. Applichiamo uno sconto del 40% al prezzo base
10. Altrimenti facciamo prezzo finale uguale al prezzo base.
11. Dobbiamo formattere il prezzo finale con massimo di due decimali.
12. Dobbiamo visualizzare un messaggio con il nime dell'utente, il numero di chilomentri, l'età e il prezzo del biglietto

Fine programma
*/
/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/



/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/
//1. Dichiaro tutte le mie variabili
let name, km, age, price, finalPrice

//2. Chiedi all'utente di inserire il proprio nome.
name = prompt('Inserisci il tuo nome:');

//3. Chiedi all'utente di inserire il numero di chilometri da percorrere.
km = parseInt(prompt('Inserisci I km che vuoi percorrere:'));

//4. Chiedi all'utente di inserire la propria età.
age = parseInt(prompt('Inserisci la tua età:'));

//Calcola il prezzo del biglietto basato sulla distanza in chilometri.
price = km * 0.21;

//Sconto del 20% per i minorenni
if (age <= 18){
    //7. Applichiamo uno sconto del 20% al prezzo base.
    finalPrice = price - (price * 0.20);
}else if (age >= 65){
    //9. Applichiamo uno sconto del 40% al prezzo base
    finalPrice = price - (price * 0.40);
}else{
    //Nessuno sconto applicato
    finalPrice = price;
}

/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/
//Prendo l'elemento dove stamperò name.
document.getElementById('name').innerHTML = name;
//Prendo l'elemento dove stamperò km.
document.getElementById('km').innerHTML = km;
//Prendo l'elemento dove stamperò age.
document.getElementById('age').innerHTML = age;
//Prendo l'elemento dove stamperò price.
document.getElementById('price').innerHTML = price.toFixed(2);
//Prendo l'elemento dove stamperò price.
document.getElementById('finalPrice').innerHTML = finalPrice.toFixed(2);

/**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**/
//console.log
console.log('Nome:', name);
console.log('Km:', km);
console.log('Age:', age);
console.log('Price:', price);
console.log('Final Price:', finalPrice);
