export interface ICard {
  color: string;
  category: string;
  subCategory: string;
}

export default function titleCardData(): ICard[] {
  return [
    {
      category: "TOP 5",
      subCategory: "Find out most hot issues",
      color: "#fd6106",
    },
    {
      category: "NEW 5",
      subCategory: "Fast, Fresh, Fashionable",
      color: "#7B61FF",
    },
    {
      category: "ASK 5",
      subCategory: "Ask and get fresh information",
      color: "#DB00FF",
    },
    {
      category: "SHOW 5",
      subCategory: "Share and grow together",
      color: "#69A075",
    },
    {
      category: "JOBS 5",
      subCategory: "Your new possibility",
      color: "#FEBB10",
    },
  ];
}