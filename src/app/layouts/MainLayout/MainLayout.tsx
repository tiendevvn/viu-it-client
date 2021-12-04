import React from "react";
import style9 from "style9";
import Header from "./Header";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={style9(base.root, classes.wrapper)}>
      <Header />
      <main role="main" className={style9(base.root, classes.mainContainer)}>
        <div className={style9(base.root, classes.main)}>
          <div className={style9(base.root, classes.mainInner)}>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
