import React from "react";
import style9 from "style9";

// components
import { BackIcon, CloseIcon, CameraIcon } from "@/app/components/Icons";

// hooks
import { useHover } from "@/core/hooks/useHover";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const ButtonIcon: React.FC<PropType> = ({
  type,
  icon,
  size,
  disabled,
  onClick,
}) => {
  const [hovered, eventHandlers] = useHover();

  let btnIcon;
  let btnIconType;
  let btnIconTypeHover;
  let btnIconSize;

  switch (type) {
    case "primary-viu":
      btnIconType = classes.btnIconPrimaryVIU;
      btnIconTypeHover = classes.btnIconPrimaryVIUHover;
      break;
    case "light-viu":
      btnIconType = classes.btnIconLightVIU;
      btnIconTypeHover = classes.btnIconLightVIUHover;
      break;

    default:
      break;
  }

  switch (icon) {
    case "back":
      btnIcon = <BackIcon size={size} />;
      break;
    case "close":
      btnIcon = <CloseIcon size={size} />;
      break;
    case "camera":
      btnIcon = <CameraIcon size={size} />;
      break;

    default:
      break;
  }

  switch (size) {
    case "small":
      btnIconSize = classes.btnIconSmall;
      break;
    case "medium":
      btnIconSize = classes.btnIconMedium;
      break;
    case "large":
      btnIconSize = classes.btnIconLarge;
      break;
    case "extra-large":
      btnIconSize = classes.btnIconExtraLarge;
      break;
    case "extra-extra-large":
      btnIconSize = classes.btnIconExtraExtraLarge;
      break;

    default:
      break;
  }

  return (
    <div
      className={style9(
        base.root,
        classes.btnIcon,
        disabled && classes.btnIconDisabled,
        btnIconType,
        btnIconSize,
        hovered && btnIconTypeHover
      )}
      {...eventHandlers}
      onClick={onClick}
    >
      <div className={style9(base.rootText, classes.btnIconInner)}>
        {btnIcon}
      </div>
    </div>
  );
};

type PropType = {
  type: "primary-viu" | "light-viu";
  icon: "back" | "close" | "camera";
  size: "small" | "medium" | "large" | "extra-large" | "extra-extra-large";
  disabled?: boolean;
  onClick: () => void;
};

export default ButtonIcon;
