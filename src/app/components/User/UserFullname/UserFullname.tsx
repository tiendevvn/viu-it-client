import React from "react";
import { useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const UserFullname: React.FC<PropType> = ({ userType }) => {
  const { profile, user } = useSelector(userSelector);
  return (
    <div className={style9(base.root, classes.fullnameContainer)}>
      <div
        className={style9(
          base.rootText,
          base.rootTextEllipsis,
          classes.fullnameText
        )}
      >
        {userType === "profile" ? profile?.name : user?.name}
      </div>
    </div>
  );
};

type PropType = {
  userType: "profile" | "user";
};

const userSelector = (state: VIUState) => state.user;

export default UserFullname;
