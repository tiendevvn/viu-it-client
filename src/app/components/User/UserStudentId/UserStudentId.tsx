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

const UserStudentId: React.FC<PropType> = ({ onlyProfile, match }) => {
  const { profile, user } = useSelector(userSelector);

  const { student_id } = match.params;

  const userStudentId =
    profile?.student_id.toString() === student_id
      ? profile.student_id
      : user
      ? user.student_id
      : student_id;

  return (
    <div className={style9(base.root, classes.studentIdContainer)}>
      <div
        className={style9(
          base.rootText,
          base.rootTextEllipsis,
          classes.studentIdText
        )}
      >
        @{onlyProfile ? profile?.student_id : userStudentId}
      </div>
    </div>
  );
};

type PropType = RouteComponentProps<MatchParams> & {
  onlyProfile?: boolean;
};

const userSelector = (state: VIUState) => state.user;

export default withRouter(UserStudentId);
