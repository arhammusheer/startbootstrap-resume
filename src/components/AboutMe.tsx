import {
  Box,
  Stack,
  Heading,
  useColorModeValue,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import totoro from "../totoro-transparent.gif";
import groove from "../groovebob.gif"

export default function AboutMe() {
  return (
    <Box height={"90vh"} p={5}>
      <Stack w={"100%"} h={"100%"} align={"stretch"} my={20}>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            fontSize={"11.3vw"}
            noOfLines={1}
            color={useColorModeValue("gray.400", "gray.600")}
          >
            Arham Musheer
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Text
            fontSize={"6vw"}
            noOfLines={1}
            color={useColorModeValue("gray.400", "gray.600")}
          >
            A student/web developer🥐
          </Text>
					<Image src={groove} alt="groovebob" />
        </motion.div>
        {/* <Flex
          w={"100%"}
          justifyContent={"flex-end"}
          style={{ overflowX: "hidden" }}
        >
          <motion.div
            initial={{ x: 500 }}
            animate={{ translateX: -2500 }}
            transition={{ ease: "linear", duration: 7, repeat: Infinity }}
          >
            <Image src={totoro} alt="totoro" />
          </motion.div>
        </Flex> */}
      </Stack>
    </Box>
  );
}
