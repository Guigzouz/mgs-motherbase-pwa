import { StyledView } from "../../nanites";

const Menu = ({ children, ...props }) => {
  return <StyledView {...props}>{children}</StyledView>;
};

export default Menu;
