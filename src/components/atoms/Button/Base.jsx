import React from "react";
import styled from "styled-components";

const Base = React.forwardRef(({ children, ...props }, ref) => {
  // Return null if there are no children
  if (!children) {
    return null;
  }

  return (
    <StyledBase ref={ref} onClick={props.onPress} {...props}>
      {children}
    </StyledBase>
  );
});

// Styled component for the button
const StyledBase = styled.button`
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  flex-direction: row;
  align-items: center;
  border: solid;
  font-family: "redensek";
  width: 250px;
`;

export default Base;
