import { Box, Text } from "./ChakraElements";
import HomeButton from "./HomeButton";
import { jorelFont } from "@/fonts/jorel";

export const HomeContent = () => {
  return (
    <Box position="fixed" top="0" right="0" left="0" h="100vh">
      <Box w="100%" mt={{ base: "2vh", md: "6vh" }} h="100%">
        <Text
          as="h1"
          textAlign="center"
          className={jorelFont.className}
          fontSize={{ base: "8vmin", md: "6vmin" }}
          color="white"
        >
          LPADILLA Project
        </Text>

        <Box
          as="nav"
          textAlign="center"
          position="fixed"
          w="100%"
          mt={{ base: "45vh", md: "50vh" }}
        >
          <HomeButton title="About me" href="/AboutMe" />
          <HomeButton title="My Projects" href="/MyProjects" />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeContent;