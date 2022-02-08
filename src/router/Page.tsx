import { CategoryPageTitle, CategoryPagWrapper } from "../styles/CardStyle";
import { Outlet, useParams } from "react-router-dom";
import Pages from "../components/Pages";

export default function Page() {
  const params = useParams();
  const currentTitle: string = params.pageName!;

  return (
    <>
      <CategoryPagWrapper>
        <CategoryPageTitle>
          <span>{currentTitle.toUpperCase()}</span>
        </CategoryPageTitle>
        <Outlet />
      </CategoryPagWrapper>
      {params.id ? null : <Pages currentTitle={currentTitle.toUpperCase()} />}
    </>
  );
}
