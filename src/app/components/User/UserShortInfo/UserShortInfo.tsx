import React from "react";
import { useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const UserShortInfo: React.FC<PropType> = ({ userType }) => {
  const { profile, user } = useSelector(userSelector);

  return (
    <div className={style9(base.root, classes.shortInfoContainer)}>
      <div className={style9(base.root, classes.shortInfoCenter)}>
        <div className={style9(base.rootText)}>{534}</div>
        <div className={style9(base.rootText)}>Bài viết</div>
      </div>
      <div className={style9(base.root, classes.shortInfoCenter)}>
        <div className={style9(base.rootText)}>
          {userType === "profile"
            ? profile?.followers?.length || 0
            : user?.followers?.length || 0}
        </div>
        <div className={style9(base.rootText)}>Người theo dõi</div>
      </div>
      <div className={style9(base.root, classes.shortInfoCenter)}>
        <div className={style9(base.rootText)}>
          {userType === "profile"
            ? profile?.following?.length || 0
            : user?.following?.length || 0}
        </div>
        <div className={style9(base.rootText)}>Đang theo dõi</div>
      </div>
    </div>
  );
};

type PropType = {
  userType: "profile" | "user";
};

const userSelector = (state: VIUState) => state.user;

export default UserShortInfo;
