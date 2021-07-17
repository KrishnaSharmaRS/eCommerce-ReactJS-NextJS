import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.component";

const Header = () => {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const height = document.scrollingElement?.scrollTop;

         if (Number(height) > 0 && !scrolled) setScrolled(true);
         else if (height === 0 && scrolled) setScrolled(false);
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [scrolled]);

   return (
      <header id="header" className={`_1K0cJ detached-header-no-border${scrolled ? " down detached" : ""} _3lOV0`}>
         <Navbar scrolled={scrolled} />
      </header>
   );
};

export default Header;
