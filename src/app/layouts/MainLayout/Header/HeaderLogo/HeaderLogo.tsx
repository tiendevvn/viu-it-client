import React from "react";
import { Link } from "react-router-dom";
import style9 from "style9";

import ViuLogoImage from "@/app/assets/images/viu-logo.png";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const HeaderLogo: React.FC = () => {
  return (
    <div className={style9(base.root, classes.logoContainer)}>
      <h1 className={style9(base.root, classes.logoTitle)}>
        <Link className={style9(base.root, classes.logoLink)} to="/home">
          <div className={style9(base.rootText, classes.logoLinkInner)}>
            <span>
              <img
                className={style9(classes.logoImage)}
                src={ViuLogoImage}
                alt=""
              />
            </span>
            <span className={style9(base.rootText, classes.logoText)}>
              Viet Hung
            </span>
          </div>
        </Link>
      </h1>
    </div>
  );
};

export default HeaderLogo;
