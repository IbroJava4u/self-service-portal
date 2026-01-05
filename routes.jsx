import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeApp from "./services/HomeApp";
import PerformanceChart from "./services/PerformanceChart";
import ContributionReceived  from "./services/ContributionReceived";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Main Dashboard Route */}
        <Route path="/" element={<HomeApp />} />

        {/* Example: Client Self-Service Sub-routes */}
        {/* <Route path="/profile" element={<ProfilePage />} /> */}

        <Route path="/performance" element={<PerformanceChart />} />

        <Route path="/contribution" element={<ContributionReceived />} />

        {/* 404 Catch-all */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
