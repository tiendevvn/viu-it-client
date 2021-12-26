import React, { useState, useEffect, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";

// actions
import { getUser } from "@/app/actions/user.action";
// import { setShowModal } from "@/app/actions/app.action";

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
import UserInfoCommon from "@/app/components/User/UserInfoCommon";
import UserFollow from "@/app/components/User/UserFollow";
import EditProfile from "@/app/modules/Dialogs/EditProfile";

// utils
import { PATH_NAME } from "@/app/utils/pathName";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const Profile: React.FC<PropType> = ({ match, history }) => {
  const { profile, user } = useSelector(userSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { student_id } = match.params;

  const dispatch = useDispatch();

  const { pathname } = history.location;

  const matchPathname = PATH_NAME.EDIT_PROFILE === history.location.pathname;

  const showModal = useCallback(() => {
    setIsModalVisible(true);
    window.history.replaceState({}, "", PATH_NAME.EDIT_PROFILE);
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
    profile && history.push(`/${profile.student_id}`);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    profile && history.push(`/${profile.student_id}`);
  };

  const handleGetUser = useCallback(
    (student_id: string) => dispatch(getUser(student_id)),
    [dispatch]
  );

  useEffect(() => {
    handleGetUser(student_id);
  }, [dispatch, student_id, handleGetUser]);

  useEffect(() => {
    if (pathname === PATH_NAME.EDIT_PROFILE) {
      setIsModalVisible(true);
      if (profile) handleGetUser(profile.student_id);
    }
  }, [dispatch, student_id, pathname, profile, handleGetUser]);

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
                  <UserAvatar size="avatar-user" />
                  {(profile?.student_id.toString() === student_id ||
                    matchPathname) && (
                    <div className={style9(base.root, classes.profileButton)}>
                      <ButtonCommon
                        type="primary-outline"
                        size="medium"
                        buttonType="link"
                        urlLink={PATH_NAME.EDIT_PROFILE}
                        text="Chỉnh sửa hồ sơ"
                        styles={{ marginBottom: 12 }}
                        onClick={showModal}
                      />
                      <EditProfile
                        isModalVisible={isModalVisible}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
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
                    <div
                      className={style9(base.root, classes.profileInfoCommon)}
                    >
                      <UserInfoCommon infoCommonType="hometown" />
                      <UserInfoCommon infoCommonType="location" />
                    </div>
                    <div
                      className={style9(base.root, classes.profileInfoCommon)}
                    >
                      <UserInfoCommon infoCommonType="class_name" />
                      <UserInfoCommon infoCommonType="major" />
                    </div>
                    <div
                      className={style9(base.root, classes.profileInfoCommon)}
                    >
                      <UserInfoCommon infoCommonType="website" />
                      <UserInfoCommon infoCommonType="created_at" />
                    </div>
                    <div
                      className={style9(base.root, classes.profileInfoCommon)}
                    >
                      <UserFollow followType="following" />
                      <UserFollow followType="followers" />
                    </div>
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
