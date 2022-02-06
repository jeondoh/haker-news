import {
  Wrapper,
  CenterCircle,
  MobileInfo,
  LogoSearchBar,
  LogoImg,
  LogoText,
  Search,
  MobileTime,
  InfoWrapper,
  Infos,
} from "../styles/HeaderStyle";
import SearchIcon from "@material-ui/icons/Search";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging80Icon from "@material-ui/icons/BatteryCharging80";
import useTimer from "../utils/getTime";
import { Link } from "react-router-dom";
import { useGetCategoryTitle } from "../utils/callApi";

export default function Header() {
  const { timer: currentTime } = useTimer();
  const titleArr = useGetCategoryTitle();

  return (
    <Wrapper>
      <CenterCircle />
      <MobileInfo>
        {/* TODO : MobileTime 현재시간을 변경 */}
        <MobileTime>{currentTime}</MobileTime>
        <InfoWrapper>
          <Infos>
            <SignalCellularAltIcon fontSize="small" />
            <WifiIcon fontSize="small" />
            <BatteryCharging80Icon fontSize="small" />
          </Infos>
        </InfoWrapper>
      </MobileInfo>
      <LogoSearchBar categoryColor={titleArr?.color ?? "#FD6106"}>
        {/* 로고 */}
        <Link to="/">
          <LogoImg src={require("../images/Logo.png")} alt="Logo" />
        </Link>
        <Link to="/">
          <LogoText>
            svelte
            <br />
            hacker
            <br />
            news
          </LogoText>
        </Link>
        <Search>
          <SearchIcon />
        </Search>
      </LogoSearchBar>
    </Wrapper>
  );
}
