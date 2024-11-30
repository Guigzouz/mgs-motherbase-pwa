import styled from "styled-components";
import React from "react";

const Invisible = React.forwardRef(({ children, ...props }, ref) => {
  // Return null if there are no children
  if (!children) {
    return null;
  }

  return (
    <StyledInvisible ref={ref} onClick={props.onPress} {...props}>
      {children}
    </StyledInvisible>
  );
});

// Styled component for the button
const StyledInvisible = styled.div`
  font-family: "redensek";
  cursor: pointer;
  border-radius: 25px;
`;

export default Invisible;
