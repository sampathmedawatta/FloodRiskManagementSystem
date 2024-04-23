const express = require("express");

const port = process.env.PORT || 3001

const app = express();

app.use(express.json());

app.use("/faqs", require("./routes/faqsRoute"));
app.use("/news", require("./routes/newsRoute"));
app.use("/inquiries", require("./routes/inquiryRoute"));
app.use("/alerts", require("./routes/alertsRoute"));
app.use("/user", require("./routes/userRoute"));

app.listen(port, ()=>
  console.log('Server started on port '+ port)
)