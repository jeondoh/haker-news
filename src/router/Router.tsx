import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* 404 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
