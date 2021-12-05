import style9 from "style9";

export const { ...classes } = style9.create({
  searchForm: {
    width: "40%",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    overflowX: "hidden",
    overflowY: "hidden",
    transitionDuration: ".35s",
    transitionProperty: "width",
    transitionTimingFunction: "ease-in-out",
    border: "1px solid rgba(0, 0, 0, 0)",
  },
  searchLabel: {
    flexDirection: "row",
  },
  searchIcon: {
    justifyContent: "center",
    paddingLeft: 12,
  },
  searchInputCover: {
    flexGrow: 1,
    flexShrink: 1,
  },
  searchInput: {
    width: "100%",
    maxWidth: "100%",
    padding: "12px",
    fontSize: 16,
    outline: "none",
    border: 0,
    boxSizing: "border-box",
    backgroundColor: "#f5f5f5",
  },
  searchFocus: {
    width: "100%",
    color: "rgba(6, 82, 197)",
    border: "1px solid rgba(6, 82, 197, 1)",
    backgroundColor: "#fff",
  },
  searchInputFocus: {
    backgroundColor: "#fff",
  },
});
