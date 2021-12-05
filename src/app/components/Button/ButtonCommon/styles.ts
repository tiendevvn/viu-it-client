import style9 from "style9";

export const { ...classes } = style9.create({
  button: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    minWidth: 36,
    minHeight: 36,
    paddingRight: 16,
    paddingLeft: 16,
    border: "1px solid rgb(207, 217, 222)",
    borderRadius: "9999px",
    cursor: "pointer",
    transitionDuration: "0.2s",
    transitionProperty: "backgroundColor, boxShadow",
  },
  buttonHover: {
    backgroundColor: "rgba(29, 155, 240, 0.1)",
    borderColor: "rgba(29, 155, 240, 1)",
  },
  buttonText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    textAlign: "center",
    fontSize: 15,
    lineHeight: "20px",
  },
  buttonTextHover: {
    color: "rgba(29, 155, 240, 1)",
  },
});
