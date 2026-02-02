// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May I have your name? ');
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }
let i = 0;
const myCounter = window.setInterval(function(){
    console.log(i);
    i++;
    if (i > 10) {
        window.clearInterval(myCounter)
    }
}, 1000);