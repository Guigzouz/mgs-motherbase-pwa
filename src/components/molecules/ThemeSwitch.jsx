// ThemeSwitch.jsx
import React from "react";
import { Container, Button, Icon } from "../atoms";

const ThemeSwitch = ({ onClick, iconName, iconSize = 18, ...props }) => {
  return (
    <Container.Menu style={{ ...props }}>
      <Button.Base onPress={onClick}>
        <Icon.Base iconName={iconName} iconSize={iconSize} />
      </Button.Base>
    </Container.Menu>
  );
};

export default ThemeSwitch;
