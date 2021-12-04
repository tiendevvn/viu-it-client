import style9 from "style9";

export const { ...classes } = style9.create({
  wrapper: {
    flexDirection: "row",
    width: "100%",
  },
  mainContainer: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: "flex-start",
  },
  main: {
    width: 990,
    flexGrow: 1,
    flexShrink: 1,
  },
  mainInner: {
    flexGrow: 1,
  },
});
