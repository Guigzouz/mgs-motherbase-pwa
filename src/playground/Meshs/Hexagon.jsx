import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Hexagon = ({
  mesh,
  geometry,
  materials,
  depth = 1,
  animation = (meshRef, state, delta, frame) => {},
}) => {
  const meshRef = useRef();

  // Create a hexagon shape (2D)
  const createHexagonShape = () => {
    const shape = new THREE.Shape();
    const sides = 6;
    const angle = (2 * Math.PI) / sides;
    const radius = 1;

    shape.moveTo(radius, 0);

    for (let i = 1; i < sides; i++) {
      const x = radius * Math.cos(i * angle);
      const y = radius * Math.sin(i * angle);
      shape.lineTo(x, y);
    }

    shape.closePath();
    return shape;
  };

  const hexagonShape = createHexagonShape();

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
      <extrudeGeometry
        {...geometry}
        args={[hexagonShape, { depth: depth, bevelEnabled: false }]}
      ></extrudeGeometry>
      <meshStandardMaterial {...materials}></meshStandardMaterial>
    </mesh>
  );
};

export default Hexagon;
