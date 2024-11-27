import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const MovingDisplay = ({ children, ...props }) => {
  const screenWidth = 80;

  // Define the animation using react-spring's useSpring hook
  const { translateX } = useSpring({
    from: { translateX: 0 },
    to: { translateX: -screenWidth },
    reset: true,
    reverse: (translateX) => translateX === 0, // Start from the end when it reaches the start
    config: { duration: 8000 },
    onRest: () => {
      // Loop the animation by restarting after it finishes
      setTimeout(() => {
        translateX.setValue(0);
      }, 2000);
    },
  });

  return (
    <div style={{ ...props.style }}>
      <animated.div
        style={{
          ...styles.movingText,
          transform: translateX.to((x) => `translateX(${x}px)`),
        }}
      >
        {children}
      </animated.div>
    </div>
  );
};

const styles = {
  movingText: {
    fontSize: "24px", // Adjust the size of the text
    whiteSpace: "nowrap", // Keep the text on a single line
  },
};

export default MovingDisplay;
