import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyForm from "./components/Admin/CompanyForm";
import CommunicationMethodForm from "./components/Admin/CommunicationMethodForm";
import Dashboard from "./components/User/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/companies" element={<CompanyForm />} />
        <Route path="/admin/methods" element={<CommunicationMethodForm />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
