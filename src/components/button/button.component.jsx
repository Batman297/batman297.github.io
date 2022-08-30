import { BaseButton, LinkButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  link: "link",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.link]: LinkButton,
  }[buttonType]);

const Button = ({ buttonType, children }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton>{children}</CustomButton>;
};

export default Button;
