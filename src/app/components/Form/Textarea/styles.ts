import style9 from "style9";

export const { ...classes } = style9.create({
  textarea: {
    fontSize: 17,
    lineHeight: 1.23536,
    fontWeight: 400,
    letterSpacing: "-.022em",
    fontFamily: "San Francisco Pro",
    width: "100%",
    height: 96,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#d2d2d7",
    boxSizing: "border-box",
    marginBottom: "1rem",
    padding: "1.5882rem .94118rem 0",
    color: "#1d1d1f",
    backgroundColor: "hsla(0,0%,100%,.8)",
    textOverflow: "ellipsis",
    resize: "none",

    ":focus": {
      borderColor: "#0071e3",
      boxShadow: "0 0 0 4px rgb(0 125 250 / 60%)",
      outline: "none",
    },
  },
  label: {
    width: "100%",
    position: "absolute",
    transitionTimingFunction: "ease-in",
    transitionDuration: ".125s",
    top: "1.05882rem",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    overflowY: "hidden",
    maxWidth: "calc(100% - 32px)",
    left: "1rem",
    fontSize: 17,
    lineHeight: "1.23536",
    fontWeight: 400,
    letterSpacing: "-.022em",
    fontFamily: "San Francisco Pro",
    color: "#86868b",
    backgroundColor: "#fff",
  },
  focused: {
    fontSize: 13,
    lineHeight: "1.33337",
    fontWeight: 400,
    letterSpacing: "-.01em",
    fontFamily: "San Francisco Pro",
    top: 1,
    paddingTop: ".48824rem",
    color: "#6e6e73",
  },
  wordCount: {
    position: "absolute",
    top: 9,
    right: 20,
    zIndex: 20,
    fontSize: 13,
    color: "#6e6e73",
  },
  textareaRoundSmall: {
    borderRadius: "4px",
  },
  textareaRoundMedium: {
    borderRadius: "8px",
  },
  textareaRoundLarge: {
    borderRadius: "12px",
  },
});
