import React, { useState } from "react";
import style9 from "style9";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const Input: React.FC<PropType> = ({
  round,
  label,
  type,
  name,
  value,
  onChange,
}) => {
  const [isFocus, setFocus] = useState(false);

  const onFocus = () => setFocus(true);

  const onBlur = () => setFocus(false);

  let inputRound;

  switch (round) {
    case "small":
      inputRound = classes.inputRoundSmall;
      break;
    case "medium":
      inputRound = classes.inputRoundMedium;
      break;
    case "large":
      inputRound = classes.inputRoundLarge;
      break;

    default:
      break;
  }

  return (
    <div className={style9(base.root)}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        className={style9(classes.input, inputRound)}
      />
      <label
        htmlFor={name}
        className={style9(
          base.root,
          classes.label,
          (isFocus || value.length !== 0 || type === "date") && classes.focused
        )}
      >
        {label}
      </label>
    </div>
  );
};

type PropType = {
  round: "small" | "medium" | "large";
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default Input;
