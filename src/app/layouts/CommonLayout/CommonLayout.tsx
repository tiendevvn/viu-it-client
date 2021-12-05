import React, { ReactNode } from "react";
import style9 from "style9";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const CommonLayout: React.FC<PropType> = ({ children, sidebar }) => {
  return (
    <div className={style9(base.root, classes.container)}>
      <div className={style9(base.root, classes.content)}>{children}</div>
      <div className={style9(base.root, classes.sidebar)}>{sidebar}</div>
    </div>
  );
};

type PropType = {
  sidebar: ReactNode;
};

export default CommonLayout;
