import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import style9 from "style9";
import Header from "./Header";

// actions
import { setShowModal } from "@/app/actions/app.action";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

// components

import { PATH_NAME } from "@/app/utils/pathName";

const MainLayout: React.FC = ({ children }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { pathname } = history.location;

  useEffect(() => {
    if (pathname === PATH_NAME.EDIT_PROFILE) {
      dispatch(setShowModal(true));
    }
  }, [dispatch, pathname]);

  return (
    <div className={style9(base.root)}>
      <div className={style9(base.root, classes.wrapper)}>
        <Header />
        <main role="main" className={style9(base.root, classes.mainContainer)}>
          <div className={style9(base.root, classes.main)}>
            <div className={style9(base.root, classes.mainInner)}>
              {children}
            </div>
          </div>
        </main>
      </div>
      <div id="viu-modal" className={style9(base.root)}></div>
    </div>
  );
};

export default MainLayout;
