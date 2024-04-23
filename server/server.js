const express = require("express");

const port = process.env.PORT || 3001

const app = express();

app.use(express.json());

app.use("/faqs", require("./routes/faqsRoute"));

app.listen(port, ()=>
  console.log('Server started on port '+ port)
)