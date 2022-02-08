import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atom";
import GlobalStyle from "./styles/GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./router/Router";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {/* RESET CSS 컴포넌트 */}
        <GlobalStyle />
        {/* 라우터 관리 */}
        <Router />
        {/* react-query 브라우저 디버깅 */}
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
