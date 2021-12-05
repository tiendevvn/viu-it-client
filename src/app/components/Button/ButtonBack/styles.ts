import style9 from "style9";

export const { ...classes } = style9.create({
  buttonBackContainer: {
    minWidth: 56,
    minHeight: 32,
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  buttonBack: {
    minWidth: 36,
    minHeight: 36,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: "9999px",
    borderColor: "rgba(0, 0, 0, 0)",
    borderWidth: "1px",
    borderStyle: "solid",
    transitionDuration: "0.2s",
    transitionProperty: "backgroundColor, boxShadow",
  },
  buttonBackInner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    fontWeight: 700,
    fontSize: 15,
    lineHeight: "20px",
    textAlign: "center",
  },
  buttonBackHover: {
    backgroundColor: "rgba(29, 155, 240, 0.1)",
    color: "rgb(29, 155, 240)",
  },
});
