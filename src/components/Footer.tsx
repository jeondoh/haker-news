import {
  Img,
  ImgText,
  Wrapper,
  WrapperFlex,
  WrapperImg,
} from "../styles/FooterStyle";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Wrapper>
      <WrapperFlex>
        <WrapperImg>
          <Link to="/top">
            <Img src={require("../images/top.png")} alt="Logo" />
            <ImgText>Top</ImgText>
          </Link>
        </WrapperImg>
        <WrapperImg>
          <Link to="/new">
            <Img src={require("../images/new.png")} alt="Logo" />
            <ImgText>New</ImgText>
          </Link>
        </WrapperImg>
        <WrapperImg>
          <Link to="/ask">
            <Img src={require("../images/ask.png")} alt="Logo" />
            <ImgText>Ask</ImgText>
          </Link>
        </WrapperImg>
        <WrapperImg>
          <Link to="/show">
            <Img src={require("../images/show.png")} alt="Logo" />
            <ImgText>Show</ImgText>
          </Link>
        </WrapperImg>
        <WrapperImg>
          <Link to="/jobs">
            <Img src={require("../images/jobs.png")} alt="Logo" />
            <ImgText>Jobs</ImgText>
          </Link>
        </WrapperImg>
      </WrapperFlex>
    </Wrapper>
  );
}
