import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wrapper } from "../styles/CardStyle";
import NotFound from "./NotFound";
import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Page from "./Page";

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/:pageName" element={<Page />}>
            <Route path=":id" />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} /> {/* 404 */}
        </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}
