import React from "react";
import { useSelector } from "react-redux";
import style9 from "style9";
import HeaderNavItem from "./HeaderNavItem";

// components
import { HomeIcon } from "@/app/components/Icons";
import { HomeFillIcon } from "@/app/components/Icons";
import { UserIcon } from "@/app/components/Icons";
import { UserFillIcon } from "@/app/components/Icons";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

// types
import { VIUState } from "@/app/types/viu.type";

const navList = [
  {
    id: 1,
    name: "Trang chủ",
    path: "home",
    icon: <HomeIcon />,
    iconFill: <HomeFillIcon />,
  },
  {
    id: 2,
    name: "Hồ sơ",
    path: "profile",
    icon: <UserIcon />,
    iconFill: <UserFillIcon />,
  },
];

const HeaderNav: React.FC = () => {
  const { profile } = useSelector(userSelector);

  return (
    <div className={style9(base.root, classes.navContainer)}>
      <nav className={style9(base.root, classes.nav)}>
        {navList.map(navItem => (
          <HeaderNavItem
            key={navItem.id}
            name={navItem.name}
            path={
              navItem.path === "profile"
                ? profile?.student_id || ""
                : navItem.path
            }
            icon={navItem.icon}
            iconFill={navItem.iconFill}
          />
        ))}
      </nav>
    </div>
  );
};

const userSelector = (state: VIUState) => state.user;

export default HeaderNav;
