import React from 'react';


import PublicHeader from './Components/Shared/Header';
import PublicNavbar from './Components/Shared/Navbar';
import PublicLogin from './Components/Shared/Login';
import PublicFooter from './Components/Shared/Footer';
import RegDashbord from './Components/RegUser/RegDashbord';
import MobileNavbar from './Components/Shared/MobileNavbar';

// Mock session object
const session = {
  role: 'user' 
};

function App() {

  return (
    <div className="App">
      <PublicHeader/>
      <MobileNavbar/>
      <main class="main">
      <PublicNavbar/>
      <RegDashbord/>
      </main>
      <PublicFooter/>
    </div>
  );
}

export default App
