import * as React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Projects from "./components/Projects";
import Name from "./components/Name";
import theme from "./theme";
import AboutMe from "./components/AboutMe";

import "@fontsource/raleway/700.css";
import "@fontsource/open-sans/400.css";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl" h={"100%"}>
      <Flex p={3}>
        <Name />
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
      <AboutMe />
      <Projects />
    </Box>
  </ChakraProvider>
);
