"use client";

import {
  Box,
  Text,
  Flex,
  Img,
  Wrap,
  WrapItem,
} from "../../../components/web-components/ChakraElements";
import Footer from "../../../components/web-components/Footer";
import SkillSquare from "../../../components/web-components/SkillSquare";
import TitleSection from "../../../components/web-components/TitleSection";
import useWindowDimensions from "../../../components/web-components/WebDimensions";
import { Navbar } from "../../../components/web-components/NavBar";

export default function Portfolio() {
  const { width = 0, height = 0 } = useWindowDimensions();

  return (
    <Box bgColor="#111618">
      <Box display={{ base: "block", md: "none" }}>
        <Navbar />
      </Box>

      <TitleSection height={height} />

      <Flex
        as="section"
        w="100%"
        minH="100vh"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        px={{ base: "1rem", md: "5rem" }}
        py="3rem"
        gap="2rem"
        id="first-section"
      >
        <Box flex="1">
          <Text
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            color="white"
            mb="1.5rem"
          >
            About me
          </Text>
          <Text
            as="p"
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            textAlign={{ base: "left", md: "justify" }}
          >
            I am a Software Engineer specialized in designing and building
            scalable business applications with Microsoft technologies, modern
            JavaScript frameworks, and microservices architectures. My expertise
            spans backend development with .NET 9 / .NET Core, C#, Clean
            Architecture, DDD, CQRS, and frontend development with Angular,
            React, and TypeScript.
          </Text>
        </Box>

        <Box flex="1" textAlign="center">
          <Img
            borderRadius="lg"
            maxW={{ base: "80%", md: "300px" }}
            w="100%"
            src="/images/about-me/lucas.jpg"
            alt="About me photo"
            mx="auto"
          />
        </Box>
      </Flex>

      <Flex
        as="section"
        w="100%"
        minH="100vh"
        direction="column"
        align="center"
        justify="center"
        px={{ base: "1rem", md: "5rem" }}
        py="3rem"
        id="third-section"
      >
        <Text
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          color="white"
          mb="2rem"
          textAlign="center"
        >
          Skills
        </Text>

        <Wrap spacing="1.5rem" justify="center">
          <WrapItem>
            <SkillSquare />
          </WrapItem>
        </Wrap>
      </Flex>

      <Footer />
    </Box>
  );
}
