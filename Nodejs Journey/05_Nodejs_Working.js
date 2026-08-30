const fs = require('fs');

// Sync Call / Blocing Call......:
console.log('\n....... Sync Call / Blocing Call .......')
console.log('1');

const result = fs.readFileSync('./04_contacts.txt','utf-8')
console.log(result);

console.log('2');

// ASync Call / Non-Blocing Call......:
console.log('\n....... ASync Call / Non-Blocing Call .......')
console.log('1');

fs.readFile('./04_contacts.txt','utf-8', (err, result) => {
    if(err) {
        console.log('Error: ', err);         
    }
    else {
       console.log(result);        
    }
})

console.log('2');