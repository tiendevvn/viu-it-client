import React from "react";
import style9 from "style9";

// hooks
import { useHover } from "@/core/hooks/useHover";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const ButtonCommon: React.FC<PropType> = ({ buttonType, text, styles }) => {
  const [hovered, eventHandlers] = useHover();

  if (buttonType === "button") {
    return (
      <div
        className={style9(
          base.root,
          classes.button,
          hovered && classes.buttonHover
        )}
        style={{ ...styles }}
        {...eventHandlers}
      >
        <div
          className={style9(
            base.rootText,
            base.rootTextEllipsis,
            classes.buttonText,
            hovered && classes.buttonTextHover
          )}
        >
          {text}
        </div>
      </div>
    );
  } else {
    return <a href="/"></a>;
  }
};

type PropType = {
  buttonType: "button" | "link";
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles?: any;
};

export default ButtonCommon;
