import { classes } from "./styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const iconSizeViu = (size: string) => {
  let iconSize;
  switch (size) {
    case "medium":
      iconSize = classes.iconMedium;
      break;

    default:
      break;
  }

  return iconSize;
};

export type IconSizeType = {
  size: "small" | "medium" | "large" | "extra-large" | "extra-extra-large";
};
