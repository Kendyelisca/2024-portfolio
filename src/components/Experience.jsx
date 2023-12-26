import React, { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { TorusKnotGeometry, ShaderMaterial } from "three";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";

const RotatingObject = ({ geometry, material, rotationSpeed }) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += rotationSpeed;
    meshRef.current.rotation.y += rotationSpeed;
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
};

export const Experience = (props) => {
  const { section, isMenu } = props;

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, isMenu ? -1 : 0);
    animate(cameraLookAtX, isMenu ? 1 : 0);
  }, [isMenu]);

  const { camera } = useThree();

  useFrame(() => {
    // Update the camera position and lookAt
    camera.position.x = cameraPositionX.get();
    camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <motion.group
        animate={{
          y:
            section === 0 ? 0 : section === 1 ? -4.2 : section === 2 ? -8 : -12,
        }}
      >
        {" "}
        <pointLight position={[10, 10, 10]} />
        <RotatingObject
          geometry={new TorusKnotGeometry(1, 0.3, 100, 16)}
          material={
            new ShaderMaterial({
              uniforms: {
                time: { value: 0 },
              },
              vertexShader: `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
              fragmentShader: `
              uniform float time;
              varying vec2 vUv;
              void main() {
                gl_FragColor = vec4(0.5 + 0.5 * sin(time), vUv.x, vUv.y, 1.0);
              }
            `,
            })
          }
          rotationSpeed={0.01}
        />
      </motion.group>
    </>
  );
};
