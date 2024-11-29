import React from "react";
import { Lights, Meshs, Scene } from "../../playground";
import { useCategoryMenu } from "../../providers/CategoryMenuProvider";

const MotherBase = (props) => {
  const { motherBaseProps } = useCategoryMenu();
  const { style } = props;

  return (
    <Scene
      style={{ height: style.height }}
      camera={{ position: [0, 3, 0], fov: 50 }}
    >
      {/* <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={1}
        minPolarAngle={1}
      /> */}
      <Lights.Ambient position={[0, -2, 5]} />

      {/* 3D Hexagon mesh with animation */}
      <Meshs.Hexagon
        animation={(meshRef, state, delta, frame) => {
          meshRef.current.rotation.z += 0.5 * delta;
        }}
        mesh={{ position: [0, 0, 0] }}
        materials={{ color: motherBaseProps.color }}
        depth={0.8}
      />
    </Scene>
  );
};

export default MotherBase;
