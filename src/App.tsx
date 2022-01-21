import * as React from "react";
import { ChakraProvider, Box, Flex, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Dad from "./components/Dad";
import Name from "./components/Name";
import theme from "./theme";
import AboutMe from "./components/AboutMe";

import "@fontsource/raleway/700.css";
import "@fontsource/open-sans/400.css";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Flex margin={3}>
        <Name />
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
      <AboutMe />
      <Box>
        <Dad />
      </Box>
    </Box>
  </ChakraProvider>
);
