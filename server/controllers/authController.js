const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const users = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    uName: "fName",
    password: "password",
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
    uName: "fName",
    password: "password",
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
    uName: "fName",
    password: "password",
  },
];

exports.login = (request, response) => {
    try{
        const SECRET_KEY = "secretkey";
        const { uName, password } = request.body;

        console.log(request.body);
         console.log(uName);
          console.log(password);

        if (!uName) {
          return response
            .status(422)
            .json({ message: "Username or Passowrd required" });
        }
        if (!password) {
          return response
            .status(422)
            .json({ message: "Username or Passowrd required" });
        }

        const user = users.find((user) => user.uName == uName);

        if (!user) {
          return response
            .status(422)
            .json({ message: "Invalid username or password" });
        }

        // enable this after DB created
       // const isPasswordValid = bcrypt.compare(password, user.password);

        // if (!isPasswordValid) {
        //  return response
        //    .status(422)
        //    .json({ message: "Invalid username or password" });
        // }

         if (password != user.password) {
           return response
             .status(422)
             .json({ message: "Invalid username or password" });
         }

        const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
          expiresIn: "1hr",
        });

        response
          .status(201)
          .json({ message: "User login successfully", token: token });
    }
    catch(error){
        response.status(500).json({ error: "unable to get users" });
    }
  
};

