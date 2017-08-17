

// const mongo = require('mongodb').MongoClient;


const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=> {

    if (err)
        {
            return console.log("Something Went wrong"+err);
        }
        console.log("All Well Database connected....");


        //implementing the mongoDB functions here START

        db.collection('Todos').find({
            _id:new ObjectID('5993f668ed7eba4a047bdc3d'),
            text:' Something to done...'
        }).toArray().then((docs) => {

            console.log('Todos');
            console.log();
            console.log(JSON.stringify(docs,undefined,2));
        },(err) =>{
            if (err)
                {
                    return console.log(err);
                }
                console.log(err);
        })

        // This is for the total count over find START

        db.collection('Todos').find().count().then((count) =>{

            console.log(`Total Entries  ${count}`);
        },(err) => {
            if (err)
                {
                    return console.log(err);
                }
                
        })
            //implementing the mongoDB functions here END
        db.close();
});