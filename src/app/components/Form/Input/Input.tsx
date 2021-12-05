import React, { useState } from "react";
import style9 from "style9";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const Input: React.FC<PropType> = ({ label, type, name, value, onChange }) => {
  const [isFocus, setFocus] = useState(false);

  const onFocus = () => setFocus(true);

  const onBlur = () => setFocus(false);

  return (
    <div className={style9(base.root)}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        className={style9(classes.input)}
      />
      <span
        className={style9(
          base.root,
          classes.label,
          (isFocus || value.length !== 0) && classes.focused
        )}
      >
        {label}
      </span>
    </div>
  );
};

type PropType = {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default Input;
