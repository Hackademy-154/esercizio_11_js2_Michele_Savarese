


let totgatti =prompt(`Quanti gatti ci sono in tutto?`);
let rigagatti =prompt(`Quante gatti ci sono in una fila?`);
let a = Math.floor(totgatti/rigagatti);
let b = Math.floor(totgatti%rigagatti);
let c = Math.floor(rigagatti-b);


// `

console.log(`Ci sono ${a} file di gatti e ne mancano ${c} per una nuova fila, con un avanzo di ${b}`)

// alert(`Ci sono ${a} file di gatti.`);
// alert(`Ci sono ${b} gatti fuori dalla fila.`);
// alert(`Mancano ${c} gatti per completare una nuova fila.`c);
