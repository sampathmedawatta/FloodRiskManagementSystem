const swaggerUi = require("swagger-ui-express");
const express = require("express");

const port = process.env.PORT || 3001

const app = express();
app.use(express.json());

app.use("/faqs", require("./routes/faqsRoute"));
app.use("/news", require("./routes/newsRoute"));
app.use("/inquiries", require("./routes/inquiryRoute"));
app.use("/alerts", require("./routes/alertsRoute"));
app.use("/user", require("./routes/userRoute"));
app.use("/admin", require("./routes/adminRoute"));


const swaggerDocument = require("./swagger-output.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, ()=>
  console.log('Server started on port '+ port)
)