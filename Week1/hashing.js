const crypto = require('crypto'); // library for crypto

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');  // using sha256 algorithm
console.log(hash)

//Assignment 1
function getNonce() {
    let nonce = 1;
    while (true) {
        const hash = crypto.createHash('sha256').update(nonce.toString()).digest('hex');
        if (hash.startsWith('0000')) {
            console.log(nonce);
            break;
        }
        nonce++;
    }
}
getNonce();

// Assignment 2
function getNoncewithString(name){
    let nonce = 1;
    while (true) {
        const hash = crypto.createHash('sha256').update(name+nonce.toString()).digest('hex');
        if (hash.startsWith("0000")) {
            console.log(nonce);
            break;
        }
        nonce++;
    }
}
getNoncewithString("100xdevs");

// Assignment 3
str = `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10`;
getNoncewithString(str);

//Assignment 4

// explore https://andersbrownworth.com/blockchain/

