import style9 from "style9";

export const { ...classes } = style9.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexGrow: 1,
    width: "100%",
  },
  content: {
    width: "100%",
    maxWidth: 600,
  },
  sidebar: {},
});
