import React from "react";

function Dashboard() {
  const companies = [
    { name: "Company A", lastComms: ["Email", "Call"], nextComm: "LinkedIn Post" },
    { name: "Company B", lastComms: ["Message"], nextComm: "Phone Call" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Company Name</th>
            <th className="border px-4 py-2">Last 5 Communications</th>
            <th className="border px-4 py-2">Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{company.name}</td>
              <td className="border px-4 py-2">{company.lastComms.join(", ")}</td>
              <td className="border px-4 py-2">{company.nextComm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
