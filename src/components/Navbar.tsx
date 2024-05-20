import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Flex
      bg="#9B9B9B"
      height="130px"
      padding="6px 12px"
      justify={{ md: "space-between" }}
      onClick={handleLogoClick}
    >
      <Flex align="center" cursor="pointer" padding={1} onClick={() => {}}>
        <Image src="/mainlogo.png" height="100%" alt="main logo" />
        <Text fontSize="45px" lineHeight="49.5px" fontWeight="400" ml="2">
          호먹
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
