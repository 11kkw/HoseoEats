import React from "react";
import PageContent from "../components/layout/PageContent";
import CardGrid from "../components/card/CardGrid";
import FoodCategoryBar from "../components/category/FoodCategoryBar";
import useFetchCsvData from "../hooks/useFetchCsvData";

const Home: React.FC = () => {
  const { data: cardsData } = useFetchCsvData("/final_data.csv");

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
