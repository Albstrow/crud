import React, { useEffect } from "react";

const AdminRedirect = () => {
  useEffect(() => {
    window.open("https://vishalecom.pythonanywhere.com/admin/", "_blank"); // Open Django Admin in a new tab
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <p className="text-gray-600">Django Admin has opened in a new tab.</p>
      <a
        href="http://vishalecom.pythonanywhere.com/admin/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Open Admin Panel Again
      </a>
    </div>
  );
};

export default AdminRedirect;
