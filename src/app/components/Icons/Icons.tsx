import React from "react";
import style9 from "style9";

// styles
import { classes } from "./styles";

export const LoadingIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    className={style9(classes.iconSpin, classes.iconBlue)}
    fill="none"
    viewBox="0 0 66 66"
    width="1em"
    height="1em"
  >
    <circle
      cx="33"
      cy="33"
      fill="none"
      r="28"
      stroke="currentColor"
      strokeWidth="10"
      className={style9(classes.iconOpacityMin)}
    ></circle>
    <circle
      cx="33"
      cy="33"
      fill="none"
      r="28"
      stroke="currentColor"
      strokeDasharray="40, 134"
      strokeDashoffset="325"
      strokeLinecap="round"
      strokeWidth="10"
      className={style9(classes.iconOpacityMax)}
    ></circle>
  </svg>
);
