import React from "react";
import { useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const UserStudentId: React.FC<PropType> = ({ userType }) => {
  const { profile, user } = useSelector(userSelector);
  return (
    <div className={style9(base.root, classes.studentIdContainer)}>
      <div
        className={style9(
          base.rootText,
          base.rootTextEllipsis,
          classes.studentIdText
        )}
      >
        @{userType === "profile" ? profile?.student_id : user?.student_id}
      </div>
    </div>
  );
};

type PropType = {
  userType: "profile" | "user";
};

const userSelector = (state: VIUState) => state.user;

export default UserStudentId;
