import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <Text>Rinidh • © 2022</Text>
          <Text ml={4} textDecor={"underline"}>
            <a href="https://github.com/rinidh">Github</a>
          </Text>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
