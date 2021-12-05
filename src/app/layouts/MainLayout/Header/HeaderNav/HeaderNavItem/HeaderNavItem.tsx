import React, { ReactNode, useEffect, useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import style9 from "style9";

// hooks
import { useHover } from "@/core/hooks/useHover";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const HeaderNavItem: React.FC<PropType> = ({
  name,
  path,
  icon,
  iconFill,
  history,
}) => {
  const [hovered, eventHandlers] = useHover();
  const [isActive, setActive] = useState(false);

  const pathname = history.location.pathname.slice(1, 5);

  useEffect(() => {
    if (pathname === path.slice(0, 4)) setActive(true);
    else setActive(false);
  }, [pathname, path]);

  const handleActive = () => setActive(true);

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
            isActive && classes.navActive,
            hovered && classes.navHoverCommon
          )}
        >
          {hovered || isActive ? iconFill : icon}
        </div>
        <div
          className={style9(
            base.root,
            base.rootText,
            base.rootTextEllipsis,
            classes.navText,
            isActive && classes.navActive,
            hovered && classes.navHoverCommon
          )}
        >
          {name}
        </div>
        {(hovered || isActive) && (
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

export default withRouter(HeaderNavItem);
