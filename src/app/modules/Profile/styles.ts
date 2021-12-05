import style9 from "style9";

export const { ...classes } = style9.create({
  profileContainer: {
    minHeight: "100vh",
    borderRight: "1px solid rgb(239, 243, 244)",
  },
  profileContent: {
    flexGrow: 1,
  },
  profileContentMain: {
    maxWidth: 600,
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  profileInfo: {
    marginBottom: 16,
    paddingTop: 12,
    paddingRight: 16,
    paddingLeft: 16,
  },
  profileInfoOne: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  profileInfoTwo: {
    marginTop: 8,
    marginBottom: 8,
  },
  profileInfoTwoInner: {
    flexShrink: 1,
    maxWidth: "100%",
  },
  profileButton: {
    maxWidth: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  profileInfoBio: {
    display: "block",
    marginBottom: 12,
  },
});
