import React from "react";
import PageContent from "../components/layout/PageContent";
import { CardData } from "../types/CardData";
import CardGrid from "../components/card/CardGrid";

const cardsData: CardData[] = [
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
    <PageContent>
      <CardGrid cards={cardsData} />
    </PageContent>
  );
};

export default Home;
