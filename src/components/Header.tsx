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
  Input,
  IForm,
} from "../styles/HeaderStyle";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import WifiIcon from "@material-ui/icons/Wifi";
import BatteryCharging80Icon from "@material-ui/icons/BatteryCharging80";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion, useAnimation } from "framer-motion";
import { useCallback, useState } from "react";
import useTimer from "../hooks/useTimer";

export default function Header() {
  const { timer: currentTime } = useTimer();
  const [searchOpen, setSearchOpen] = useState(false);
  const { register, handleSubmit, setFocus } = useForm<IForm>();
  const navigate = useNavigate();
  const onValid = (data: IForm) => {
    navigate(`/search/${data.queryString}`);
  };
  const inputAnimation = useAnimation();

  const toggleSearch = useCallback(() => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
      setFocus("queryString");
    }
    setSearchOpen((prev) => !prev);
  }, [searchOpen]);

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
      <LogoSearchBar>
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
        <Search onSubmit={handleSubmit(onValid)}>
          <motion.svg
            onClick={toggleSearch}
            animate={{ x: searchOpen ? -185 : 0 }}
            transition={{ type: "linear" }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
          <Input
            {...register("queryString", { required: true, minLength: 2 })}
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ type: "linear" }}
            placeholder="Search ...."
          />
        </Search>
      </LogoSearchBar>
    </Wrapper>
  );
}
