import * as Icons from "react-icons/fa";

const Base = ({ iconName, iconSize = 18, iconColor = "#000000" }) => {
  const FaIcon = Icons[iconName];
  if (!FaIcon) return <p>Icon not found!</p>;

  return <FaIcon size={iconSize} color={iconColor} />;
};

export default Base;
