const EventsEmmitter = require('events');

class Logger extends EventsEmmitter{
  log(message){
    console.log(message);
    //raise an event, with an event argument
    this.emit('Message', {id : 1, url : 'http://'});
  }
}

//hence need to export to make it "public"
//exporting the entire object
module.exports = Logger;
//module.exports.log = log
// export only the function
