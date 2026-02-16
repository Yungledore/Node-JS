var fs = require('fs');
// create a file named mynewfile1.txt:
fs.appendFile('mynewtextfile.txt','this is my message in NodeJS', function(err){
 if (err)throw err;
 console.log('Saved!')
})