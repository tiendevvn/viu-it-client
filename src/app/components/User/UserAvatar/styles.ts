import style9 from "style9";

export const { ...classes } = style9.create({
  avatarContainer: {
    flexGrow: 0,
    justifyContent: "center",
  },
  avatarCover: {
    flexShrink: 1,
    maxWidth: "100%",
  },
  avatarLink: {
    backgroundColor: "rgba(255,255,255,1.00)",
    borderRadius: "9999px",
    display: "block",
    overflowX: "hidden",
    overflowY: "hidden",
    width: "100%",
    cursor: "pointer",
  },
  avatarRounded: {
    borderRadius: "9999px",
    display: "block",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  avatarBox: {
    paddingBottom: "100%",
    width: "100%",
    display: "block",
  },
  avatarCoverImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
  },
  avatarImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  avatarHover: {
    boxShadow: "rgb(0 0 0 / 2%) 0px 0px 2px inset",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,

    ":hover": {
      backgroundColor: "rgba(26,26,26,0.15)",
    },
  },
});
