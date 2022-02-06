import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wrapper } from "../styles/CardStyle";
import NotFound from "./NotFound";
import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Page from "./Page";
import {
  FloatDiv,
  FloatWrapper,
  ShowTopBtn,
  ThemeToggleBtn,
} from "../styles/FloatStyle";
import React, { useCallback, useRef } from "react";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Detail from "./Detail";

export default function Router() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const setDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, [setIsDark]);

  const scrollToTop = useCallback(() => {
    scrollRef.current.scrollTo({
      behavior: "smooth",
      top: scrollRef.current.offsetTop - 150,
    });
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Wrapper ref={scrollRef}>
        <Routes>
          <Route path="/:pageName" element={<Page />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} /> {/* 404 */}
        </Routes>
        <FloatDiv>
          {/* 다크모드 토글버튼 */}
          <FloatWrapper>
            <ThemeToggleBtn onClick={setDarkMode}>
              {isDark ? "🌙" : "☀️"}
            </ThemeToggleBtn>
            <ShowTopBtn onClick={scrollToTop}>
              <ArrowUpwardIcon />
            </ShowTopBtn>
          </FloatWrapper>
        </FloatDiv>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}
