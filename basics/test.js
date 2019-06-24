//logger in same folder use ./
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventsEmmitter = require('events');
const Logger = require('./logger');

const logger = new Logger();
const http = require('http');

const server = http.createServer((request, respond) =>{
  if(request.url === '/'){
    respond.write('Hello World');
    respond.end();
  }
  if(request.url == '/home'){
    respond.write(JSON.stringify([1,2,3]));
    respond.end();
  }
})

server.listen(3000);

//register a listener
logger.on('Message', (eventArg) => { // function(eventArg) is replaced as (eventArg) =>
  console.log('listener called', eventArg);
});

logger.log('message');

//synchronous method
const files =  fs.readdirSync('./');
//log(files);

//async method, second parameter is a callback function, which is called when async function finished
// fs.readdir('./', function(err, files){
//   if(err){
//     console.log('error', err);
//   }else{
//     console.log('Result', files);
//   }
// });

var totalMem = os.totalmem();
var freeMem = os.freemem();
console.log(`totalMem = ${totalMem}`);

var pathObj = path.parse(__filename);

function hello(name){
  console.log('Hello ' + name);
}
