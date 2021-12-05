import React from "react";
import style9 from "style9";

// components
import Search from "@/app/components/Search";
import ButtonCreatePost from "@/app/components/Button/ButtonCreatePost";
import { InboxIcon } from "@/app/components/Icons";
import { BellIcon } from "@/app/components/Icons";
// import { BellFillIcon } from "@/app/components/Icons";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const Topbar: React.FC = () => {
  return (
    <div className={style9(base.root, classes.topbarContainer)}>
      <div className={style9(base.root, classes.topbarCol)}>
        <div className={style9(base.root, classes.topbarSearch)}>
          <Search />
        </div>
      </div>
      <div className={style9(base.root, classes.topbarCol, classes.topbarRow)}>
        <div className={style9(base.root, classes.topbarIcon)}>
          <InboxIcon />
        </div>
        <div className={style9(base.root, classes.topbarIcon)}>
          <BellIcon />
        </div>
        <div className={style9(base.root, classes.topbarButton)}>
          <ButtonCreatePost />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
