const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://COS80001db:test123@cluster0.xjkc2gt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

module.export = {
    // establish connection to db
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        // catch error when trying to connect
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    // return connection to db
    getDb: () => dbConnection
}