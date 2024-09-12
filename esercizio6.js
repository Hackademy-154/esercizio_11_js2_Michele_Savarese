


while (true) {
scelta= prompt(
    `Bitite: 1/ Acqua, 2/ CocaCola, 3/ birra`
)
    switch (scelta) {
        case `1`:
            console.log(`E’ stata selezionata l’acqua`);
            break;
    case `2`:
        console.log(`E’ stata selezionata coca cola`);
    break;

    case `3`:
        console.log(`E’ stata selezionata birra`);
        break;

        default:
            continue;
    }
    break;
}