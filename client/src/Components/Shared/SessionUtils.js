const getUserSession = () => {
    //  logic to retrieve the user session here
  
    const user = sessionStorage.getItem("user");
    const userToken = sessionStorage.getItem("userToken");

    if (userToken != null && user != null) {
      console.log(userToken);
      console.log(user);

      if (user.type == "ADMIN") {
        return {
          userType: "Admin",
          loggedUser: user._id,
        };
      } else if (user.type == "REGISTEREDUSER") {
        return {
          userType: "Registered",
          loggedUser: user._id,
        };
      } else {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("userToken");

        return {
          userType: "UnRegistered",
          loggedUser: null,
        };
      }
      
    } else {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("userToken");

      return {
        userType: "UnRegistered",
        loggedUser: null,
      };
    }
  };
  
  export { getUserSession };
  