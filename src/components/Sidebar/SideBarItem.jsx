import React from "react";

const SidebarItem = ({ icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center h-12 w-12 rounded-lg ${
        isActive
          ? "bg-blue-100 text-blue-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
    </button>
  );
};

export default SidebarItem;
