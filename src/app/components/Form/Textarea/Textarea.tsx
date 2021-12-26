import React, { useState } from "react";
import style9 from "style9";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const Textarea: React.FC<PropType> = ({
  round,
  maxLength,
  label,
  name,
  value,
  onChange,
}) => {
  const [isFocus, setFocus] = useState(false);

  const [wordCount, setWordCount] = useState(value);

  const onFocus = () => setFocus(true);

  const onBlur = () => setFocus(false);

  let textareaRound;

  switch (round) {
    case "small":
      textareaRound = classes.textareaRoundSmall;
      break;
    case "medium":
      textareaRound = classes.textareaRoundMedium;
      break;
    case "large":
      textareaRound = classes.textareaRoundLarge;
      break;

    default:
      break;
  }
  return (
    <div className={style9(base.root)}>
      <textarea
        id={name}
        name={name}
        value={value}
        maxLength={maxLength || 160}
        onChange={e => {
          onChange(e);
          setWordCount(e.currentTarget.value);
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete="off"
        className={style9(classes.textarea, textareaRound)}
      />
      <div
        className={style9(
          base.rootText,
          base.rootTextEllipsis,
          classes.wordCount
        )}
      >
        {wordCount?.length} / 160
      </div>
      <label
        htmlFor={name}
        className={style9(
          base.root,
          classes.label,
          (isFocus || value.length !== 0) && classes.focused
        )}
      >
        {label}
      </label>
    </div>
  );
};

type PropType = {
  round: "small" | "medium" | "large";
  maxLength?: number;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default Textarea;
