
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

//Validate UK Mobile Phone Number
function parsePhoneNumber(phonenumber){

    if(phonenumber == phonenumber.match(/((\+[0-9]{1,2}\s)|0)((([0-9]{3})\s){2}([0-9]{4})|(([0-9]{4})\s)([0-9]{6}))/g)){
        return true;
    }else{
        return false;
    }

}

console.log(parsePhoneNumber("+44 7777 737 767"))

console.log(parsePhoneNumber("07403 036844"))



