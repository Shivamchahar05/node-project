const fs = require('fs');
fs.writeFileSync("bio.txt",'shivam chahar');
fs.appendFileSync('bio.txt','software engineer');
const buff_data=fs.readFileSync('bio.txt','utf-8');
// const org=buff_data.toString();
console.log(buff_data);
fs.renameSync('bio.txt','mybio.txt');
fs.rmdirSync('mybio.txt');
// fs.unlinkSync('mybio.txt');