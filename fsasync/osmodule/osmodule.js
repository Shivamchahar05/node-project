const os = require('os');
console.log(os.arch());
console.log('hiii');
console.log(os.cpus());
console.log('byyy');
const freemem =os.totalmem();
console.log(`${freemem/1024/1024/1024}`);
console.log(os.hostname());
console.log(os.version());