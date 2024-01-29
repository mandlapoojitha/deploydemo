"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import developericon from "../images/developericon.jpg";
import Loginbutton from "./Loginbutton";
import Signupbutton from "./SignupButton";


const menuData = {
  "items": [
    { "label": "Home", "link": "/" },
    {
      "label": "Blogs",
      "link": "/",
      "subMenu": [
        { "label": "HTML", "link": "/category/html" },
        { "label": "CSS", "link": "/category/css" },
        { "label": "Java script", "link": "/category/javascript" },
        { "label": "Jquery", "link": "/category/jquery" },
        { "label": "Mysql", "link": "/category/mysql" },
        { "label": "PHP", "link": "/category/php" },
        { "label": "Web development", "link": "/category/webdevelopment" },
        { "label": "Web services", "link": "/category/webservices" },
        { "label": "Wordpress", "link": "/category/wordpress" },
        

        
      ],
    },
    {
      "label": "Authors",
      "link": "/",
      "subMenu": [
        { "label": "Sara viera", "link": "/authors/saraviera" },
        { "label": "Ezequiel bruni", "link": "/authors/ezequielbruni" },
        { "label": "Marc schenker", "link": "/authors/marcschenker" },
        { "label": "Rafay ansari", "link": "/authors/rafayansari" },
        { "label": "Brenda stokes", "link": "/authors/brendastokes" },
        { "label": "Maddy osman", "link": "/authors/maddyosman" }
       
      ],
    },
  ],
};

const Navbar = () => {
  const renderSubMenu = (subMenu: any) => (
    <ul
      className="absolute group/edit invisible group-hover/item:visible bg-slate-200 text-black z-40 min-w-48 rounded"
      
    >
      {subMenu.map((subMenuItem: any, subIndex: any) => (
        <li key={subIndex} className=" hover:bg-slate-400 pl-4 pr-4 mt-1 mb-1 py-1 rounded px-1 mx-1">
          <Link href={subMenuItem.link}>{subMenuItem.label}</Link>
          {subIndex < subMenu.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full flex flex-row items-center justify-around p-5 pt-0 bg-black pb-0 pl-0 text-white h-14">
      <div className="h-full flex flex-row items-center ml-2  gap-5">
        {/* <Link href="/"><img src={`./developericon.jpg`} alt="no image" width={80} height={80} /></Link> */}
        <Link href="/"><p className="font-bold text-2xl">DevByteHub</p></Link>
       
      </div>
      <ul className="navitems-div h-full flex flex-row items-center gap-9 font-medium text-base">
        {menuData.items.map((menuItem, index) => (
          <li key={index} className="group/item cursor-pointer relative">
            <div className="flex items-center">
              {menuItem.link ? (
                <Link href={menuItem.link}>{menuItem.label}</Link>
              ) : (
                <span>{menuItem.label}</span>
              )}
              {menuItem.subMenu && (
                <div className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                    />
                  </svg>
                </div>
              )}
            </div>
            {menuItem.subMenu && renderSubMenu(menuItem.subMenu)}
          </li>
        ))}
        <div className="flex justify-center items-center gap-3">
          <Loginbutton></Loginbutton>
          <Signupbutton></Signupbutton>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
