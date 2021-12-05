import React from "react";
import style9 from "style9";
import HeaderLogo from "./HeaderLogo";
import HeaderUser from "./HeaderUser";
import HeaderNav from "./HeaderNav";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const Header: React.FC = () => {
  return (
    <header className={style9(base.root, classes.headerContainer)}>
      <div className={style9(base.root, classes.headerWidth)}>
        <div className={style9(base.root, classes.headerFixed)}>
          <div
            className={style9(base.root, classes.headerWidth, classes.header)}
          >
            <HeaderLogo />
            <HeaderUser />
            <HeaderNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
