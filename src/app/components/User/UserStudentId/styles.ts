import style9 from "style9";

export const { ...classes } = style9.create({
  studentIdContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
  },
  studentIdText: {
    lineHeight: "20px",
    fontWeight: 400,
    fontSize: 15,
    color: "rgb(83, 100, 113)",
  },
});
