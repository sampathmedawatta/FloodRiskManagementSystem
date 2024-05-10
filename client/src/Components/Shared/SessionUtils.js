const getUserSession = () => {
    //  logic to retrieve the user session here
  
    const user = sessionStorage.getItem("user");
    const userToken = sessionStorage.getItem("userToken");

    return {


      
      //  userType: "Admin", // Change different user types: "Admin", "UnRegistered", "Registered"
      // loggedUser: "663914ed74f8c699e856b3ab" ,// Admin 662f4bf66c836c8dba8f6665  ,662e2b867daa986ce1b85bdd
      //   loggedFname:"John",
      //   loggedlname:"Nelson"

      userType: "UnRegistered", // Change different user types: "Admin", "UnRegistered", "Registered"
      loggedUser: "663af0be33163a8112a73baf", // Admin 662f4bf66c836c8dba8f6665  Registered 662e397f8d45a1beaffac1a5 ,662c4e93312931e3091ce72
      loggedFname: "Kav",
      loggedlname: "Smith",
      //userType: "UnRegistered"
    };
  };
  
  export { getUserSession };
  