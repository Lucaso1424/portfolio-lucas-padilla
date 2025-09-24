"use client";

import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box,
} from "./ChakraElements";
import { HamburgerIcon, CloseIcon } from "./SocialIcons";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    toggleColorMode();
    const styleEl = document.createElement("style");
    const cssText = document.createTextNode(
      "html * { transition: color, background-color 0.3s ease-out!important }"
    );
    styleEl.appendChild(cssText);
    document.head.appendChild(styleEl);
    setTimeout(() => {
      document.head.removeChild(styleEl);
    }, 300);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 10 }}
      py={3}
      position="sticky"
      top="0"
      bg={isDark ? "gray.900" : "white"}
      zIndex="100"
      shadow="md"
    >
      <NextLink href="/" passHref>
        <Button
          variant="ghost"
          fontWeight="bold"
          fontSize="lg"
          onClick={handleNavClick}
        >
          LPADILLA Project
        </Button>
      </NextLink>

      {/* Desktop menu */}
      <Flex display={{ base: "none", md: "flex" }} gap="1rem" align="center">
        <NextLink href="/" passHref>
          <Button
            variant="ghost"
            onClick={handleNavClick}
            isActive={pathname === "/"}
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/MyProjects" passHref>
          <Button
            variant="ghost"
            onClick={handleNavClick}
            isActive={pathname === "/MyProjects"}
          >
            Projects
          </Button>
        </NextLink>
        <NextLink href="/AboutMe" passHref>
          <Button
            variant="ghost"
            onClick={handleNavClick}
            isActive={pathname === "/AboutMe"}
          >
            About Me
          </Button>
        </NextLink>
        <Switch
          colorScheme="green"
          isChecked={isDark}
          onChange={handleClick}
        />
      </Flex>

      {/* Mobile menu button */}
      <IconButton
        aria-label="Toggle Menu"
        icon={mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        display={{ base: "flex", md: "none" }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        bg="transparent"
      />

      {/* Mobile menu content */}
      {mobileMenuOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100%"
          h="100vh"
          bg={isDark ? "gray.800" : "gray.100"}
          zIndex="90"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gap="2rem"
        >
          <NextLink href="/" passHref>
            <Button
              variant="outline"
              w="70%"
              onClick={handleNavClick}
              isActive={pathname === "/"}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/MyProjects" passHref>
            <Button
              variant="outline"
              w="70%"
              onClick={handleNavClick}
              isActive={pathname === "/MyProjects"}
            >
              Projects
            </Button>
          </NextLink>
          <NextLink href="/AboutMe" passHref>
            <Button
              variant="outline"
              w="70%"
              onClick={handleNavClick}
              isActive={pathname === "/AboutMe"}
            >
              About Me
            </Button>
          </NextLink>
          <Switch
            colorScheme="green"
            isChecked={isDark}
            onChange={handleClick}
          />
        </Box>
      )}
    </Flex>
  );
};