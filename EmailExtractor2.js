
let count = 0;

const fs = require('fs');
const text = fs.readFileSync('test.txt',{encoding: "utf8"});

//extract Softwire email addresses

function extractEmails (content) {              
    return content.match(/([a-zA-Z0-9.'_%+-]+@[softwire]+\.[com]+)/gi);
}

// function extractEmails (content) {  
//   return content.match(/([a-zA-Z0-9.'_%+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
// }
// function extractEmails (content) {
//     return content.match(/([a-zA-Z0-9.'_%+-]+@[techswitch]+\.[co]+\.[uk]+)/gi);
    
// } returned 163

console.log(`Total number of email addresses found : ${extractEmails(text)}`);
