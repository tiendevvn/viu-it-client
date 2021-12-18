import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";
import { MatchParams } from "@/app/types/common.type";

// utils
import { moment } from "@/app/utils";
import { useHover } from "@/core/hooks/useHover";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

// components
import {
  HometownIcon,
  LocationIcon,
  ClassIcon,
  MajorIcon,
  DateIcon,
  LinkIcon,
} from "@/app/components/Icons";

const UserInfoCommon: React.FC<PropType> = ({
  onlyProfile,
  match,
  infoCommonType,
}) => {
  const [hovered, eventHandlers] = useHover();

  const { profile, user } = useSelector(userSelector);

  const { student_id } = match.params;

  const condition = profile?.student_id.toString() === student_id;

  let infoCommonIcon;
  let infoCommonTitle;
  let infoCommonText;

  switch (infoCommonType) {
    case "hometown":
      infoCommonIcon = <HometownIcon />;
      infoCommonTitle = "Đến từ ";
      infoCommonText = onlyProfile
        ? profile?.hometown
        : condition
        ? profile.hometown
        : user?.hometown;
      break;
    case "location":
      infoCommonIcon = <LocationIcon />;
      infoCommonTitle = "Sống tại ";
      infoCommonText = onlyProfile
        ? profile?.location
        : condition
        ? profile.location
        : user?.location;
      break;
    case "class_name":
      infoCommonIcon = <ClassIcon />;
      infoCommonTitle = "Lớp ";
      infoCommonText = onlyProfile
        ? profile?.class_name
        : condition
        ? profile.class_name
        : user?.class_name;
      break;
    case "major":
      infoCommonIcon = <MajorIcon />;
      infoCommonTitle = "Chuyên ngành ";
      infoCommonText = onlyProfile
        ? profile?.major
        : condition
        ? profile.major
        : user?.major;
      break;
    case "created_at":
      infoCommonIcon = <DateIcon />;
      infoCommonTitle = "Đã tham gia ";
      infoCommonText = onlyProfile
        ? moment(profile?.createdAt).format("MMMM YYYY")
        : condition
        ? moment(profile.createdAt).format("MMMM YYYY")
        : moment(user?.createdAt).format("MMMM YYYY");
      break;
    case "website":
      infoCommonIcon = <LinkIcon />;
      infoCommonText = onlyProfile
        ? profile?.website
        : condition
        ? profile.website
        : user?.website;
      break;

    default:
      break;
  }

  const marginRightCondition =
    infoCommonType === "hometown" ||
    infoCommonType === "class_name" ||
    infoCommonType === "website";

  return (
    <div
      className={style9(
        base.root,
        classes.infoCommonContainer,
        marginRightCondition && classes.infoCommonContainerMarginRight
      )}
    >
      <div className={style9(classes.infoCommon)}>
        <div className={style9(base.root, classes.infoCommonIcon)}>
          {infoCommonIcon}
        </div>
        <div
          className={style9(
            base.rootText,
            base.rootTextEllipsis,
            classes.infoCommonContent
          )}
        >
          {infoCommonTitle}
          {infoCommonType === "website" ? (
            <a
              href={infoCommonText}
              className={style9(
                classes.infoCommonTextLink,
                hovered && classes.infoCommonTextLinkUnderline
              )}
              {...eventHandlers}
            >
              {infoCommonText}
            </a>
          ) : (
            <span className={style9(classes.infoCommonText)}>
              {infoCommonText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

type PropType = RouteComponentProps<MatchParams> & {
  onlyProfile?: boolean;
  infoCommonType:
    | "hometown"
    | "location"
    | "class_name"
    | "major"
    | "created_at"
    | "website";
};

const userSelector = (state: VIUState) => state.user;

export default withRouter(UserInfoCommon);
