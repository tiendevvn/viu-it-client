import React, { ReactNode, useEffect, useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import style9 from "style9";

// types
import { VIUState } from "@/app/types/viu.type";

// hooks
import { useHover } from "@/core/hooks/useHover";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

// utils
import { PATH_NAME } from "@/app/utils/pathName";

const HeaderNavItem: React.FC<PropType> = ({
  name,
  path,
  icon,
  iconFill,
  history,
}) => {
  const { profile, user } = useSelector(userSelector);
  const [hovered, eventHandlers] = useHover();
  const [isActive, setActive] = useState(false);

  const pathname = history.location.pathname.slice(1, 5);

  const student_id = history.location.pathname.slice(1);

  const profileActive =
    user?.student_id.toString() === student_id &&
    profile?.student_id !== user.student_id;

  useEffect(() => {
    if (pathname === path.slice(0, 4) && !profileActive) setActive(true);
    else setActive(false);
  }, [pathname, path, profileActive]);

  const handleActive = () => setActive(true);

  const pathnameMatch =
    path === profile?.student_id &&
    history.location.pathname === PATH_NAME.EDIT_PROFILE;

  return (
    <Link
      className={style9(base.root, classes.navItemLink)}
      to={`/${path}`}
      {...eventHandlers}
      onClick={handleActive}
    >
      <div className={style9(base.root, classes.navItem)}>
        <div
          className={style9(
            base.root,
            classes.navIcon,
            (isActive || pathnameMatch) && classes.navActive,
            hovered && classes.navHoverCommon
          )}
        >
          {hovered || isActive || pathnameMatch ? iconFill : icon}
        </div>
        <div
          className={style9(
            base.root,
            base.rootText,
            base.rootTextEllipsis,
            classes.navText,
            (isActive || pathnameMatch) && classes.navActive,
            hovered && classes.navHoverCommon
          )}
        >
          {name}
        </div>
        {(hovered || isActive || pathnameMatch) && (
          <div className={style9(base.root, classes.navHover)}></div>
        )}
      </div>
    </Link>
  );
};

type PropType = RouteComponentProps & {
  name: string;
  path: string;
  icon: ReactNode;
  iconFill: ReactNode;
};

const userSelector = (state: VIUState) => state.user;

export default withRouter(HeaderNavItem);
