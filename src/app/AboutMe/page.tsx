"use client";

import { Divider } from "@chakra-ui/react";
import { Box } from "../../../components/web-components/ChakraElements";
import Head from "next/head";
import { Navbar } from "../../../components/web-components/NavBar";
import { Canvas } from "@react-three/fiber";
import { CSSProperties, Suspense } from "react";
import ContactAnimation from "../../../components/three-components/ContactPage/ContactAnimation";
import Portfolio from "../Portfolio/page";

export default function AboutMe() {
  const canvasStyle: CSSProperties = {
    position: "fixed",
    inset: 0,
    backgroundColor: "#1e1a20",
    zIndex: -1,
    display: "block",
  };

  return (
    <Box>
      <Head>
        <title>About Me</title>
        <meta name="About Me" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display={{ base: "none", md: "block" }}>
        <Canvas
          camera={{
            fov: 30,
            near: 0.1,
            far: 100,
            position: [-1.5, 1.8, 15],
          }}
          style={canvasStyle}
        >
          <Suspense fallback={null}>
            <ContactAnimation />
          </Suspense>
        </Canvas>

        <Box color="white" bgColor="gray.900">
          <Navbar></Navbar>
          <Divider mt="1rem" />
        </Box>
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <Portfolio />
      </Box>
    </Box>
  );
}
