import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import CardComponent from "./CardComponent";
import { CardData } from "../../types/CardData";

interface CardGridProps {
  cards: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing="40px">
      {cards.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))}
    </SimpleGrid>
  );
};

export default CardGrid;
