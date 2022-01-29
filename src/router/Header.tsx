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

export default function Header() {
  return (
    <Wrapper>
      <CenterCircle />
      <MobileInfo>
        {/* TODO : MobileTime 현재시간을 변경 */}
        <MobileTime>9:41</MobileTime>
        <InfoWrapper>
          <Infos>
            <SignalCellularAltIcon fontSize="small" />
            <WifiIcon fontSize="small" />
            <BatteryCharging80Icon fontSize="small" />
          </Infos>
        </InfoWrapper>
      </MobileInfo>
      <LogoSearchBar>
        <LogoImg src={require("../images/Logo.png")} alt="Logo" />
        <LogoText>
          svelte
          <br />
          hacker
          <br />
          news
        </LogoText>
        <Search>
          <SearchIcon color="action" />
        </Search>
      </LogoSearchBar>
    </Wrapper>
  );
}
