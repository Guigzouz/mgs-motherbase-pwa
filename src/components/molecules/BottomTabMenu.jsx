import { Container, Typography, Button, Icon } from "../atoms";
import { Link } from "react-router-dom"; // Use Link for navigation

const BottomTabMenu = ({ configs, onMenuChange = (arg) => {} }) => {
  return (
    <Container.Menu
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor: "#fff9c4",
      }}
    >
      {configs.map((config, i) => {
        return (
          <Link
            to={`/${config.slug}`}
            key={i}
            style={{ textDecoration: "none" }}
          >
            <Button.Tab
              style={{ display: "flex", padding: 5, alignItems: "center" }}
              onClick={() => onMenuChange(config.slug)} // Optional: trigger the onMenuChange callback
            >
              <Icon.Base
                iconName={config.iconName}
                iconSize={config.iconSize}
                iconColor={config.iconColor}
              />
            </Button.Tab>
          </Link>
        );
      })}
    </Container.Menu>
  );
};

export default BottomTabMenu;
