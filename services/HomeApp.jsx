//import React, { useEffect, useState } from "react";
//import SummaryCards from "./SummaryCards";
import PerformanceChart from "./PerformanceChart";
import TransactionsTable from "./TransactionTables";
//import { loadDashboardData } from "./TransactionTables";
import "./styles.css";

export default function HomeApp() {
  // const [dashboard, setDashboard] = useState(null);
  // const clientId = "CLIENT_001";

  // useEffect(() => {
  //   loadDashboardData(clientId).then(setDashboard);
  // }, []);

  // if (!dashboard) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard">
      <h1>Investment Dashboard</h1>
{/* 
      <SummaryCards summary={{"totalInvestment": 1500000,
    "totalReturns": 230000,
    "roi": 15.3}} /> */}

      <PerformanceChart data={[
    { "month": "Jan", "value": 1200000 },
    { "month": "Feb", "value": 1300000 },
    { "month": "Mar", "value": 1500000 }
  ]} />

      <TransactionsTable transactions={[
    { "id": 1, "date": "2025-01-12", "type": "Contribution", "amount": 200000, "status": "Completed" }
  ]} />
    </div>
  );
}
