import style9 from "style9";

export const { ...classes } = style9.create({
  infoCommonContainer: {
    flexDirection: "row",
    flex: "1 1 0%",
  },
  infoCommonContainerMarginRight: {
    marginRight: 12,
  },
  infoCommon: {
    display: "inline-flex",
    alignItems: "center",
    maxWidth: "100%",
  },
  infoCommonIcon: {
    marginRight: 8,
  },
  infoCommonContent: {
    fontSize: 15,
  },
  infoCommonText: {
    color: "#050505",
    fontWeight: 500,
  },
  infoCommonTextLink: {
    color: "rgba(6, 82, 197)",
    cursor: "pointer",
  },
  infoCommonTextLinkUnderline: {
    textDecorationLine: "underline",
  },
});
