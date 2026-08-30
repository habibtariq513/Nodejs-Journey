// In Nodejs, we need 'fs' module in order to handle files and it's a built-in module.

// Difference b/w Sync and Async:
// Sync Function returns something and that can be stored in a variable
// ASync Function doesn't return anything and return answer in callback function

const fs = require('fs')

// ----------------- Creating a File ----------------- 
// console.log('----------------- Creating a File ----------------- ')
// Sync Call:
// fs.writeFileSync('./test.txt', 'Hi there')  

// Async Call:
// fs.writeFile('./test.txt', 'Hi there..... Async', (err) => {})

// // ----------------- Reading a File ----------------- 
// console.log('\n----------------- Reading a File -----------------')
// // Sync Call:
// const result = fs.readFileSync('./04_contacts.txt','utf-8')
// console.log(result);

// // Async Call:
// fs.readFile('./04_contacts.txt','utf-8', (err, result) => {
//     if(err) {
//         console.log('Error: ', err);         
//     }
//     else {
//        console.log('\n', result);        
//     }
// })

// ----------------- Append in a File ----------------- 
// console.log('\n----------------- Append in a File -----------------')
// fs.appendFileSync('./test.txt', `${Date.now()} Hey There\n`)

// ----------------- Copy a File ----------------- 
// console.log('\n----------------- Copy a File -----------------')
// fs.cpSync('./test.txt', './05_copy.txt')

// ----------------- Delete a File ----------------- 
// console.log('\n----------------- Delete a File -----------------')
// fs.unlinkSync('./05_copy.txt')

// ----------------- Stats of a File ----------------- 
// console.log('\n----------------- Stats of a File -----------------')
// console.log('Whole Stats:\n', fs.statSync('./test.txt'))
// console.log('\nChk if it is a File:', fs.statSync('./test.txt').isFile())
