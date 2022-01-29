import {
  Img,
  Img_Text,
  Wrapper,
  Wrapper_Flex,
  Wrapper_Img,
} from "../styles/FooterStyle";

export default function Footer() {
  return (
    <Wrapper>
      <Wrapper_Flex>
        <Wrapper_Img>
          <Img src={require("../images/top.png")} alt="Logo" />
          <Img_Text>Top</Img_Text>
        </Wrapper_Img>
        <Wrapper_Img>
          <Img src={require("../images/new.png")} alt="Logo" />
          <Img_Text>New</Img_Text>
        </Wrapper_Img>
        <Wrapper_Img>
          <Img src={require("../images/ask.png")} alt="Logo" />
          <Img_Text>Ask</Img_Text>
        </Wrapper_Img>
        <Wrapper_Img>
          <Img src={require("../images/show.png")} alt="Logo" />
          <Img_Text>Show</Img_Text>
        </Wrapper_Img>
        <Wrapper_Img>
          <Img src={require("../images/jobs.png")} alt="Logo" />
          <Img_Text>Jobs</Img_Text>
        </Wrapper_Img>
      </Wrapper_Flex>
    </Wrapper>
  );
}
