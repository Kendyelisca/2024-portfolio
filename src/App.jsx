import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useEffect, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { Cursor } from "./components/Cursor";

function App() {
  const [section, setSection] = useState(0);
  const [isMenu, setMenu] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          duration: 0.5,
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        {" "}
        <Canvas shadows camera={{ position: [0, 3, 5], fov: 36 }}>
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} isMenu={isMenu} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu onSectionChange={setSection} isMenu={isMenu} setMenu={setMenu} />
        <Cursor />
      </MotionConfig>
    </>
  );
}

export default App;
