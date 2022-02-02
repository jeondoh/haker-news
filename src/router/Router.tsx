import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import TopPage from "./TopPage";
import NewPage from "./NewPage";
import AskPage from "./AskPage";
import ShowPage from "./ShowPage";
import JobsPage from "./JobsPage";

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/top" element={<TopPage />}>
          <Route path=":id" />
        </Route>
        <Route path="/new" element={<NewPage />}>
          <Route path=":id" />
        </Route>
        <Route path="/ask" element={<AskPage />}>
          <Route path=":id" />
        </Route>
        <Route path="/show" element={<ShowPage />}>
          <Route path=":id" />
        </Route>
        <Route path="/jobs" element={<JobsPage />}>
          <Route path=":id" />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
