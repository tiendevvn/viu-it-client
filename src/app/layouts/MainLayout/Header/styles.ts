import style9 from "style9";

export const { ...classes } = style9.create({
  headerContainer: {
    flexGrow: 1,
    alignItems: "flex-end",
  },
  headerWidth: {
    width: 275,
  },
  headerFixed: {
    position: "fixed",
    top: 0,
    height: "100%",
  },
  header: {
    overflowY: "auto",
    alignItems: "flex-start",
    height: "100%",
    paddingRight: 12,
    paddingLeft: 12,
    borderRight: "1px solid rgb(239, 243, 244)",
  },
});
