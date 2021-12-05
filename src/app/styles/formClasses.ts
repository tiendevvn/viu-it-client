import style9 from "style9";

export const { ...form } = style9.create({
  formContainer: {
    width: 980,
    marginRight: "auto",
    marginLeft: "auto",

    "@media": {
      "(max-width: 480px)": {
        width: "95%",
      },
    },
  },
  formPad: {
    paddingTop: 30,
    paddingBottom: 80,

    "@media": {
      "(max-width: 480px)": {
        paddingTop: 20,
        paddingBottom: 40,
      },
    },
  },
  formHeader: {
    paddingTop: 34,
    paddingBottom: 36,
    color: "#1d1d1f",
    fontFamily: "San Francisco Pro",
    fontSize: 40,
    fontWeight: 600,
    lineHeight: 1.1,
    letterSpacing: 0,

    "@media": {
      "(max-width: 480px)": {
        paddingTop: 15,
        paddingBottom: 15,
      },
    },
  },
  formMain: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "0.8em",
  },
  formContent: {
    flex: 1,
    maxWidth: 408,
  },
  formFields: {
    marginTop: 18,
    marginBottom: 1,
  },
  formRadio: {
    flexDirection: "row",
    marginBottom: "1rem",
  },
  formRadioItem: {
    ":first-child": {
      marginRight: "2.5rem",
    },
  },
  formSubmit: {
    paddingBottom: 10,
  },
  formSubmitButton: {
    cursor: "pointer",
    textAlign: "center",
    backgroundColor: "#0071e3",
    color: "#fff",
    fontSize: 17,
    lineHeight: 1.17648,
    fontWeight: 400,
    letterSpacing: "-.022em",
    fontFamily: "San Francisco Pro",
    minWidth: 28,
    padding: "18px 31px",
    boxSizing: "border-box",
    width: "100%",
    borderRadius: "12px",
    display: "inline-block",

    ":hover": {
      backgroundColor: "#0077ed",
    },
  },
  formText: {
    fontSize: 17,
    lineHeight: 1.47059,
    fontWeight: 400,
    letterSpacing: "-.022em",
    fontFamily: "San Francisco Pro",
    marginTop: 7,
  },
  formTextLink: {
    textDecorationLine: "none",
    ":hover": {
      textDecorationLine: "underline",
    },
  },
});
