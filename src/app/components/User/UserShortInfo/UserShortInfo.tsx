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

const UserShortInfo: React.FC<PropType> = ({ onlyProfile, match }) => {
  const { profile, user } = useSelector(userSelector);

  const { student_id } = match.params;

  const followers =
    profile?.student_id.toString() === student_id
      ? profile.followers.length || 0
      : user?.followers?.length || 0;

  const following =
    profile?.student_id.toString() === student_id
      ? profile.following.length || 0
      : user?.following?.length || 0;

  return (
    <div className={style9(base.root, classes.shortInfoContainer)}>
      <div className={style9(base.root, classes.shortInfoCenter)}>
        <div className={style9(base.rootText)}>{534}</div>
        <div className={style9(base.rootText)}>Bài viết</div>
      </div>
      <div className={style9(base.root, classes.shortInfoCenter)}>
        <div className={style9(base.rootText)}>
          {onlyProfile ? profile?.followers?.length || 0 : followers}
        </div>
        <div className={style9(base.rootText)}>Người theo dõi</div>
      </div>
      <div className={style9(base.root, classes.shortInfoCenter)}>
        <div className={style9(base.rootText)}>
          {onlyProfile ? profile?.following?.length || 0 : following}
        </div>
        <div className={style9(base.rootText)}>Đang theo dõi</div>
      </div>
    </div>
  );
};

type PropType = RouteComponentProps<MatchParams> & {
  onlyProfile?: boolean;
};

const userSelector = (state: VIUState) => state.user;

export default withRouter(UserShortInfo);
