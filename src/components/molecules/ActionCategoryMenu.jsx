import { Container, Typography, Button, Icon } from "../atoms";
import { useCategoryMenu } from "../../providers/CategoryMenuProvider";

const ActionCategoryMenu = ({ handleMenuChange }) => {
  const { configs } = useCategoryMenu();

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
          onPress={() => handleMenuChange(config.slug)}
          style={{ gap: 30, padding: 15, cursor: "pointer" }}
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
