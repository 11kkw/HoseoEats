import { useState, useEffect } from "react";
import Papa, { ParseResult } from "papaparse";
import { CardData } from "../types/CardData";

const useFetchCsvData = (csvUrl: string) => {
  const [data, setData] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();
        console.log(csvText);
        Papa.parse(csvText, {
          header: true,
          complete: (result: ParseResult<any>) => {
            const parsedData: CardData[] = result.data.map((row: any) => ({
              image: row.image,
              title: row.title,
              description: row.description,
              location: row.location,
              foodtype: row.foodtype ? row.foodtype.split(",") : [],
              score: row.score,
            }));
            setData(parsedData);
            setLoading(false);
          },
        });
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [csvUrl]);

  return { data, loading, error };
};

export default useFetchCsvData;
