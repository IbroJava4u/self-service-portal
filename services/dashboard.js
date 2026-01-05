// services/dashboardService.js
export async function loadDashboardData(clientId) {
  const token = localStorage.getItem("token");

  const response = await fetch(`/api/dashboard/${clientId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}
