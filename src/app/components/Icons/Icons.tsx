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

export const SuccessToastIcon: React.FC = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="check-circle"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
  </svg>
);

export const ErrorToastIcon: React.FC = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="close-circle"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
  </svg>
);

export const CloseToastIcon: React.FC = () => (
  <svg aria-hidden="true" viewBox="0 0 14 16" width="14" height="16">
    <path
      fillRule="evenodd"
      d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    ></path>
  </svg>
);
