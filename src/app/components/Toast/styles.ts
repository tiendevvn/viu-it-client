import style9 from "style9";

export const { ...classes } = style9.create({
  toastContainer: {
    position: "fixed",
    fontSize: 14,
    zIndex: 9999,
    color: "#fff",
  },
  toastItem: {
    position: "relative",
    minHeight: 54,
    minWidth: 250,
    boxSizing: "border-box",
    marginBottom: 16,
    padding: "8px",
    borderRadius: "12px",
    boxShadow: "0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%)",
    display: "flex",
    justifyContent: "space-between",
    maxHeight: 800,
    overflowX: "hidden",
    overflowY: "hidden",
    cursor: "pointer",
    color: "#000",
    opacity: 0.9,
    transitionDuration: ".3s",
    transitionTimingFunction: "ease",
  },
  toastTopRight: {
    top: 16,
    right: 16,
    animationName: style9.keyframes({
      from: {
        transform: "translateX(100%)",
      },
      to: {
        transform: "translateX(0)",
      },
    }),
    animationDuration: ".375s",
  },
  toastCloseButton: {
    color: "#000",
    opacity: "0.3",
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    alignSelf: "flex-start",
    transitionDuration: ".3s",
    transitionTimingFunction: "ease",
  },
  toastBody: {
    margin: "auto 0",
    display: "flex",
    flex: "1 1 auto",
    alignItems: "center",
    padding: "6px",
  },
  toastIcon: {
    marginRight: 8,
    display: "flex",
    alignItems: "center",
  },
});
