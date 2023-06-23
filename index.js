console.log("hiiii shivam chahar");
console.log("whats doing ");
var a=0;
do{
    a++                          
    console.log("a value is = " + a);
}
while(a<18)

const fs = require('fs');
// fs.writeFileSync('read.txt',"wlecome shivam");
// fs.writeFileSync('read.txt', 'hello shivam whats doing');

// fs.appendFileSync('read.txt','hii aish you are to much cute');'
const buff_data=fs.readFileSync('read.txt');
console.log(buff_data);
org_data=buff_data.toString();
console.log(org_data);
fs.renameSync('read.txt','readwrite.txt');