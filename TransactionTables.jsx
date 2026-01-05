export default function TransactionsTable({ transactions = [] }) {
  if (transactions.length === 0) {
    return (
      <div className="table-card">
        <h2>Recent Transactions</h2>
        <p className="empty-state">No recent transactions found.</p>
      </div>
    );
  }

  return (
    <div className="table-card">
      <h2>Recent Transactions</h2>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td>{new Date(tx.date).toLocaleDateString()}</td>
                <td><span className={`badge ${tx.type.toLowerCase()}`}>{tx.type}</span></td>
                <td className="amount-cell">
                  {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(tx.amount)}
                </td>
                <td>
                  <span className={`status-dot ${tx.status.toLowerCase()}`}></span>
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}