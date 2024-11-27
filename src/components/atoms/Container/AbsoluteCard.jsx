import React from "react";
import styled from "styled-components";

const StyledAbsoluteCard = styled.div`
  width: fit-content;
  position: absolute;
  background-color: white;
  z-index: 1;
  top: 20px;
  right: 20px;
`;

const AbsoluteCard = ({ children }) => {
  return <StyledAbsoluteCard>{children}</StyledAbsoluteCard>;
};

export default AbsoluteCard;
