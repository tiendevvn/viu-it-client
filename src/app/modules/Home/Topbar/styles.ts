import style9 from "style9";

export const { ...classes } = style9.create({
  topbarContainer: {
    flexDirection: "row",
  },
  topbarCol: {
    flexGrow: 1,
    paddingRight: 12,
    paddingLeft: 12,
  },
  topbarColSearch: {
    width: "100%",
    maxWidth: 600,
  },
  topbarRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  topbarSearch: {
    marginTop: 12,
    marginBottom: 12,
  },
  topbarIcon: {
    padding: "12px",
    borderRadius: "9999px",
    marginRight: 12,
    cursor: "pointer",

    ":hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  topbarButton: {
    marginLeft: 12,
  },
});
