let voto = prompt(`Quanto hai preso di voto?`);



switch (true) {
    case voto > 0 && voto < 18:
    console.log(`Sei stato bocciato`);
    break;
    
    case voto > 17 && voto < 21:
    console.log(`Sufficiente`);
    break;
    
    case voto > 20 && voto < 25:
    console.log(`Buono`);
    break
    
    case voto > 25 && voto < 28:
    console.log(`Distinto`);
    break
    
    case voto > 28 && voto < 30:
    console.log(`Ottimo`);
    break
    
    case voto == 30:
    console.log(`Eccellente`);
    break
    
    default:
    console.log(`Valore non valido`);
    break;
}

