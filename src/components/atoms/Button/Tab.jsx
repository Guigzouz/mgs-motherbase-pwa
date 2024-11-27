import styled from "styled-components";
import React from "react";

const Tab = React.forwardRef(({ children, ...props }, ref) => {
  if (!children) {
    return null;
  }

  if (children) {
    return (
      <StyledTab ref={ref} {...props}>
        {children}
      </StyledTab>
    );
  }
});

const StyledTab = styled.div``;

export default Tab;
