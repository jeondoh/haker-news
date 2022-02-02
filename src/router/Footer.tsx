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
          <Img src={require("../images/new.png")} alt="Logo" />
          <ImgText>New</ImgText>
        </WrapperImg>
        <WrapperImg>
          <Img src={require("../images/ask.png")} alt="Logo" />
          <ImgText>Ask</ImgText>
        </WrapperImg>
        <WrapperImg>
          <Img src={require("../images/show.png")} alt="Logo" />
          <ImgText>Show</ImgText>
        </WrapperImg>
        <WrapperImg>
          <Img src={require("../images/jobs.png")} alt="Logo" />
          <ImgText>Jobs</ImgText>
        </WrapperImg>
      </WrapperFlex>
    </Wrapper>
  );
}
