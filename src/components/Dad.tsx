import {
  Box,
  Flex,
  Spacer,
  Stack,
  Heading,
  Center,
  IconButton,
  Fade,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaSync } from "react-icons/fa";

import { motion } from "framer-motion";

const Dad = () => {
  const [joke, setJoke] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const getJoke = async () => {
    setIsOpen(false);

    return await fetch("https://dad.croissant.one/api/joke", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke[0].content);
        setIsOpen(true);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);

  const AnimatedFaSync = () => (
    <motion.div
      whileHover={{ rotate: 20 }}
      whileTap={{
        rotate: -60,
        borderRadius: "100%",
      }}
    >
      <FaSync />
    </motion.div>
  );

  return (
    <Flex>
      <Spacer />
      <Box
        border={"1px"}
        borderRadius={"lg"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
        shadow={"md"}
        width={{ base: "90%", md: "40rem" }}
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Heading
            size={"4xl"}
            // textColor={"white"}
            pt={{ base: 4, md: 20 }}
            p={4}
            textAlign={{ base: "left", md: "right" }}
          >
            Dad Bot
          </Heading>
          <Center w={"100%"} p={3}>
            <Fade in={isOpen}>{joke}</Fade>
          </Center>
        </Stack>
        <Flex p={1}>
          <Spacer />
          <IconButton
            variant={"ghost"}
            justifySelf={"flex-end"}
            aria-label={"Reload"}
            icon={<AnimatedFaSync />}
            onClick={() => {
              getJoke();
            }}
          />
        </Flex>
      </Box>
      <Spacer />
    </Flex>
  );
};

export default Dad;
