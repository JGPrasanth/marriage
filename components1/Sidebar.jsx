import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaCar, FaBars } from "react-icons/fa";
import { IoCar } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { VscSymbolColor } from "react-icons/vsc";
import { LiaBorderAllSolid } from "react-icons/lia";
import { CiViewTable } from "react-icons/ci";
import { GoRepoPush } from "react-icons/go";
import "./sidebar.css";

const Sidebar = () => {
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      title: "UserManagement",
      items: [
        {
          path: "/customer",
          name: "Customer",
          icon: <GoRepoPush />,
        },
        {
          path: "/society",
          name: "Society",
          icon: <CiViewTable />,
        },
      ],
    },
    {
      title: "ServiceManagement",
      items: [
        {
          path: "/brand",
          name: "Brand",
          icon: <FaCar />,
        },
        {
          path: "/model",
          name: "Model",
          icon: <IoCar />,
        },
        {
          path: "/color",
          name: "Color",
          icon: <VscSymbolColor />,
        },
      ],
    },
    {
      path: "/order",
      name: "Order",
      icon: <LiaBorderAllSolid />,
    },
    {
      path: "/setting",
      name: "Setting",
      icon: <LuSettings />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <CgProfile />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <TbLogout2 />,
    },
  ];

  return (
    <div className="Sidebar black-border">
      <div className="side-nav-content">
        <ul className="nav-list">
          {menuItem.map((item, index) => (
            <li key={index} className="nav-list-item">
              <i>{item.icon}</i>
              <span>
                <a href={item.path}>{item.name}</a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
