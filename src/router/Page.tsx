import { CategoryPageTitle, CategoryPagWrapper } from "../styles/CardStyle";
import { useGetCategoryTitle } from "../utils/callApi";
import { Outlet, useParams } from "react-router-dom";
import Pages from "../components/Pages";

export default function Page() {
  const params = useParams();
  const titleArr = useGetCategoryTitle();
  const currentTitle: string = params.pageName!;

  return (
    <>
      <CategoryPagWrapper>
        <CategoryPageTitle categoryColor={titleArr?.color ?? "#FF6600"}>
          <span>{currentTitle.toUpperCase()}</span>
        </CategoryPageTitle>
        <Outlet />
      </CategoryPagWrapper>
      {params.id ? null : <Pages currentTitle={currentTitle.toUpperCase()} />}
    </>
  );
}
