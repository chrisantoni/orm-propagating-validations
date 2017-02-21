var Event = require('../model/event_organizer')

module.exports={
  get_all_event:function(req,res){
      Event.find({},function(err,data){
        if(err)throw err
        res.send(data)
      })
  },
  create_event:function(req,res){
    var newEvent = Event({
    title : req.body.title,
    event_name : req.body.event_name,
    date : req.body.date,
    email : req.body.email
    })

    newEvent.save(function(err,data){
      if(err)res.send(err)
      res.send(data)
    })
  }
}
