import React from 'react';
import PropTypes from 'prop-types';

/**
 * ContributionReceived Component
 * Designed for Pension Portals to show detailed remittance history.
 */
const ContributionReceived = ({ contributions = [{
    id: "TXN-001",
    period: "January 2024",
    employerName: "Apex Global Technologies Ltd",
    employerAmount: 55000.00,
    employeeAmount: 44000.00,
    valueDate: "2024-02-08",
    status: "Processed",
    batchRef: "BAT-772910-A"
  },
  {
    id: "TXN-002",
    period: "December 2023",
    employerName: "Apex Global Technologies Ltd",
    employerAmount: 55000.00,
    employeeAmount: 44000.00,
    valueDate: "2024-01-12",
    status: "Processed",
    batchRef: "BAT-661820-B"
  },
  {
    id: "TXN-003",
    period: "December 2025",
    employerName: "ZYX Pension Limited",
    employerAmount: 55000.00,
    employeeAmount: 44000.00,
    valueDate: "2023-12-05",
    status: "Processed",
    batchRef: "BAT-550912-C"
  },
  {
    id: "TXN-004",
    period: "November 2023",
    employerName: "ZYX Pension Limited",
    employerAmount: 52000.00,
    employeeAmount: 41600.00,
    valueDate: "2023-11-10",
    status: "Reconciling",
    batchRef: "BAT-449811-D"
  },
  {
    id: "TXN-005",
    period: "October 2023",
    employerName: "ZYX Pension Limited",
    employerAmount: 52000.00,
    employeeAmount: 41600.00,
    valueDate: "2023-10-02",
    status: "Pending",
    batchRef: "BAT-338710-E"
  }
] }) => {
  
  // Format numbers to Nigerian Naira (NGN) - standard for the local pension industry
  const formatNaira = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2
    }).format(amount);
  };

  if (!contributions || contributions.length === 0) {
    return (
      <div className="contribution-empty">
        <p>No recent contributions found for this account.</p>
      </div>
    );
  }

  return (
    <div className="contribution-container">
      <div className="contribution-header">
        <h3>Contribution Received</h3>
        <span className="text-muted">Last 5 Remittances</span>
      </div>

      <div className="table-responsive">
        <table className="contribution-table">
          <thead>
            <tr>
              <th>Period</th>
              <th>Employer Portions</th>
              <th>Employee Portions</th>
              <th>Total Amount</th>
              <th>Value Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {contributions.map((item) => (
              <tr key={item.id || item.batchRef}>
                <td>
                  <span className="period-text">{item.period}</span>
                  <small className="d-block text-muted">{item.employerName}</small>
                </td>
                <td className="amount-col">{formatNaira(item.employerAmount)}</td>
                <td className="amount-col">{formatNaira(item.employeeAmount)}</td>
                <td className="amount-col fw-bold">
                  {formatNaira(item.employerAmount + item.employeeAmount)}
                </td>
                <td>{new Date(item.valueDate).toLocaleDateString('en-GB')}</td>
                <td>
                  <span className={`status-pill ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="contribution-footer">
        <p className="info-note">
          Note: Contributions are credited to your RSAs once the schedule is processed by the Custodian.
        </p>
      </div>
    </div>
  );
};

// Define expected data structure for production safety
ContributionReceived.propTypes = {
  contributions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      period: PropTypes.string.isRequired, // e.g., "October 2023"
      employerName: PropTypes.string,
      employerAmount: PropTypes.number.isRequired,
      employeeAmount: PropTypes.number.isRequired,
      valueDate: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['Processed', 'Pending', 'Reconciling']).isRequired,
      batchRef: PropTypes.string
    })
  )
};

export default ContributionReceived;