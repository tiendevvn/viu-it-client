import style9 from "style9";

export const { ...classes } = style9.create({
  loading: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    bottom: 0,
    fontSize: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
