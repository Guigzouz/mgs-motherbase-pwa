// Organism: CategorySelectorAndMotherBase.js
import React, { useState } from "react";

import MotherBase from "../../pages/MotherBase";
import { ActionCategoryMenu } from "../../molecules";
import { Button, Typography } from "../../atoms";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const CategorySelectorAndMotherBase = () => {
  const [menu, setMenu] = useState("human-resources");
  const [motherBaseProps, setMotherBaseProps] = useState({
    color: "orange",
    slug: "default-slug",
    displayTitle: "R&D",
  });

  const configs = [
    {
      displayName: "Human Resources",
      slug: "human-resources",
      iconName: "FaRegUser",
      fontFamily: "redensek",
    },
    {
      displayName: "R&D",
      slug: "reasearch-and-devlopment",
      iconName: "FaWrench",
    },
    {
      displayName: "External OPS",
      slug: "external-operations",
      iconName: "FaBoxes",
    },
  ];

  const handleMenuChange = (arg) => {
    setMenu(arg);
    switch (arg) {
      case "human-resources":
        setMotherBaseProps({
          color: "#00C000",
          slug: "human-resources-slug",
          displayTitle: "Human Resources",
        });
        break;
      case "reasearch-and-devlopment":
        setMotherBaseProps({
          color: "orange",
          slug: "research-and-development-slug",
          displayTitle: "R&D",
        });
        break;
      case "external-operations":
        setMotherBaseProps({
          color: "red",
          slug: "external-ops-slug",
          displayTitle: "External Ops.",
        });
        break;
      default:
        setMotherBaseProps({
          color: "orange",
          slug: "default-slug",
          displayTitle: "R&D",
        });
        break;
    }
  };

  return (
    <StyledContainer>
      <Button.Invisible>
        <Typography.Title
          style={{
            fontSize: 32,
            paddingHorizontal: 25,
            paddingTop: 25,
            paddingBottom: 10,
            fontFamily: "redensek",
            whiteSpace: "nowrap",
          }}
        >
          {motherBaseProps.displayTitle}
        </Typography.Title>
        <MotherBase
          style={{ color: motherBaseProps.color, height: 100, border: "red" }}
          slug={motherBaseProps.slug}
        />
      </Button.Invisible>
      <ActionCategoryMenu configs={configs} onMenuChange={handleMenuChange} />
    </StyledContainer>
  );
};

export default CategorySelectorAndMotherBase;
