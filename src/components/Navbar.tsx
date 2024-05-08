import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Flex
      bg="white"
      height="100px"
      padding="6px 12px"
      justify={{ md: "space-between" }}
    >
      <Flex
        align="center"
        width="200px"
        cursor="pointer"
        padding={1}
        onClick={() => {}}
      >
        <Image src="/mainlogo.png" height="100%" alt="main logo" />
        <Box
          fontSize="2xl"
          fontWeight="bold"
          color="teal.600"
          textShadow="1px 1px 2px gray"
          ml="2"
        >
          호먹
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
