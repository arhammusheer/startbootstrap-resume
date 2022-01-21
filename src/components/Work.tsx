import { Box, Text, useColorModeValue, Stack } from "@chakra-ui/react";

export default function Work() {
  return (
    <Box h={"100vh"} m={10}>
      <Text
        fontSize={{base:"12vw", md:"8vw"}}
        color={useColorModeValue("gray.400", "gray.600")}
      >
        Work Experience
      </Text>
			<Stack>
				<Box>
					<Text fontSize="5xl" color={useColorModeValue("gray.800", "gray.200")}>
						Computer Classrooms Assistant
					</Text>
					<Text fontSize="2xl" color={useColorModeValue("gray.800", "gray.200")}>
						UMass IT
					</Text>
					<Text fontSize="xl" color={useColorModeValue("gray.800", "gray.200")}>
						Sept 2021 - Current
					</Text>
				</Box>					
			</Stack>
    </Box>
  );
}
