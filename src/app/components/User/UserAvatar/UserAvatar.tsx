import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const UserAvatar: React.FC<PropType> = ({
  userType,
  avatarWidth,
  avatarHeight,
}) => {
  const { profile, user } = useSelector(userSelector);
  return (
    <div
      className={style9(base.root, classes.avatarContainer)}
      style={{ width: avatarWidth, height: avatarHeight }}
    >
      <div className={style9(base.root, classes.avatarCover)}>
        <Link
          className={style9(base.root, classes.avatarLink)}
          to={`/${
            userType === "profile" ? profile?.student_id : user?.student_id
          }`}
        >
          <div className={style9(base.root)}>
            <div className={style9(base.root, classes.avatarRounded)}>
              <div className={style9(base.root, classes.avatarBox)}>
                <div className={style9(classes.avatarCoverImage)}>
                  <div
                    className={style9(base.root, classes.avatarImage)}
                    style={{
                      backgroundImage: `url(${
                        userType === "profile"
                          ? profile?.profile_picture
                          : user?.profile_picture
                      })`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={style9(base.root, classes.avatarHover)}
            style={{ width: avatarWidth, height: avatarHeight }}
          ></div>
        </Link>
      </div>
    </div>
  );
};

type PropType = {
  userType: "profile" | "user";
  avatarWidth: string;
  avatarHeight: string;
};

const userSelector = (state: VIUState) => state.user;

export default UserAvatar;
