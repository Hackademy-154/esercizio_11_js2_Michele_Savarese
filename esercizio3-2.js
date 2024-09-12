let temperatura = prompt(`Quanti gradi ci sono?`);


switch (true) {
    case temperatura < -10:
    console.log(`copriti…ancora ti raffreddi`);
    break;
    
    case temperatura < 0:
    console.log(`non e’ tanto il freddo quanto l’umidità`);
    break;
    
    case temperatura < 20:
    console.log(`non ci sono piu’ le mezze stagioni`);
    break
    
    case temperatura < 30:
    console.log(`mi dia una peroni sudata`);
    break
    
    case temperatura >= 30:
    console.log(`lu mare, lu sule e lu ientu`);
    break
    
    
    default:
    console.log(`Valore non valido`);
    break;
}
