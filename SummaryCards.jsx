// components/SummaryCards.jsx
export default function SummaryCards({ summary }) {
  return (
    <div className="cards">
      <div className="card">
        <h3>Total Investment</h3>
        <p>₦{summary.totalInvestment.toLocaleString()}</p>
      </div>

      <div className="card">
        <h3>Total Returns</h3>
        <p>₦{summary.totalReturns.toLocaleString()}</p>
      </div>

      <div className="card">
        <h3>ROI</h3>
        <p>{summary.roi}%</p>
      </div>
    </div>
  );
}
