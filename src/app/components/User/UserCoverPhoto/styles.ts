import style9 from "style9";

export const { ...classes } = style9.create({
  coverPhotoContainer: {
    backgroundColor: "rgb(207, 217, 222)",
  },
  coverPhotoCover: {
    display: "block",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  coverPhotoPadWidth: {
    paddingBottom: "33.3333%",
    width: "100%",
    display: "block",
  },
  coverPhotoBox: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
  },
  coverPhotoBoxInner: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    flexBasis: "auto",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  coverPhoto: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: -1,
  },
});
