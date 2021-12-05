import style9 from "style9";

export const { ...classes } = style9.create({
  navItemLink: {
    alignItems: "flex-start",
    flexGrow: 1,
    width: "100%",
    cursor: "pointer",
    textDecorationLine: "none",
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
    maxWidth: "100%",
    paddingTop: 12,
    paddingBottom: 12,
  },
  navIcon: {
    color: "rgb(15, 20, 25)",
  },
  navText: {
    flexGrow: 1,
    marginRight: 16,
    marginLeft: 20,
    lineHeight: "24px",
    fontSize: 20,
    fontWeight: 400,
    color: "rgb(15, 20, 25)",

    ":hover": {
      color: "rgba(6, 82, 197)",
    },
  },
  navHover: {
    marginRight: -12,
    width: 3,
    height: "100%",
    backgroundColor: "rgba(212, 65, 142)",
    backgroundImage:
      "linear-gradient(315deg, rgba(212, 65, 142) 0%, rgba(6, 82, 197) 74%)",
  },
  navHoverCommon: {
    color: "rgba(6, 82, 197)",
  },
  navActive: {
    fontWeight: 600,
    color: "rgba(6, 82, 197)",
  },
});
