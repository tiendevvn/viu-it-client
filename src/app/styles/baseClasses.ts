import style9 from "style9";

export const { ...base } = style9.create({
  root: {
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flexBasis: "auto",
    alignItems: "stretch",
    flexShrink: 0,
    minWidth: 0,
    minHeight: 0,
  },
  rootText: {
    display: "inline",
    boxSizing: "border-box",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    fontFamily: "San Francisco Pro",
    fontSize: 14,
    color: "rgba(0,0,0,1.00)",
    margin: 0,
    padding: 0,
  },
  rootTextEllipsis: {
    maxWidth: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflowWrap: "break-word",
    minWidth: 0,
  },
});
