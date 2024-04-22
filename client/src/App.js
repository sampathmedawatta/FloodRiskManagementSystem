import React from 'react';


import PublicHeader from './Components/Header';
import PublicNavbar from './Components/Navbar';
import PublicLogin from './Components/Login';
import PublicFooter from './Components/Footer';
import RegDashbord from './Components/RegUser/RegDashbord';

function App() {

  return (
    <div className="App">
      <PublicHeader/>
      <PublicNavbar/>
      <RegDashbord/>
      <PublicFooter/>
    </div>
  );
}

export default App
