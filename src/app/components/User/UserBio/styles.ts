import style9 from "style9";

export const { ...classes } = style9.create({
  UserInfoBio: {
    fontSize: 15,
    textOverflow: "ellipsis",
    overflowX: "hidden",
    overflowY: "hidden",
    maxWidth: "100%",
  },
});
