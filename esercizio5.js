let iterazionidispari = 0;
let sommadispari = 0;
let media = sommadispari/iterazionidispari;

for (let i = 0; i < 21; i++) {
if (i % 2 === 0) {
console.log(i);
    }else {
        iterazionidispari++;
        console.log(`sommadispari=${sommadispari} + ${i}`);
        sommadispari = sommadispari+i;
    }media = sommadispari/iterazionidispari;
}

console.log(media);
