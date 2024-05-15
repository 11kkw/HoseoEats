import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { DetailCardData } from "../../../types/CardData";

type MenuCardProps = {
  selectedCards: DetailCardData[];
};

const MenuCard: React.FC<MenuCardProps> = ({ selectedCards }) => {
  const [showAll, setShowAll] = useState(false);
  const cardsToShow = showAll ? selectedCards : selectedCards.slice(0, 3);

  const handleToggle = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <Flex
      border="1px solid black"
      borderRadius={10}
      width="775px"
      py={10}
      px={5}
      direction="column"
    >
      <Text fontSize="45px" fontWeight="400" lineHeight="49.5px" mb={5}>
        {"대표메뉴"}
      </Text>
      <Box flex="1">
        {cardsToShow.map((card, index) => (
          <Box key={index} m={2} p={2}>
            <Flex alignItems="center">
              <Image
                src={card.image || "/images/quest.png"}
                alt={card.title}
                width="100px"
                height="100px"
                objectFit="cover"
                mr={5}
              />
              <Text
                fontSize="35px"
                lineHeight="38.5px"
                fontWeight="700"
                flex="1"
              >
                {card.menu_title}
              </Text>
              <Text ml={5} fontSize="35px" lineHeight="38.5px" fontWeight="700">
                {card.cost}
              </Text>
            </Flex>
          </Box>
        ))}
      </Box>
      {selectedCards.length > 3 && (
        <Button
          mt={5}
          alignSelf="center"
          bg="white"
          onClick={handleToggle}
          color="black"
          border="1px solid black"
          _hover={{ bg: "gray.100" }}
        >
          {showAll ? "메뉴 접기" : "메뉴 더보기"}
        </Button>
      )}
    </Flex>
  );
};

export default MenuCard;
