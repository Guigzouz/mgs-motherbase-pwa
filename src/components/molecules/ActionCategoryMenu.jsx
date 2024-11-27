import { Container, Typography, Button, Icon } from "../atoms";

const ActionCategoryMenu = ({ configs, onMenuChange }) => {
  return (
    <Container.Menu
      style={{
        gap: 15,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {configs.map((config, i) => (
        <Button.Base
          key={i}
          onPress={() => onMenuChange(config.slug)}
          style={{ gap: 30, padding: 15 }}
        >
          <Typography.Paragraph
            style={{ fontFamily: "redensek", fontSize: 20 }}
          >
            {config.displayName}
          </Typography.Paragraph>
          <Icon.Base
            iconName={config.iconName}
            iconSize={config.iconSize}
            iconColor={config.iconColor}
          />
        </Button.Base>
      ))}
    </Container.Menu>
  );
};

export default ActionCategoryMenu;
