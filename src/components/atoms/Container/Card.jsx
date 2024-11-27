import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: fit-content;
  border: solid;
  background-color: white;
  z-index: 1;
  top: 20px;
  right: 20px;
`;

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
