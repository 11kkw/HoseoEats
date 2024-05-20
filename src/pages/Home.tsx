import React, { useState } from "react";
import PageContent from "../components/layout/PageContent";
import CardGrid from "../components/card/CardGrid";
import FoodCategoryBar from "../components/category/FoodCategoryBar";
import useFetchCsvData from "../hooks/useFetchCsvData";

const Home: React.FC = () => {
  const { data: cardsData } = useFetchCsvData("/final_data.csv");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredCards = selectedCategory
    ? cardsData.filter((card) => card.foodtype.includes(selectedCategory))
    : cardsData;

  return (
    <>
      <FoodCategoryBar onCategorySelect={handleCategorySelect} />
      <PageContent>
        <CardGrid cards={filteredCards} />
      </PageContent>
    </>
  );
};

export default Home;
