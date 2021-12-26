import style9 from "style9";

export const { ...classes } = style9.create({
  btnIcon: {
    cursor: "pointer",
    borderRadius: "9999px",
    transitionDuration: "0.2s",
    transitionProperty: "backgroundColor, boxShadow",
  },
  btnIconInner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    fontWeight: 700,
    fontSize: 15,
    lineHeight: "20px",
    textAlign: "center",
  },
  btnIconDisabled: {
    pointerEvents: "none",
    backgroundColor: "rgba(239, 239, 239, 0.3)",
    color: "rgba(16, 16, 16, 0.3)",
    borderColor: "rgba(118, 118, 118, 0.3)",
  },
  btnIconSmall: {
    minWidth: 32,
    minHeight: 32,
  },
  btnIconMedium: {
    minWidth: 36,
    minHeight: 36,
  },
  btnIconLarge: {},
  btnIconExtraLarge: {},
  btnIconExtraExtraLarge: {},
  btnIconPrimaryVIU: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  btnIconPrimaryVIUHover: {
    backgroundColor: "rgba(29, 155, 240, 0.1)",
    color: "rgb(29, 155, 240)",
  },
  btnIconLightVIU: {
    color: "rgb(255, 255, 255)",
  },
  btnIconLightVIUHover: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
