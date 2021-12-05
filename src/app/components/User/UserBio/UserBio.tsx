import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";
import { MatchParams } from "@/app/types/common.type";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const UserBio: React.FC<PropType> = ({ onlyProfile, match }) => {
  const { profile, user } = useSelector(userSelector);

  const { student_id } = match.params;

  const bio =
    profile?.student_id.toString() === student_id ? profile.bio : user?.bio;

  return (
    <div
      className={style9(base.rootText, classes.UserInfoBio)}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
      }}
    >
      {onlyProfile ? profile?.bio : bio}
    </div>
  );
};

type PropType = RouteComponentProps<MatchParams> & {
  onlyProfile?: boolean;
};

const userSelector = (state: VIUState) => state.user;

export default withRouter(UserBio);
