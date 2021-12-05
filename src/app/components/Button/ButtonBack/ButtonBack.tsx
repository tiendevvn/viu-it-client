import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import style9 from "style9";

// components
import { BackIcon } from "@/app/components/Icons";

// hooks
import { useHover } from "@/core/hooks/useHover";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const ButtonBack: React.FC<PropType> = ({ history }) => {
  const [hovered, eventHandlers] = useHover();
  const handleGoBack = () => history.goBack();

  return (
    <div className={style9(base.root, classes.buttonBackContainer)}>
      <div
        className={style9(
          base.root,
          classes.buttonBack,
          hovered && classes.buttonBackHover
        )}
        onClick={handleGoBack}
        {...eventHandlers}
      >
        <div className={style9(base.rootText, classes.buttonBackInner)}>
          <BackIcon />
        </div>
      </div>
    </div>
  );
};

type PropType = RouteComponentProps;

export default withRouter(ButtonBack);
