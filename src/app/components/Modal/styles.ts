import style9 from "style9";

export const { ...classes } = style9.create({
  modalContainer: {
    width: "100vw",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
  },
  modalOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  modal: {
    maxWidth: "80vw",
    maxHeight: "90vh",
    flexShrink: 1,
    borderRadius: "16px",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  modalInner: {
    flexShrink: 1,
    flexGrow: 1,
    borderRadius: "16px",
    backgroundColor: "rgba(255,255,255,1.00)",
  },
  modalWidth: {
    flexShrink: 1,
    flexGrow: 1,
    maxWidth: 600,
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  modalOverflow: {
    flexShrink: 1,
    flexGrow: 1,
    overflowX: "auto",
    overflowY: "auto",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  modalHead: {
    position: "sticky",
    top: 0,
    zIndex: 2,
  },
  modalHeadHeight: {
    height: 53,
    zIndex: 2,
  },
  modalHeadBoxContainer: {
    height: 53,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)",
  },
  modalHeadBox: {
    maxWidth: 600,
    width: "100%",
    height: 53,
    paddingRight: 16,
    paddingLeft: 16,
    marginRight: "auto",
    marginLeft: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  modalHeadTitleCover: {
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: "center",
    height: "100%",
  },
  modalHeadTitleBox: {
    alignItems: "flex-start",
  },
  modalHeadTitle: {
    lineHeight: "24px",
    fontSize: 20,
    fontWeight: 700,
  },

  modalBody: {
    overflowX: "hidden",
    overflowY: "hidden",
    paddingBottom: 64,
  },
});
