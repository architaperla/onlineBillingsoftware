var fs = require("fs")
var data="hi my name is srilekha welcome to my world"

fs.writeFile("one.txt",data,(err)=>{
    if (err) throw err ;
    console.log("done")
})
fs.readFile("one.txt","utf-8",(err,data)=>{
    if (err) throw err ;
    console.log(data);
})
fs.appendFile("one.txt","", (err) => { 
    if (err) { 
      console.error("err"); 
    } })

fs.unlink('mynewfile2.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
      
fs.rename('one.txt', 'two.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });