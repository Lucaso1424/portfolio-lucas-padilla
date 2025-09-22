"use client";

import Head from "next/head";
import useWindowDimensions from "../../components/web-components/WebDimensions";
import { Box } from "../../components/web-components/ChakraElements";
import { Canvas } from "@react-three/fiber";
import HomeContent from "../../components/web-components/HomeContent";
import EnergyCore from "../../components/three-components/EnergyCore/EnergyCore";
import localFont from "next/font/local";

export const jorelFont = localFont({
  src: "../fonts/JorelMinesweeperPlus-Regular.otf",
  display: "swap",
  variable: "--font-jorel",
});


export default function Home() {
  const { width, height } = useWindowDimensions();
  return (
    <div>
      <Head>
        <title>Lucas Padilla - Software Engineer</title>
        <meta name="description" content="LPADILLA Project" />
        <link rel="ico" href="./favicon.ico" />
      </Head>
      <Box position='relative' height={'100vh'} bg='black'  className={jorelFont.className}>
        <Canvas camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 13] }} >
          <EnergyCore />
        </Canvas>
        <HomeContent />
      </Box>
    </div>
  )
}