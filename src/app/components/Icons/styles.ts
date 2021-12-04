import style9 from "style9";

export const { ...classes } = style9.create({
  iconSpin: {
    animationName: style9.keyframes({
      to: { transform: "rotate(1turn)" },
    }),
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationDelay: "0s",
    animationIterationCount: "infinite",
    animationDirection: "normal",
    animationFillMode: "none",
    animationPlayState: "running",
  },
  iconBlue: {
    color: "#0071e3",
  },
  iconOpacityMin: {
    opacity: 0.3,
  },
  iconOpacityMax: {
    opacity: 0.7,
  },
});
