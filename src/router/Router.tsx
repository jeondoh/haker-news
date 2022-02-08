import { Routes, Route, useNavigate } from "react-router-dom";
import { Wrapper } from "../styles/CardStyle";
import NotFound from "./NotFound";
import Home from "./Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Page from "./Page";
import {
  BackBtn,
  FLoatLeftDiv,
  FloatRightDiv,
  FloatWrapper,
  ShowTopBtn,
  ThemeToggleBtn,
} from "../styles/FloatStyle";
import React, { useCallback, useRef } from "react";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Detail from "./Detail";
import User from "./User";

export default function Router() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const prevPage = useCallback(() => {
    navigate(-1);
  }, [navigate]);

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
    <>
      <Header />
      <Wrapper ref={scrollRef}>
        <Routes>
          <Route path="/user">
            <Route path=":name" element={<User />} />
          </Route>
          <Route path="/:pageName" element={<Page />}>
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} /> {/* 404 */}
        </Routes>
        {/* 뒤로가기 버튼 */}
        <FLoatLeftDiv>
          <FloatWrapper>
            <BackBtn onClick={prevPage}>
              <ArrowBackIcon />
            </BackBtn>
          </FloatWrapper>
        </FLoatLeftDiv>

        {/* 다크모드, 위로가기 버튼 */}
        <FloatRightDiv>
          <FloatWrapper>
            <ThemeToggleBtn onClick={setDarkMode}>
              {isDark ? "🌙" : "☀️"}
            </ThemeToggleBtn>
            <ShowTopBtn onClick={scrollToTop}>
              <ArrowUpwardIcon />
            </ShowTopBtn>
          </FloatWrapper>
        </FloatRightDiv>
      </Wrapper>
      <Footer />
    </>
  );
}
