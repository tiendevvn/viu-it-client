import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";

// components
import Modal from "@/app/components/Modal";
import ButtonIcon from "@/app/components/Button/ButtonIcon";
import UserCoverPhoto from "@/app/components/User/UserCoverPhoto";
import UserAvatar from "@/app/components/User/UserAvatar";
import Input from "@/app/components/Form/Input";
import Textarea from "@/app/components/Form/Textarea";
import Radio from "@/app/components/Form/Radio";

// styles
import { base } from "@/app/styles/baseClasses";
import { form } from "@/app/styles/formClasses";
import { classes } from "./styles";

const EditProfile: React.FC<PropType> = ({
  isModalVisible,
  handleOk,
  handleCancel,
}) => {
  const { profile } = useSelector(userSelector);

  const initialState = {
    name: profile?.name || "",
    email: profile?.email || "",
    phone_number: profile?.phone_number || "",
    birthday: profile?.birthday || "",
    gender: profile?.gender || "",
    bio: profile?.bio || "",
    website: profile?.website || "",
    hometown: profile?.hometown || "",
    location: profile?.location || "",
    class_name: profile?.class_name || "",
    major: profile?.major || "",
    cover_photo: profile?.cover_photo || "",
    profile_picture: profile?.profile_picture || "",
  };

  const [userData, setUserData] = useState(initialState);

  const {
    name,
    email,
    phone_number,
    birthday,
    gender,
    bio,
    website,
    hometown,
    location,
    class_name,
    major,
    cover_photo,
    profile_picture,
  } = userData;

  const [coverPhoto, setCoverPhoto] = useState<string | File>(cover_photo);
  const [preCoverPhoto, setPreCoverPhoto] = useState(cover_photo);
  const [profilePicture, setProfilePicture] = useState<string | File>(
    profile_picture
  );
  const [preProfilePicture, setPreProfilePicture] = useState<string | File>(
    profile_picture
  );

  const inputCoverPhotoFile = useRef<HTMLInputElement>(null);

  const handleOpenCoverPhotoFileBrowser = () =>
    inputCoverPhotoFile?.current?.click();

  const inputProfilePictureFile = useRef<HTMLInputElement>(null);

  const handleOpenProfilePictureFileBrowser = () =>
    inputProfilePictureFile?.current?.click();

  const handleChangeInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.currentTarget;
    setUserData({ ...userData, [name]: value });
  };

  const handleChangeCoverPhoto = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    setPreCoverPhoto(URL.createObjectURL(e.currentTarget.files[0]));
    setCoverPhoto(e.currentTarget.files[0]);
  };

  const handleChangeProfilePicture = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    setPreProfilePicture(URL.createObjectURL(e.currentTarget.files[0]));
    setProfilePicture(e.currentTarget.files[0]);
  };

  return isModalVisible ? (
    <Modal
      visible={isModalVisible}
      title="Chỉnh sửa hồ sơ"
      height={650}
      minWidth={600}
      minHeight={400}
      okText="Lưu"
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div className={style9(base.root, classes.editProfileCoverPhoto)}>
        <div className={style9(classes.editProfileContainer)}>
          <div className={style9(base.root)}>
            <UserCoverPhoto
              coverPhoto={preCoverPhoto ? preCoverPhoto : coverPhoto}
            />
            <div className={style9(base.root, classes.editProfileBox)}>
              <ButtonIcon
                type="light-viu"
                icon="camera"
                size="medium"
                onClick={handleOpenCoverPhotoFileBrowser}
              />
              <input
                className={style9(classes.editProfileInput)}
                ref={inputCoverPhotoFile}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleChangeCoverPhoto}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style9(base.root, classes.editProfileProfilePicture)}>
        <div className={style9(classes.editProfileContainer)}>
          <div className={style9(base.root)}>
            <UserAvatar
              size="avatar-user"
              profilePicture={
                preProfilePicture ? preProfilePicture : profilePicture
              }
            />
            <div
              className={style9(
                base.root,
                classes.editProfilePictureOverlay,
                classes.editProfileProfilePictureBox
              )}
            ></div>
            <div
              className={style9(
                base.root,
                classes.editProfileBox,
                classes.editProfileProfilePictureBox
              )}
            >
              <ButtonIcon
                type="light-viu"
                icon="camera"
                size="medium"
                onClick={handleOpenProfilePictureFileBrowser}
              />
              <input
                className={style9(classes.editProfileInput)}
                ref={inputProfilePictureFile}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleChangeProfilePicture}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <Input
          label="Tên"
          type="text"
          name="name"
          value={name}
          onChange={handleChangeInput}
          round="small"
        />
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <Textarea
          label="Tiểu sử"
          name="bio"
          value={bio}
          onChange={handleChangeInput}
          round="small"
          maxLength={160}
        />
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleChangeInput}
          round="small"
        />
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <Input
          label="Số điện thoại"
          type="text"
          name="phone_number"
          value={phone_number}
          onChange={handleChangeInput}
          round="small"
        />
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <Input
          label="Ngày sinh"
          type="date"
          name="birthday"
          value={birthday}
          onChange={handleChangeInput}
          round="small"
        />
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <Input
          label="Website"
          type="text"
          name="website"
          value={website}
          onChange={handleChangeInput}
          round="small"
        />
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <Input
          label="Quê quán"
          type="text"
          name="hometown"
          value={hometown}
          onChange={handleChangeInput}
          round="small"
        />
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <Input
          label="Tỉnh/Thành phố hiện tại"
          type="text"
          name="location"
          value={location}
          onChange={handleChangeInput}
          round="small"
        />
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <Input
          label="Lớp"
          type="text"
          name="class_name"
          value={class_name}
          onChange={handleChangeInput}
          round="small"
        />
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <Input
          label="Chuyên ngành"
          type="text"
          name="major"
          value={major}
          onChange={handleChangeInput}
          round="small"
        />
      </div>
      <div className={style9(base.root, classes.editProfileForm)}>
        <div
          className={style9(
            base.rootText,
            base.rootTextEllipsis,
            classes.editProfileLabel
          )}
        >
          Giới tính
        </div>
        <div className={style9(base.root, form.formRadio)}>
          <div className={style9(base.root, form.formRadioItem)}>
            <Radio label="Nam" name="gender" value={gender} defaultChecked />
          </div>
          <div className={style9(base.root, form.formRadioItem)}>
            <Radio label="Nữ" name="gender" value={gender} />
          </div>
        </div>
      </div>
    </Modal>
  ) : null;
};

type PropType = {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

const userSelector = (state: VIUState) => state.user;

export default EditProfile;
