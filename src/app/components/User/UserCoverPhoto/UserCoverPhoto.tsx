import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import style9 from "style9";

import CoverPhotoImage from "@/app/assets/images/cover-photo.png";

// types
import { VIUState } from "@/app/types/viu.type";
import { MatchParams } from "@/app/types/common.type";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const UserCoverPhoto: React.FC<PropType> = ({ onlyProfile, match }) => {
  const { profile, user } = useSelector(userSelector);

  const { student_id } = match.params;

  const coverPhotoLink = user
    ? profile && profile.student_id.toString() === student_id
      ? profile.cover_photo
      : user.cover_photo
    : CoverPhotoImage;

  return (
    <a
      className={style9(base.root, classes.coverPhotoContainer)}
      href={onlyProfile ? profile?.cover_photo : coverPhotoLink}
      target="_blank"
      rel="noreferrer"
    >
      <div className={style9(base.root, classes.coverPhotoCover)}>
        <div className={style9(classes.coverPhotoPadWidth)}></div>
        <div className={style9(classes.coverPhotoBox)}>
          <div className={style9(base.root, classes.coverPhotoBoxInner)}>
            <div
              className={style9(classes.coverPhoto)}
              style={{
                backgroundImage: `url(${
                  onlyProfile ? profile?.cover_photo : coverPhotoLink
                })`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </a>
  );
};

type PropType = RouteComponentProps<MatchParams> & {
  onlyProfile?: boolean;
};

const userSelector = (state: VIUState) => state.user;

export default withRouter(UserCoverPhoto);
