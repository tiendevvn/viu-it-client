import style9 from "style9";

export const { ...classes } = style9.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: "12px 17px",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: 17,
    color: "#fff",
    backgroundColor: "rgba(212, 65, 142, 1)",
    backgroundImage:
      "linear-gradient(315deg, rgba(212, 65, 142, 1) 0%, rgba(6, 82, 197, 1) 74%)",

    ":hover": {
      backgroundColor: "rgba(212, 65, 142, 0.7)",
      backgroundImage:
        "linear-gradient(315deg, rgba(212, 65, 142, 0.7) 0%, rgba(6, 82, 197, 0.7) 74%)",
    },
  },
  btnIcon: {
    marginRight: 8,
  },
});
