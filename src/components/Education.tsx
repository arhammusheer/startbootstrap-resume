import { Box, Text, useColorModeValue, Stack } from "@chakra-ui/react";

export default function Education() {
  return (
    <Box h={"50vh"} m={10}>
      <Text
        fontSize={{base:"17vw", md:"8vw"}}
        color={useColorModeValue("gray.400", "gray.600")}
      >
        Education
      </Text>
			<Stack>
				<Box>
					<Text fontSize="5xl" color={useColorModeValue("gray.800", "gray.200")}>
						University of Massachusetts, Amherst
					</Text>
					<Text fontSize="2xl" color={useColorModeValue("gray.800", "gray.200")}>
						B.S. Computer Engineering
					</Text>
					<Text fontSize="xl" color={useColorModeValue("gray.800", "gray.200")}>
						Fall 2020 - Spring 2024
					</Text>
				</Box>					
			</Stack>
    </Box>
  );
}
