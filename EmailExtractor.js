
const fs = require('fs');

const text = fs.readFileSync('test.txt',{encoding: "utf8"});

let count = 0

  for(let i=0; i<text.length; i++){
    if(text.substr(i, 13) == '@softwire.com'){
        count++ ;
    }
}
console.log(`\nTotal number of email addresses found : ${count}`);