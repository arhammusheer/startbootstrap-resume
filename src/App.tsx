import * as React from "react";
import { ChakraProvider, Box, Flex, Spacer, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Dad from "./components/Dad";
import Name from "./components/Name";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Flex margin={3}>
        <Name />
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
      <Box>
        <Dad />
      </Box>
    </Box>
  </ChakraProvider>
);
