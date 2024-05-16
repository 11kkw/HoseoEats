import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContent from "../components/layout/PageContent";
import DetailCard from "../components/card/detail/DetailCard";
import Papa, { ParseResult } from "papaparse";
import { DetailCardData } from "../types/CardData";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import MenuCard from "../components/card/detail/MenuCard";
import MapCard from "../components/card/detail/MapCard";

type DetailProps = {};

const Detail: React.FC<DetailProps> = () => {
  const { title } = useParams<{ title: string }>();
  const [selectedCards, setSelectedCards] = useState<DetailCardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/restaurant_data.csv");
      const csvText = await response.text();
      Papa.parse(csvText, {
        header: true,
        complete: (result: ParseResult<any>) => {
          const data: DetailCardData[] = result.data.map((row: any) => ({
            image: row.image,
            title: row.title,
            description: row.description,
            location: row.location,
            score: row.score,
            menu_title: row.menu_title,
            cost: row.cost,
            foodtype: row.foodtype ? row.foodtype.split(",") : [],
          }));
          const matchingCards = data.filter((card) => card.title === title);
          setSelectedCards(matchingCards);
          console.log(matchingCards);
        },
      });
    };

    fetchData();
  }, [title]);
  if (selectedCards.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <PageContent>
        <Box width="100%">
          <DetailCard selectedCards={selectedCards} />
          <Flex mt={20} width="1311px">
            <MenuCard selectedCards={selectedCards} />
            <Spacer />
            <Box>
              <MapCard default_card={selectedCards[0]} />
            </Box>
          </Flex>
        </Box>
      </PageContent>
    </>
  );
};

export default Detail;
