import { Box, Stack, Heading, useColorModeValue, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Box height={"90vh"} p={5}>
      <Stack w={"100%"} h={"100%"} align={"stretch"}>
        <Heading
          fontSize={"11.3vw"}
          noOfLines={1}
          color={useColorModeValue("gray.400", "gray.600")}
        >
          Arham Musheer
        </Heading>
        <Text
          fontSize={"6vw"}
          noOfLines={1}
          color={useColorModeValue("gray.400", "gray.600")}
        >
          A student/web developer
        </Text>
        <Text
          style={{ position: "absolute", translate: "0 50vh" }}
          fontSize={200}
        >
          🥐
        </Text>
      </Stack>
    </Box>
  );
}
