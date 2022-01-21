import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Dad from "./Dad";

export default function Projects() {
  return (
    <Box h={"50vh"}>
      <Text
        fontSize={{base:"20vw", md:"10vw"}}
        color={useColorModeValue("gray.400", "gray.600")}
      >
        Projects
      </Text>
      <Dad />
    </Box>
  );
}
