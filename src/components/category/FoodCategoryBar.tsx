import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

type FoodCategoryBarProps = {
  onCategorySelect: (category: string) => void;
};

const FoodCategoryBar: React.FC<FoodCategoryBarProps> = ({
  onCategorySelect,
}) => {
  const categories = [
    { name: "한식", icon: "/images/korean.png" },
    { name: "일식", icon: "/images/japanese.png" },
    { name: "분식", icon: "/images/snack.png" },
    { name: "중식", icon: "/images/chinese.png" },
    { name: "패스트푸드", icon: "/images/fastfood.png" },
    { name: "기타", icon: "/images/etc.png" },
  ];

  return (
    <Flex justify="center" mt={8}>
      <Flex
        width="100%"
        maxWidth="1565px"
        borderRadius="20px"
        bg="#EEEEEE"
        height="247px"
        alignItems="center"
        p={5}
      >
        <Box mx={10} width="230px" height="100px" textAlign="left">
          <Text
            fontFamily="KOHIBaeum"
            fontSize="45px"
            fontWeight="400"
            lineHeight="49.5px"
            color="black"
          >
            음식종류
          </Text>
          <Text
            fontFamily="KOHIBaeum"
            fontSize="45px"
            fontWeight="400"
            lineHeight="49.5px"
            color="black"
          >
            맛집보기
          </Text>
          <Text
            fontFamily="KOHIBaeum"
            fontSize="20px"
            fontWeight="400"
            lineHeight="22px"
            color="black"
          >
            Food Category
          </Text>
        </Box>
        <Flex justify="space-around" width="100%">
          {categories.map((category, index) => (
            <Box
              key={index}
              textAlign="center"
              onClick={() => onCategorySelect(category.name)}
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
              }}
            >
              <Image
                src={category.icon}
                alt={category.name}
                boxSize="116px"
                mb={4}
                cursor="pointer"
              />
              <Text
                fontFamily="KOHIBaeum"
                fontSize="30px"
                fontWeight="400"
                lineHeight="33px"
                color="black"
              >
                {category.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FoodCategoryBar;
