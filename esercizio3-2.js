let temperatura = prompt(`Quanti gradi ci sono?`);


if (temperatura < -10) {
    console.log(`copriti…ancora ti raffreddi`);
    
} else if (temperatura < 0) {
    console.log(`non e’ tanto il freddo quanto l’umidità`);
 
}

else if (temperatura < 20) {
    console.log(`non ci sono piu’ le mezze stagioni`);
}

else if (temperatura < 30) {
    console.log(`mi dia una peroni sudata`);
}


else if (temperatura >= 30) {
    console.log(`lu mare, lu sule e lu ientu`);
}


else{ 
    console.log(`Valore non valido`);
 }   

