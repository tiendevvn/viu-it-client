import React from "react";
import style9 from "style9";

// components
import { AddIcon } from "@/app/components/Icons";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const ButtonCreatePost: React.FC = () => {
  return (
    <div className={style9(base.root, classes.btnContainer)}>
      <div className={style9(base.root, classes.btnIcon)}>
        <AddIcon />
      </div>
      <div className={style9(base.root)}>Tạo bài viết</div>
    </div>
  );
};

export default ButtonCreatePost;
