import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Container } from "../components/atoms";
import { BottomTabMenu, ThemeSwitch } from "../components/molecules";
import { Selector } from "../components/organisms";
import { CodenameDisplay, StyledView } from "../components/nanites";

import { fetchScoreCount } from "../store/counterSlice";
import { useScore } from "../providers/ScoreProvider";

const MainStyledView = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Home = () => {
  const { scoreCount } = useScore();

  return (
    <MainStyledView>
      <StyledView>
        {/* <Container.MovingDisplay style={{ overflow: "hidden" }}>

        </Container.MovingDisplay> */}
        <CodenameDisplay
          style={{
            fontSize: 36,
            paddingHorizontal: 25,
            paddingTop: 25,
            paddingBottom: 10,
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

      <StyledView>
        <Selector.CategorySelectorAndMotherBase />
      </StyledView>
    </MainStyledView>
  );
};

export default Home;
