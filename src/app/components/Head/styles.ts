import style9 from "style9";

export const { ...classes } = style9.create({
  headContainer: {
    top: -0.5,
    position: "sticky",
    zIndex: 3,
  },
  head: {
    zIndex: 2,
    cursor: "pointer",
  },
  headHeight: {
    height: 53,
  },
  headBorder: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "rgb(239, 243, 244)",
    backgroundColor: "rgba(255,255,255,1.00)",
  },
  headMain: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 1000,
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    paddingRight: 16,
    paddingLeft: 16,
  },
  headContent: {
    height: "100%",
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
  },
  headContentInner: {
    alignItems: "flex-start",
  },
  headTitle: {
    fontSize: 20,
    lineHeight: "24px",
    fontWeight: 700,
    color: "rgb(15, 20, 25)",
  },
  headText: {
    fontSize: 13,
    lineHeight: "16px",
    fontWeight: 400,
    color: "rgb(83, 100, 113)",
  },
});
