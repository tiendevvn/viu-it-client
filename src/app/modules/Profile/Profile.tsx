import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";

// actions
import { getUser } from "@/app/actions/user.action";

// layouts
import CommonLayout from "@/app/layouts/CommonLayout";

// components
import Head from "@/app/components/Head";
import ButtonCommon from "@/app/components/Button/ButtonCommon";
import UserCoverPhoto from "@/app/components/User/UserCoverPhoto";
import UserAvatar from "@/app/components/User/UserAvatar";
import UserFullname from "@/app/components/User/UserFullname";
import UserStudentId from "@/app/components/User/UserStudentId";
import UserBio from "@/app/components/User/UserBio";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const Profile: React.FC<PropType> = ({ match }) => {
  const { profile, user } = useSelector(userSelector);

  const { student_id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(student_id));
  }, [dispatch, student_id]);

  return (
    <CommonLayout sidebar={null}>
      <div className={style9(base.root, classes.profileContainer)}>
        <Head headline="Profile" buttonBack="true" />
        <div className={style9(base.root, classes.profileContent)}>
          <div className={style9(base.root, classes.profileContentMain)}>
            <div className={style9(base.root)}>
              <UserCoverPhoto />
              <div className={style9(base.root, classes.profileInfo)}>
                <div className={style9(base.root, classes.profileInfoOne)}>
                  <UserAvatar
                    avatarWidth="25%"
                    avatarHeight="auto"
                    styles={{
                      marginTop: "-14%",
                      marginLeft: -4,
                    }}
                  />
                  {profile?.student_id.toString() === student_id && (
                    <div className={style9(base.root, classes.profileButton)}>
                      <ButtonCommon
                        buttonType="button"
                        text="Chỉnh sửa hồ sơ"
                        styles={{ marginBottom: 12 }}
                      />
                    </div>
                  )}
                </div>
                <div className={style9(base.root, classes.profileInfoTwo)}>
                  <div
                    className={style9(base.root, classes.profileInfoTwoInner)}
                  >
                    {user && <UserFullname />}
                    <UserStudentId />
                  </div>
                </div>
                {user && (
                  <>
                    <div className={style9(base.root, classes.profileInfoBio)}>
                      <UserBio />
                    </div>
                    <div className={style9(base.root)}>1</div>
                    <div className={style9(base.root)}>1</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

interface MatchParams {
  student_id: string;
}

type PropType = RouteComponentProps<MatchParams>;

const userSelector = (state: VIUState) => state.user;

export default Profile;
