// ThemeSwitch.jsx
import React from "react";
import { Container, Button, Icon } from "../atoms";

const ThemeSwitch = ({ onClick, iconName, iconSize = 18, ...props }) => {
  return (
    <Container.AbsoluteCard style={{ ...props }}>
      <Button.Invisible
        style={{ padding: 5, cursor: "pointer", display: "flex" }}
        onPress={onClick}
      >
        <Icon.Base iconName={iconName} iconSize={iconSize} />
      </Button.Invisible>
    </Container.AbsoluteCard>
  );
};

export default ThemeSwitch;
