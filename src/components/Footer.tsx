import {
  Img,
  ImgText,
  StyledNavLink,
  Wrapper,
  WrapperFlex,
  WrapperImg,
} from "../styles/FooterStyle";

export default function Footer() {
  return (
    <Wrapper>
      <WrapperFlex>
        <WrapperImg>
          <StyledNavLink to="/top">
            <Img src={require("../images/top.png")} alt="Logo" />
            <ImgText>Top</ImgText>
          </StyledNavLink>
        </WrapperImg>
        <WrapperImg>
          <StyledNavLink to="/new">
            <Img src={require("../images/new.png")} alt="Logo" />
            <ImgText>New</ImgText>
          </StyledNavLink>
        </WrapperImg>
        <WrapperImg>
          <StyledNavLink to="/ask">
            <Img src={require("../images/ask.png")} alt="Logo" />
            <ImgText>Ask</ImgText>
          </StyledNavLink>
        </WrapperImg>
        <WrapperImg>
          <StyledNavLink to="/show">
            <Img src={require("../images/show.png")} alt="Logo" />
            <ImgText>Show</ImgText>
          </StyledNavLink>
        </WrapperImg>
        <WrapperImg>
          <StyledNavLink to="/job">
            <Img src={require("../images/jobs.png")} alt="Logo" />
            <ImgText>Jobs</ImgText>
          </StyledNavLink>
        </WrapperImg>
      </WrapperFlex>
    </Wrapper>
  );
}
