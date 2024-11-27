import React, { useState } from "react";
import SidebarItem from "./SideBarItem";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { icon: <span>🏠</span>, label: "Home" },
    { icon: <span>👥</span>, label: "Users" },
    { icon: <span>🔗</span>, label: "Links" },
    { icon: <span>⏰</span>, label: "Time" },
    { icon: <span>💬</span>, label: "Messages", isActive: true },
    { icon: <span>💼</span>, label: "Briefcase" },
    { icon: <span>🏛️</span>, label: "Bank" },
  ];

  return (
    <aside className="flex flex-col items-center h-screen min-w-[80px] bg-white border-r border-gray-200">
      <div className="mt-4">
        <img
          src="https://i.ibb.co/Rzm4mfZ/Meta-Emblem.png"
          alt="Logo"
          className="h-8 w-10"
        />
      </div>
      <div className="mt-6 flex flex-col gap-4">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            isActive={item.isActive}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
