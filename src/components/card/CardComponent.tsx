import React from "react";
import {
  Image,
  Box,
  Heading,
  Flex,
  Text,
  useColorModeValue,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { CardData } from "../../types/CardData";
import { useNavigate } from "react-router-dom";

const CardComponent: React.FC<CardData> = ({
  image,
  title,
  foodtype,
  location,
  description,
  score,
}) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/details/${title}`);
  };

  return (
    <Box
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "dark-lg",
      }}
      boxShadow="2xl"
      bg={bgColor}
      borderRadius={10}
      width="450px"
      display="flex"
      flexDirection="column"
      height="510px"
      cursor="pointer"
      onClick={handleCardClick}
    >
      <Image
        src={image || "/images/quest.png"}
        alt={title}
        objectFit="cover"
        width="100%"
        height="255px"
        borderTopRadius="lg"
      />
      <Box
        p={7}
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="255px"
      >
        <Box>
          <Heading
            fontFamily="KOHBaeum, sans-serif"
            fontWeight="400"
            fontSize="35px"
            lineHeight="38.5px"
            mb={2}
          >
            {title}
          </Heading>
          <Flex alignItems="center" mb={2}>
            <Icon as={FaStar} color="yellow.400" mr={1} fontSize="28px" />
            <Text fontSize="23px" fontWeight="400" lineHeight={"25.3px"}>
              {score}
            </Text>
            <Flex flexWrap="wrap">
              {foodtype.map((type: string, index: number) => (
                <Badge
                  key={index}
                  m={1}
                  colorScheme="purple"
                  fontSize="20px"
                  lineHeight="27.5px"
                >
                  #{type}
                </Badge>
              ))}
            </Flex>
          </Flex>
          <Text
            fontFamily="KOHBaeum, sans-serif"
            fontSize="16px"
            lineHeight="1.5"
            mb={2}
            color="gray.600"
          >
            {description}
          </Text>
        </Box>
        <Flex alignItems="center" mt={4} color="gray.500">
          <Icon as={FaMapMarkerAlt} mr={1} color="red" />
          <Text fontFamily="KOHBaeum, sans-serif" fontSize="14px">
            {location}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default CardComponent;
