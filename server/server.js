const swaggerUi = require("swagger-ui-express");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 3001

const app = express();

///connect to mongodb
const dbUrl = `mongodb+srv://COS80001db:test123@cluster0.xjkc2gt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const connect = mongoose.connect(dbUrl,{
    usenewurlparser: true,
    useunifiedtopology:true
}).then(()=>{
    app.listen(5000,()=>{
        console.log('server start on port 5000 and db connected');
    });
}).catch((error)=>{
    console.log('db connection is faild');
})


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

app.listen(port, ()=>
  console.log('Server started on port '+ port)
)