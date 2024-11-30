import React from "react";
import styled from "styled-components";
import { Button, Typography } from "../components/atoms";
import { Details, Selector } from "../components/organisms";
import { CodenameDisplay, StyledView } from "../components/nanites";

import { useScore } from "../providers/ScoreProvider";
import { useCategoryMenu } from "../providers/CategoryMenuProvider";
import { ActionCategoryMenu } from "../components/molecules";
import MotherBase from "../components/pages/MotherBase";

const MainStyledView = styled.div`
  height: 100%;
  padding: 20px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Home = () => {
  const { scoreCount } = useScore();
  const { handleMenuChange, motherBaseProps } = useCategoryMenu();

  return (
    <MainStyledView>
      <StyledView>
        {/* <Container.MovingDisplay style={{ overflow: "hidden" }}>

        </Container.MovingDisplay> */}
        <CodenameDisplay
          style={{
            fontSize: 36,
            paddingHorizontal: 25,
            fontFamily: "redensek",
            whiteSpace: "nowrap",
          }}
        />
        <Typography.Title
          style={{
            fontFamily: "redensek",
            fontSize: 24,
          }}
        >
          GMP Count: {scoreCount}
        </Typography.Title>
      </StyledView>

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
            style={{
              height: 100,
              border: "red",
            }}
          />
        </Button.Invisible>
        <ActionCategoryMenu handleMenuChange={handleMenuChange} />
        <Details.CategoryDetails
          style={{ width: "100%" }}
          slug={motherBaseProps.slug}
        />
      </StyledContainer>
    </MainStyledView>
  );
};

export default Home;
