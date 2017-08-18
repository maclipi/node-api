

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{

    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }

});


// var newTodo = new Todo ({
//     text:'Cook Dinner'
// });


// newTodo.save().then((doc)=>{

//         console.log('Saved Todo',doc);
// }, (e) =>{
//     console.log(e);
// });

othertoDo = new Todo({

    text:'Hello',
    completed:true,
    completedAt:121212
})
othertoDo.save (res =>{
    console.log("Saved Data"+res);
}, (e) => {
    console.log(e);
})
//save new something