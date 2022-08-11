
let count = 0;

const fs = require('fs');
const text = fs.readFileSync('test.txt',{encoding: "utf8"});

function extractEmails (content) {  //extract all email addresses
    return content.match(/([A-Za-z0-9.'_%+-]+@[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+)/gi); 
    
}

function extractDomains (content) {  //extract all Domains
    return content.match(/(@[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+)/gi); 
    
}
const allEmails = extractEmails(text);
const allDomains = extractDomains(text);

// //removing duplicate entries
// const set = new Set(allDomains);
// const uniqueDomains = [set];

//Filtering email ids by common domains and counting the occurrences
const Dictionary = Object.fromEntries(allDomains.map(d => [d, allEmails.filter(e => e.endsWith(d)).length]));

console.log(Dictionary);

//console.log(uniqueDomains);



//console.log(`Total Domains found : ${extractDomains(text)}`);

// function extractEmails (test) {
//     return test.match(/([a-zA-Z0-9.'_%+-]+@[techswitch]+\.[co]+\.[uk]+)/gi);
    
// } returned 163

//console.log(`Total number of email addresses found : ${extractEmails(text).length}`);


