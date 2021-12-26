import React from "react";
import { Link } from "react-router-dom";
import style9 from "style9";

// hooks
import { useHover } from "@/core/hooks/useHover";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const ButtonCommon: React.FC<PropType> = ({
  type,
  size,
  disabled,
  widthFull,
  buttonType,
  text,
  styles,
  onClick,
  urlLink,
}) => {
  const [hovered, eventHandlers] = useHover();

  const content = (
    <div
      className={style9(base.rootText, base.rootTextEllipsis, classes.btnText)}
    >
      {text}
    </div>
  );

  let btnType;
  let btnTypeHover;
  let btnSize;

  switch (type) {
    case "primary":
      btnType = classes.btnPrimary;
      btnTypeHover = classes.btnPrimaryHover;
      break;
    case "secondary":
      btnType = classes.btnSecondary;
      btnTypeHover = classes.btnSecondaryHover;
      break;
    case "success":
      btnType = classes.btnSuccess;
      btnTypeHover = classes.btnSuccessHover;
      break;
    case "danger":
      btnType = classes.btnDanger;
      btnTypeHover = classes.btnDangerHover;
      break;
    case "warning":
      btnType = classes.btnWarning;
      btnTypeHover = classes.btnWarningHover;
      break;
    case "info":
      btnType = classes.btnInfo;
      btnTypeHover = classes.btnInfoHover;
      break;
    case "light":
      btnType = classes.btnLight;
      btnTypeHover = classes.btnLightHover;
      break;
    case "dark":
      btnType = classes.btnDark;
      btnTypeHover = classes.btnDarkHover;
      break;
    case "primary-outline":
      btnType = classes.btnPrimaryOutline;
      btnTypeHover = classes.btnPrimaryOutlineHover;
      break;
    case "secondary-outline":
      btnType = classes.btnSecondaryOutline;
      btnTypeHover = classes.btnSecondaryOutlineHover;
      break;
    case "success-outline":
      btnType = classes.btnSuccessOutline;
      btnTypeHover = classes.btnSuccessOutlineHover;
      break;
    case "danger-outline":
      btnType = classes.btnDangerOutline;
      btnTypeHover = classes.btnDangerOutlineHover;
      break;
    case "warning-outline":
      btnType = classes.btnWarningOutline;
      btnTypeHover = classes.btnWarningOutlineHover;
      break;
    case "info-outline":
      btnType = classes.btnInfoOutline;
      btnTypeHover = classes.btnInfoOutlineHover;
      break;
    case "light-outline":
      btnType = classes.btnLightOutline;
      btnTypeHover = classes.btnLightOutlineHover;
      break;
    case "dark-outline":
      btnType = classes.btnDarkOutline;
      btnTypeHover = classes.btnDarkOutlineHover;
      break;

    default:
      break;
  }

  switch (size) {
    case "small":
      btnSize = classes.btnSmall;
      break;
    case "medium":
      btnSize = classes.btnMedium;
      break;
    case "large":
      btnSize = classes.btnLarge;
      break;
    case "extra-large":
      btnSize = classes.btnExtraLarge;
      break;
    case "extra-extra-large":
      btnSize = classes.btnExtraExtraLarge;
      break;

    default:
      break;
  }

  if (buttonType === "button") {
    return (
      <div
        className={style9(
          base.root,
          classes.btn,
          disabled && classes.btnDisabled,
          widthFull && classes.btnWidthFull,
          btnType,
          btnSize,
          hovered && btnTypeHover
        )}
        style={{ ...styles }}
        {...eventHandlers}
        onClick={onClick}
      >
        {content}
      </div>
    );
  } else {
    return (
      <Link
        className={style9(
          base.root,
          classes.btn,
          disabled && classes.btnDisabled,
          widthFull && classes.btnWidthFull,
          btnType,
          btnSize,
          hovered && btnTypeHover
        )}
        style={{ ...styles }}
        {...eventHandlers}
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
        to={`${urlLink}`}
        disabled
      >
        {content}
      </Link>
    );
  }
};

type PropType = {
  type:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "primary-outline"
    | "secondary-outline"
    | "success-outline"
    | "danger-outline"
    | "warning-outline"
    | "info-outline"
    | "light-outline"
    | "dark-outline";
  size: "small" | "medium" | "large" | "extra-large" | "extra-extra-large";
  disabled?: boolean;
  widthFull?: boolean;

  buttonType: "button" | "link";
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles?: any;
  onClick: () => void;
  urlLink?: string;
};

export default ButtonCommon;
