import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import PublicHeader from './Components/Shared/Header';
import PublicNavbar from './Components/Shared/Navbar';
import PublicLogin from './Components/Shared/Login';
import PublicFooter from './Components/Shared/Footer';
import RegDashbord from './Components/RegUser/RegDashbord';
import NonRegDashbord from "./Components/NonRegUser/NonRegDashbord";
import AdminDashbord from "./Components/Admin/AdminDashbord";
import MobileNavbar from './Components/Shared/MobileNavbar';
import Faq from './Components/Shared/Faqtable';
import AdminFaq from "./Components/Admin/AdminFaq";
import { getUserSession } from './Components/Shared/SessionUtils';

const userSession = getUserSession();

function App() {
  const userType = userSession.userType;

  const isAdmin = userType === 'Admin';
  const isRegistered = userType === 'Registered';

  return (
    <div className="App">
      <Router>
        <PublicHeader />
        <MobileNavbar />
        <main className="main">
          <PublicNavbar userType={userType} />
          <Routes>
            {/* For Admins */}
            {isAdmin && <Route path="admin-dashboard" element={<AdminDashbord />} />}
            {isAdmin && <Route path="manage-faq" element={<AdminFaq />} />}

            {/* For Registered Users */}
            {isRegistered && <Route path="dashboard" element={<RegDashbord />} />}
            {isRegistered && <Route path="faq" element={<Faq />} />}

            {/* For Unregistered Users */}
            {!userType && <Route path="home" element={<NonRegDashbord />} />}
            <Route path="/" element={<Navigate to={isRegistered ? '/dashboard' : isAdmin ? '/admin-dashboard' : '/home'} />} />
          </Routes>
        </main>
        <PublicFooter />
      </Router>
    </div>
  );
}

export default App;
