import style9 from "style9";

export const { ...classes } = style9.create({
  logoContainer: {
    maxWidth: "100%",
    paddingTop: 2,
    paddingBottom: 2,
  },
  logoTitle: {
    minWidth: 32,
    cursor: "pointer",
    flexGrow: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  logoLink: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    transitionProperty: "backgroundColor, boxShadow",
    transitionDuration: "0.2s",
    minWidth: 52,
    minHeight: 52,
    cursor: "pointer",
    border: "1px solid rgba(0, 0, 0, 0)",
    borderRadius: "9999px",
    textDecorationLine: "none",
    overflowX: "hidden",
    overflowY: "hidden",
    padding: "5px",
    marginRight: -5,
    marginLeft: -5,

    ":hover": {
      backgroundColor: "rgba(212, 65, 142, 0.1)",
      backgroundImage:
        "linear-gradient(315deg, rgba(212, 65, 142, 0.1) 0%, rgba(6, 82, 197, 0.1) 74%)",
    },
  },
  logoLinkInner: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "rgba(212, 65, 142, 0.1)",
    fontWeight: 700,
    fontSize: 15,
    lineHeight: "20px",
    minWidth: 0,
    overflowWrap: "break-word",
  },
  logoImage: {
    maxWidth: "100%",
    width: "2.5rem",
    height: "2.25rem",
    borderRadius: "9999px",
  },
  logoText: {
    fontSize: 32,
    marginLeft: 8,
    marginTop: 5,
    fontFamily: "Billabong",
    color: "rgba(0,0,0,1.00)",
  },
});
