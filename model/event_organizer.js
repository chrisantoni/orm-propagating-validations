var mongoose = require('mongoose')

var Schema = mongoose.Schema


var eoSchema = new Schema({
  title:{type:String,unique:[true,'Duplicate title'],required:[true,'Your title cannot be blank']},
  event_name:{type:String,required:[true,'Your even name cannot be blank'],unique:[true,'Duplicate event name']},
  date:{type:[Date,'Invalida date format'],required:[true,'Your date cannot be blank'],
    validate:function(data){
        return /\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])/.test(data)//yyyy-mm-dd
}},
  email:{
    type:String,
    validate:function(email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
      }
    }
},{
  timestamps : true
})

var Event = mongoose.model('Event',eoSchema)
module.exports = Event
