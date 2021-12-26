import style9 from "style9";

export const { ...classes } = style9.create({
  editProfileCoverPhoto: {
    maxHeight: 200,
    justifyContent: "center",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  editProfileContainer: {
    display: "flex",
    flexDirection: "column",
    border: "2px solid rgba(0, 0, 0, 0)",
  },
  editProfileBox: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.75,
  },
  editProfileInput: {
    width: 0.1,
    height: 0.1,
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    overflowX: "hidden",
    overflowY: "hidden",
  },
  editProfileProfilePicture: {
    marginTop: 28,
    marginLeft: 22,
    marginBottom: 12,
  },

  editProfileProfilePictureBox: {
    marginTop: "-14%",
    width: "25%",
    height: "8rem",
    maxWidth: "8rem",
    marginLeft: -4,
  },
  editProfilePictureOverlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    borderRadius: "9999px",
    backgroundColor: "rgba(0, 0, 0, 0.3);",
  },
  editProfileForm: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  editProfileLabel: {
    color: "rgb(83, 100, 113)",
    fontSize: 15,
  },
});
