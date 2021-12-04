import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// utils
import { PATH_NAME } from "@/app/utils/pathName";

// types
import { VIUState } from "@/app/types/viu.type";

const RoleRoute: React.FC<PropsType> = ({ children, requireRoles = [] }) => {
  const { profile } = useSelector(userSelector);
  const history = useHistory();

  useEffect(() => {
    if (profile) {
      const { role } = profile;

      if (!role || requireRoles.length === 0) return;

      const checkRole = requireRoles.includes(role);

      if (!checkRole) history.replace(PATH_NAME.ERROR_403);
    }
  }, [history, profile, requireRoles]);

  return <>{children}</>;
};

type PropsType = {
  requireRoles: string[] | [];
};

const userSelector = (state: VIUState) => state.user;

export default RoleRoute;
