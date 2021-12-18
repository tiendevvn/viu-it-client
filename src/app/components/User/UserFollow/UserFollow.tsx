import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";
import { MatchParams } from "@/app/types/common.type";

// utils
import { useHover } from "@/core/hooks/useHover";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const UserFollow: React.FC<PropType> = ({ onlyProfile, match, followType }) => {
  const [hovered, eventHandlers] = useHover();
  const { profile, user } = useSelector(userSelector);

  const { student_id } = match.params;

  const condition = profile?.student_id.toString() === student_id;

  let followTitle;
  let followNum;
  const userStudentId = onlyProfile
    ? profile?.student_id
    : condition
    ? profile.student_id
    : user?.student_id;

  switch (followType) {
    case "following":
      followTitle = "Đang theo dõi ";
      followNum = onlyProfile
        ? profile?.following?.length || 0
        : condition
        ? profile.following?.length || 0
        : user?.following?.length || 0;
      break;
    case "followers":
      followTitle = "Người theo dõi ";
      followNum = onlyProfile
        ? profile?.followers?.length || 0
        : condition
        ? profile.followers?.length || 0
        : user?.followers?.length || 0;
      break;

    default:
      break;
  }

  return (
    <div
      className={style9(
        base.root,
        classes.follow,
        followType === "following" && classes.followMarginRight
      )}
    >
      <a
        href={`${userStudentId}/${followType}`}
        role="link"
        className={style9(
          base.rootText,
          base.rootTextEllipsis,
          classes.followLink,
          hovered && classes.followLinkHover
        )}
        {...eventHandlers}
      >
        <span className={style9(classes.followNum)}>{followNum}</span>{" "}
        <span>{followTitle}</span>
      </a>
    </div>
  );
};

type PropType = RouteComponentProps<MatchParams> & {
  onlyProfile?: boolean;
  followType: "following" | "followers";
};

const userSelector = (state: VIUState) => state.user;

export default withRouter(UserFollow);
