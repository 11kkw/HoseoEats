import React from "react";
import {
  Image,
  Card,
  Box,
  Heading,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CardData } from "../../types/CardData";

const CardComponent: React.FC<CardData> = ({ image, title, description }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "dark-lg",
      }}
      boxShadow="2xl"
      bg={bgColor}
      borderRadius={10}
      overflow="hidden"
      maxWidth="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      m="auto"
      height="250px"
    >
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        width="100%"
        height="150px"
        borderTopRadius="lg"
      />

      <Box
        p={2}
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex width="100%" justifyContent="center">
          <Heading size="lg" mb={2} textAlign="center">
            {title}
          </Heading>
        </Flex>
        <Text
          fontSize="md"
          color={textColor}
          noOfLines={2} // 적어도 두 줄은 표시
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {description}
        </Text>
      </Box>
    </Card>
  );
};

export default CardComponent;
