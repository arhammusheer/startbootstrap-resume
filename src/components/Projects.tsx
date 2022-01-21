import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import Dad from "./Dad";

export default function Projects() {
  return (
    <Box h={"50vh"} m={10}>
      <Text
        fontSize={{base:"17vw", md:"8vw"}}
        color={useColorModeValue("gray.400", "gray.600")}
      >
        Projects
      </Text>
      <Dad />
    </Box>
  );
}
