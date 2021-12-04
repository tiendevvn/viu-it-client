import React from "react";
import style9 from "style9";

// components
import { LoadingIcon } from "@/app/components/Icons";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const Loader: React.FC = () => {
  return (
    <div className={style9(base.root, classes.loading)}>
      <LoadingIcon />
    </div>
  );
};

export default Loader;
