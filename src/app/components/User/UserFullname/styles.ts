import style9 from "style9";

export const { ...classes } = style9.create({
  fullnameContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
  },
  fullnameText: {
    lineHeight: "24px",
    fontWeight: 700,
    fontSize: 20,
  },
});
