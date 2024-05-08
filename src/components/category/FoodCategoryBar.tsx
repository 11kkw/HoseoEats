import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import FoodCategoryButton from "./FoodCategoryButton";

const FoodCategoryBar: React.FC = () => {
  const categories = ["모두", "한식", "중식", "양식", "기타"];

  return (
    <Flex justify="center" mt={8}>
      <Box width="100%" maxWidth={"1000px"} borderRadius={13} bg="white">
        <Flex justify="center" width="100%" p={4}>
          <Box>
            <Flex justify="center">
              <Text fontSize="2xl" fontWeight="bold" color="teal.500" mb={4}>
                Food Category
              </Text>
            </Flex>
            <Flex wrap="wrap" gap="2">
              {categories.map((category) => (
                <FoodCategoryButton key={category} label={category} />
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FoodCategoryBar;
