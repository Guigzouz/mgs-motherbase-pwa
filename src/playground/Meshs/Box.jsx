import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Box = ({
  mesh,
  geometry,
  materials,
  animation = (meshRef, state, delta, frame) => {},
}) => {
  const meshRef = useRef();

  useFrame((state, delta, frame) => {
    animation(meshRef, state, delta, frame);
  });
  return (
    <mesh
      {...mesh}
      ref={meshRef}
      rotation={[(Math.PI / 2) * 0.25, 0, 0]}
      scale={1}
    >
      <boxGeometry {...geometry} args={[1, 1, 1]}></boxGeometry>
      <meshStandardMaterial {...materials}></meshStandardMaterial>
    </mesh>
  );
};

export default Box;
