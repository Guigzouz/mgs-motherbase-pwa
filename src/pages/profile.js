import React from "react";
import styled from "styled-components";
import { Typography } from "../components/atoms";
import { Form } from "../components/organisms";
import { CodenameDisplay, StyledView } from "../components/nanites";
import { useScore } from "../providers/ScoreProvider";

const Profile = () => {
  const { scoreCount } = useScore();

  const MainStyledView = styled.div`
    justify-content: space-between;
    height: 100%;
    padding: 20px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  `;

  return (
    <MainStyledView>
      <StyledView>
        {/* <Container.MovingDisplay style={{ overflow: "hidden" }}>
        </Container.MovingDisplay> */}
        <CodenameDisplay
          style={{
            fontSize: 36,
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
        <Form.AuthForm />
      </StyledView>
    </MainStyledView>
  );
};
export default Profile;
