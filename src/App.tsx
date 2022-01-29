import { useRecoilValue } from "recoil";
import { darkTheme, lightTheme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { isDarkAtom } from "./atom";
import GlobalStyle from "./styles/GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./router/Router";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    /* TODO : Dark & Light 모드 (미완) */
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {/* RESET CSS 컴포넌트 */}
      <GlobalStyle />
      {/* 라우터 관리 */}
      <Router />
      {/* react-query 브라우저 디버깅 */}
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default App;
