export type CardData = {
  title: string;
  image: string;
  foodtype: string[];
  location: string;
  score: number;
  description?: string;
};

export type DetailCardData = {
  title: string;
  image: string;
  foodtype: string[];
  location: string;
  score: number;
  dscription?: string;
  menu_title: string;
  cost: number;
};
