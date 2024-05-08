import React from "react";
import PageContent from "../components/layout/PageContent";
import { CardData } from "../types/CardData";
import CardGrid from "../components/card/CardGrid";
import { Flex, Box, Text } from "@chakra-ui/react";
import FoodCategoryBar from "../components/category/FoodCategoryBar";

const cardsData: CardData[] = [
  {
    image: "/restaurant/image.png",
    title: "용우동",
    description: "주인장이 맛있고 떡뽁이가 친절해용",
  },
  {
    image: "/restaurant/image.png",
    title: "living room sofa",
    description:
      "this sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
  },
  {
    image: "/restaurant/image.png",
    title: "",
    description:
      "this sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
  },
  {
    image: "/restaurant/image.png",
    title: "living room sofa",
    description:
      "this sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
  },
  {
    image: "/restaurant/image.png",
    title: "living room sofa",
    description:
      "this sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
  },
  {
    image: "/restaurant/image.png",
    title: "living room sofa",
    description:
      "this sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
  },
  {
    image: "/restaurant/image.png",
    title: "living room sofa",
    description:
      "this sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
  },
  {
    image: "/restaurant/image.png",
    title: "living room sofa",
    description:
      "this sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
  },
  {
    image: "/restaurant/image.png",
    title: "living room sofa",
    description:
      "this sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
  },
  {
    image: "/restaurant/image.png",
    title: "living room sofa",
    description:
      "this sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <FoodCategoryBar />
      <PageContent>
        <CardGrid cards={cardsData} />
      </PageContent>
    </>
  );
};

export default Home;
