import {
  Img,
  ImgText,
  Wrapper,
  WrapperFlex,
  WrapperImg,
} from "../styles/FooterStyle";

export default function Footer() {
  return (
    <Wrapper>
      <WrapperFlex>
        <WrapperImg>
          <Img src={require("../images/top.png")} alt="Logo" />
          <ImgText>Top</ImgText>
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
