const express = require('express');
const app = express();
const port = 3000;
const data = require("./data.json");
const fs = require("fs");

console.log(data);

const newUser = [
  {
    userId: "111",
    title: "user 4",
  }
];



app.get("/api",(req,res) =>{
    res.json({ users: ["user one", "user two", "user three", "user four"] });

    fs.writeFile("data.json", JSON.stringify(newUser), (err) => {
      if (err) throw err;
      console.log(err);
    });
    
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
