const getUserSession = () => {
   
    const user = sessionStorage.getItem("user");
    const userToken = sessionStorage.getItem("userToken");

    if (userToken != null && user != null) {
      
      const userSession = JSON.parse(user);
      if (userSession.type === "ADMIN") {

        return {
          userType: "Admin",
          loggedUser: userSession._id,
          user: userSession,
        };
      } else if (userSession.type === "REGISTEREDUSER") {

        return {
          userType: "Registered",
          loggedUser: userSession._id,
          user: userSession,
        };
      } else {

        sessionStorage.removeItem("user");
        sessionStorage.removeItem("userToken");

        return {
          userType: "UnRegistered",
          loggedUser: null,
          user: null,
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
  