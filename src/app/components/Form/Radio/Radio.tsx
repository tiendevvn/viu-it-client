import React from "react";
import style9 from "style9";

// styles
import { classes } from "./styles";

const Radio: React.FC<PropType> = ({ label, name, value, defaultChecked }) => {
  return (
    <label htmlFor={label} className={style9(classes.label)}>
      <input
        type="radio"
        name={name}
        value={value}
        id={label}
        defaultChecked={defaultChecked}
        className={style9(classes.radio)}
      />
      <span className={style9(classes.labelName)}>{label}</span>
    </label>
  );
};

type PropType = {
  label: string;
  name: string;
  value: string;
  defaultChecked?: boolean;
};

export default Radio;
