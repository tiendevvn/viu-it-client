import React from "react";
import style9 from "style9";

// components
import UserAvatar from "@/app/components/User/UserAvatar";
import UserFullname from "@/app/components/User/UserFullname";
import UserStudentId from "@/app/components/User/UserStudentId";
import UserShortInfo from "@/app/components/User/UserShortInfo";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const HeaderUser: React.FC = () => {
  return (
    <div className={style9(base.root, classes.userContainer)}>
      <div
        className={style9(base.root, classes.userCenter, classes.userAvatar)}
      >
        <UserAvatar onlyProfile size="large" />
      </div>
      <div className={style9(base.root, classes.userCenter)}>
        <UserFullname onlyProfile />
      </div>
      <div className={style9(base.root, classes.userCenter)}>
        <UserStudentId onlyProfile />
      </div>
      <div className={style9(base.root, classes.userCenter)}>
        <UserShortInfo onlyProfile />
      </div>
    </div>
  );
};

export default HeaderUser;
