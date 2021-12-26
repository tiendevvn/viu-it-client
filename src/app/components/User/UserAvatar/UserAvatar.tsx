import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import style9 from "style9";

import ProfilePictureImage from "@/app/assets/images/profile-picture.png";

// types
import { VIUState } from "@/app/types/viu.type";
import { MatchParams } from "@/app/types/common.type";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const UserAvatar: React.FC<PropType> = ({
  onlyProfile,
  profilePicture,
  size,
  match,
}) => {
  const { profile, user } = useSelector(userSelector);

  const { student_id } = match.params;

  const profilePictureLink = user
    ? profile && profile.student_id.toString() === student_id
      ? profile.profile_picture
      : user.profile_picture
    : ProfilePictureImage;

  const link =
    profile?.student_id.toString() === student_id
      ? profile.student_id
      : user
      ? user.student_id
      : student_id;

  let avatarSize;

  switch (size) {
    case "small":
      break;
    case "medium":
      break;
    case "large":
      avatarSize = classes.avatarLarge;
      break;
    case "extra-large":
      break;
    case "extra-extra-large":
      break;
    case "avatar-user":
      avatarSize = classes.avatarUser;
      break;

    default:
      break;
  }

  return (
    <div className={style9(base.root, classes.avatarContainer, avatarSize)}>
      <div className={style9(base.root, classes.avatarCover)}>
        <Link
          className={style9(base.root, classes.avatarLink)}
          to={`/${onlyProfile ? profile?.student_id : link}`}
        >
          <div className={style9(base.root)}>
            <div className={style9(base.root, classes.avatarRounded)}>
              <div className={style9(base.root, classes.avatarBox)}>
                <div className={style9(classes.avatarCoverImage)}>
                  <div
                    className={style9(base.root, classes.avatarImage)}
                    style={{
                      backgroundImage: `url(${
                        onlyProfile
                          ? profile?.profile_picture
                          : profilePicture
                          ? profilePicture
                          : profilePictureLink
                      })`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className={style9(base.root, classes.avatarHover)}></div>
        </Link>
      </div>
    </div>
  );
};

type PropType = RouteComponentProps<MatchParams> & {
  onlyProfile?: boolean;
  profilePicture?: string | File;
  size:
    | "small"
    | "medium"
    | "large"
    | "extra-large"
    | "extra-extra-large"
    | "avatar-user";
};

const userSelector = (state: VIUState) => state.user;

export default withRouter(UserAvatar);
