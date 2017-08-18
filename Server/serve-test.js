
var express = require('express');
var bodyParser = require('body-parser');



var {mongoose} = require('./db/mongoose');
var {Todo} = require ('./models/todo');
var {User} = require('./models/user');




var app = express();

     app.use(bodyParser.json());


app.post('/todos',(req,res)=>{

// use bodyPasrser
var todo = new Todo({
    "text":req.body.text
});

todo.save().then((doc) => {
    res.send(doc);
},e =>{
    res.status(400).send(e);
})

});


app.listen(3000,()=>{
    console.log("Hearing on 3000");
});
// app.get('/todos')

// var newTodo = new todo({
//     text:'aa',
//     mobile:false,
//     completedAt:11212
// })

// newTodo.save().then(doc =>{

//     console.log(doc)
// },err => {
//     console.log("error"+err);
// })





// var user = new User({
//     email:'mayank@example.com'
// })
// user.save().then((doc)=>{
//     console.log("User Created",doc);
// },e=>{
//     console.log("Error",e);
// })
