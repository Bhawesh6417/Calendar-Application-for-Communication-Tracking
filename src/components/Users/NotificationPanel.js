import React from "react";

function NotificationPanel() {
  const notifications = [
    { id: 1, message: "Follow up with Company A by tomorrow." },
    { id: 2, message: "Send an email to Company B today." },
    { id: 3, message: "Schedule a LinkedIn post for Company C." },
  ];

  return (
    <div className="p-4 border rounded bg-gray-100">
      <h2 className="text-lg font-bold mb-3">Notifications</h2>
      <ul className="space-y-2">
        {notifications.map((notification) => (
          <li key={notification.id} className="bg-white p-2 rounded shadow">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationPanel;
