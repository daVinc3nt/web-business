import MenuItems from "./MenuItem";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LangSelector from "../LangSelector/LangSelector";
import { FormattedMessage, useIntl } from "react-intl"
import MenuHambuger from "./MenuHambuger";
const Navbar = () => {
  const intl = useIntl();

  //things shall be on navbar menu
  const menuItemsData = [
    {
      title: intl.formatMessage({ id: 'NavBar.home' }),
      url: "/",
    },

    {
      title: intl.formatMessage({ id: 'NavBar.serv' }),
      url: "/services",
      submenu: [
        {
          title: intl.formatMessage({ id: 'NavBar.serv.subroute1' }),
          url: "/transport",
        },
        {
          title: intl.formatMessage({ id: 'NavBar.serv.subroute2' }),
          url: "/userhelp",
        },
      ],
    },

    {
      title: intl.formatMessage({ id: 'NavBar.enroll' }),
      url: "/enroll",
      submenu: [
        {
          title: intl.formatMessage({ id: 'NavBar.enroll.subroute1' }),
          url: "/driver", //this will be connect to another url driver website
        },
        {
          title: intl.formatMessage({ id: 'NavBar.enroll.subroute2' }),
          url: "/driverhelp",
        },
      ],
    },
    {
      title: intl.formatMessage({ id: 'NavBar.info' }),
      url: "/info",
      submenu: [
        {
          title:  intl.formatMessage({ id: 'NavBar.info.subroute1' }),
          url: "/news",
        },
        {
          title: intl.formatMessage({ id: 'NavBar.info.subroute2' }),
          url: "/about",
        },
      ],
    }
  ];
  //

  
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            TDLogistics
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex gap-5">
          {menuItemsData.map((menu, index) => {
            return (<MenuItems items={menu} key={index} depthLevel={0} textColor={textColor} />);
          })}
        </ul>
        <div className="flex items-center">
          <LangSelector IconColor={textColor}/>
          <MenuHambuger  toggle ={handleNav}/>
          </div>
      </div>
    </div>
  );
};

export default Navbar;