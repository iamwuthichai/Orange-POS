import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>

          {/* <Route element={<PublicRoute />}> */}

            {/* Public Routes */}
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/history" element={<History />}/>
            {/* <Route path="/verify-otp" element={<Verify />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/first-change-password" element={<FirstChangePassword />} /> */}

          {/* </Route> */}

          {/* Protected Routes */}

          {/* Error Route */}
          {/* <Route path="/error/403" element={<Error403 />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/error/500" element={<Error500 />} />
          <Route path="/error/503" element={<Error503 />} />
          <Route path="/wiki" element={<Wiki />} /> */}
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
