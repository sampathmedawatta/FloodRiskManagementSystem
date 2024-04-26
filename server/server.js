const swaggerUi = require("swagger-ui-express");
const express = require("express");
const cors = require("cors");
const { connectToDb, getDb } = require('./db')

//middleware
app.use(express.json())


//db connection
let db

connectToDb((err) => {
  if (!err) {
    app.listen(port, ()=> {
      console.log('Server started on port '+ port)
    })
    db = getDb()
  }
})

//routes
app.get('/collection_name_here', (req, res) => {
  // current page 
  const page = req.query.p || 0
  const dataPerPage = 25

  let weatherDataArray = []

  //reference to the collection, fetching all data
  db.collection('collection_name_here')
  .find()
  .sort({}) //set sort method later
  .skip(page * dataPerPage)
  .limit(dataPerPage)
  .forEach(  )//collection_name_here (collection_name => array_name.push(collection_name))
  .then(() => {
    res.status(200).json(weatherDataArray)
  })
  .catch (() => {
    res.status(500).json({error: 'Could not fetch the documents'}) //server error
  })
})

//fetching single documents
app.get('/collection_name/:id', (req, res) => {

  if (ObjectId.isValid(req.params.id)) {
    db.collection('collection_name')
    .findOne({_id: ObjectId(req.params.id)})
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => {
      res.status(500).json({error: 'Could not fetch the document'})
    })
  } else {
    res.status(500).json({error: 'Not a valid doc id'})
  }
})

//postman, handling POST request 

app.post('/collection_name', (req, res) => {
  const data = req.body

  db.collection('collection_name')
    .insertOne(data)
    .then(result => {
      res.status(201).json(result) //successfuly added a resource
    })
    .catch(err => {
      res.status(500).json({err: 'Could not create a new document'})
    })
})

//postman, handling DELETE request
app.delete('/collection_name/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection('collection_name')
    .deleteOne({_id: ObjectId(req.params.id)})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({error: 'Could not delete the document'})
    })
  } else {
    res.status(500).json({error: 'Not a valid doc id'})
  }
})


//handling PATCH request

app.patch('collection_name/:id', (req, res) => {
  const updates = req.body

  if (ObjectId.isValid(req.params.id)) {
    db.collection('collection_name')
    .updateOne({_id: ObjectId(req.params.id)}, {$set: updates})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({error: 'Could not update the document'})
    })
  } else {
    res.status(500).json({error: 'Not a valid doc id'})
  }
})



const port = process.env.PORT || 3001

const app = express();
app.use(cors());
app.use(express.json());

app.use("/faqs", require("./routes/faqsRoute"));
app.use("/news", require("./routes/newsRoute"));
app.use("/inquiries", require("./routes/inquiryRoute"));
app.use("/alerts", require("./routes/alertsRoute"));
app.use("/user", require("./routes/userRoute"));
app.use("/admin", require("./routes/adminRoute"));
app.use("/login", require("./routes/authRoute"));

const swaggerDocument = require("./swagger-output.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

