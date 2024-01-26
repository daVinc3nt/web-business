import React, { ReactNode, useState } from "react";
import Navbar from "./Nav/nav"
import Footer from "./Footer/footer";
interface LayoutProps {
  children: ReactNode;
} 
//reactNode is a dataType of react, its can be JSX, 
//component or any fragment

const Wrapper = ({ children }: LayoutProps) => {
  const [toggleCollapseMobile, setToggleCollapseMobile] = useState(false);
  const handleSidebarToggleMobile = () => {
    setToggleCollapseMobile(!toggleCollapseMobile);
  };
  return (
    <div className="flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  );
};

export default Wrapper;
