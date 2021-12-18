import style9 from "style9";

export const { ...classes } = style9.create({
  followMarginRight: {
    marginRight: 20,
  },
  follow: {
    maxWidth: "100%",
  },
  followLink: {
    textDecorationLine: "none",
    color: "rgb(15, 20, 25)",
    fontSize: 15,
  },
  followLinkHover: {
    textDecorationLine: "underline",
  },
  followNum: {
    fontWeight: 700,
  },
});
