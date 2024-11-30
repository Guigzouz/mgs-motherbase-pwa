import React from "react";
import styled from "styled-components";

const StyledAbsoluteCard = styled.div`
  position: absolute;
  display: flex;
  background-color: white;
  z-index: 1;
  border-radius: 50px;
  top: 15px;
  right: 15px;
`;

const AbsoluteCard = ({ children }) => {
  return <StyledAbsoluteCard>{children}</StyledAbsoluteCard>;
};

export default AbsoluteCard;
