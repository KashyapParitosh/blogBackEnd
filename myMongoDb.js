// console.log("Hiii, Welcome to MongoDb :-)");
// DATABASE, [ CRUD ]
// ******************* CREATE A NEW DATABASE *****************
// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/DemoDB'
// MongoClient.connect( url, (err,db)=> {
//     if(err) throw err;
//     console.log("Database is created :-)");
//     db.close();
// } )



// ********************* CREATE COLLECTION *********************
//  db.createCollection("DemoCollection")

// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// MongoClient.connect(url , (err,db)=> {
//     if(err) throw err;
//     let dbo = db.db('DemoDB');
//     dbo.createCollection("DemoCollection", (err,res)=>{
//         if(err) throw err;
//         console.log("Collection is Created :-)",res);
//         db.close()
//     } )
// })


// *************** DELETE DATABASE ************************
// db.dropDatabase() // shell 
// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// MongoClient.connect(url , (err,db)=> {
//     if(err) throw err;
//     let dbo = db.db('DemoDB');

//     dbo.dropDatabase((err,res)=>{
//         if(err) throw err;
//         console.log("Database Finished !!");
//         db.close()
//     } )
// })


// *************** DROP COLLECTION ************************
// db.myCollection2.drop()
// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// MongoClient.connect(url , (err,db)=> {
//     if(err) throw err;
//     let dbo = db.db('mymongodb');

//     dbo.collection("myCollection2").drop((err,res)=>{
//         if(err) throw err;
//         console.log("Collection Finished !!");
//         db.close()
//     } )
// })

// // *************** INSERT ONE DOCUMENT ************************
// db.myCollection.insertOne( {"name":"saksham"} )
// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// MongoClient.connect(url , (err,db)=> {
//     if(err) throw err;
//     let dbo = db.db('mymongodb');
//     const myObj = {"name":"saksham2"}
//     dbo.collection("myCollection2").insertOne( myObj, (err,res)=>{
//         if(err) throw err;
//         console.log("1 document is Inserted !!");
//         db.close()
//     } )
// })



// *************** INSERT MANY DOCUMENT ************************
// db.myCollection.insertMany( [ {"name":"saksham"} ] )
// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// MongoClient.connect(url , (err,db)=> {
//     if(err) throw err;
//     let dbo = db.db('mymongodb');
//     const myObjList = 
//     [
//         {"name":"saksham"},
//         {"name":"xyz"},
//         {"name":"abc"}
//     ]
//     dbo.collection("myCollection2").insertMany( myObjList, (err,res)=>{
//         if(err) throw err;
//         console.log("Many document is Inserted !!",res.insertedCount);
//         db.close()
//     } )
// })



// *************** FINDONE DOCUMENT ************************
// db.myCollection.findOne()
// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// MongoClient.connect(url , (err,db)=> {
//     if(err) throw err;
//     let dbo = db.db('mymongodb');
   
//     dbo.collection("myCollection2").findOne( {} ,  (err,res)=>{
//         if(err) throw err;
//         console.log(res);
//         db.close()
//     } )
// })

// **************** FIND DOCUEMENT **************************


// db.myCollection.find()
// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// MongoClient.connect(url , (err,db)=> {
//     if(err) throw err;
//     let dbo = db.db('mymongodb');
//     // let query = { "salary": { $gte : 50} }
//     dbo.collection("myCollection2").find({}).toArray( (err,res)=>{
//         if(err) throw err;
//         console.log(res);
//         db.close()
//     } ) 
// })



// Db.collection.findOneAndReplace( {},{} )
// Db.collection.findOneAndDelete( {} )


// UPDATE
//db.collection.update( 
//     {} , 
//     {
//         $set : {
//             "phone":"8877878"
//         }
//     } 
// )

// const MongoClient = require('mongodb').MongoClient
// const url = 'mongodb://localhost:27017/'
// MongoClient.connect(url , (err,db)=> {
//     if(err) throw err;
//     let dbo = db.db('mymongodb');
//     let findDoc = { "name": "saksham2" }
//     let newDoc = { 
//         $set: {
//             "phone":898989899899,
//             "phone2":32232223
//         }
//      }
//     dbo.collection("myCollection2").updateOne( findDoc , newDoc, (err,res)=>{
//         if(err) throw err;
//         console.log(res);
//         db.close()
//     } ) 
// })






// ************************* SHELL DELETE CMD ***********************************************
// Db.COLLECTION_NAME.DELETEONE({"KEY":"VALUE"})       //This will delete this matched query document (FIRST)
// Db.COLLECTION_NAME.DELETEMANY({"KEY":"VALUE"})       //This will delete this matched query document (ALL MATCHED)
// Db.COLLECTION_NAME.DELETEONE({})       // [ !!DANGER!! ] This will delete all document

