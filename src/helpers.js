export function calcularTotal(cant, term){
    let totalCant;
    switch (true) {
        case cant <= 1000:
            totalCant = cant * .25;
            break;
        case cant > 1000 && cant <= 5000:
            totalCant = cant * .20;
            break;
        case cant > 5000 && cant <= 10000:
            totalCant = cant * .15;
            break;
        case cant > 10000:
            totalCant = cant * .10;
            break;
        default:
            break;
    }
    //console.log(totalCant);

    let totalTerm = 0;
    switch (term) {
        case 3:
            totalTerm = cant * .05;
            break;
        case 6:
            totalTerm = cant * .10;
            break;
        case 12:
            totalTerm = cant * .15;
            break;
        case 24:
            totalTerm = cant * .20;
            break;
        default:
            break;
    }
    //console.log(totalTerm);

    return cant + totalCant + totalTerm;
}