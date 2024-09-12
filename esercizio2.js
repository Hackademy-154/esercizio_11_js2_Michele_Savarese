let voto = prompt(`Quanto hai preso di voto?`);


if (voto > 0 && voto < 18) {
    console.log(`Sei stato bocciato`);
    
} else if (voto > 17 && voto < 21) {
    console.log(`Sufficiente`);
 
}

else if (voto > 20 && voto < 25) {
    console.log(`Buono`);
}

else if (voto > 25 && voto < 28) {
    console.log(`Distinto`);
}


else if (voto > 28 && voto < 30) {
    console.log(`Ottimo`);
}

else if (voto == 30) {
    console.log(`Eccellente`);
}

else{ 
    console.log(`Valore non valido`);
 }   



 