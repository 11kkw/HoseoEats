import { Button } from "@chakra-ui/react";
import React from "react";

interface FoodCategoryButtonProps {
  label: string;
}

const FoodCategoryButton: React.FC<FoodCategoryButtonProps> = ({ label }) => {
  return (
    <Button colorScheme="gray" size="sm" borderRadius="lg">
      {label}
    </Button>
  );
};

export default FoodCategoryButton;
