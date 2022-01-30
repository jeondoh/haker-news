import { ContentCard } from "../styles/CardStyle";

interface IContentCards {
  color: string;
}

export default function ContentCards(color: IContentCards) {
  return (
    <>
      <ContentCard>test</ContentCard>
      <ContentCard>test</ContentCard>
    </>
  );
}
