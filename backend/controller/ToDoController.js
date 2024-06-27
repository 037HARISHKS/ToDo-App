const ToDoModel = require('../model/ToDoModel');

module.exports.getToDo = async (req,res,next)=>{
     const ToDo = await ToDoModel.find()
     res.send(ToDo);
}

module.exports.saveToDo = async (req,res,next ) =>{
    const {text} = req.body
    ToDoModel.
    create({text})
    .then((data)=>{
        console.log(`added successfully...`);
        console.log({data});
        res.send(data)
    })
}

module.exports.updatToDo = async (req,res,next ) =>{
    const {_id,text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send('Updated successfully'))
    .catch((err)=>console.log(err))
   
}

module.exports.deleteToDo = async (req,res,next ) =>{
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send('Deleted successfully'))
    .catch((err)=>console.log(err))
   
}