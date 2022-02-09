import { CommentWrapper } from "../styles/DetailCardStyle";
import Comment from "./Comment";

interface IComments {
  kidsIdArr: number[];
  newsId: number;
}

export default function Comments({ kidsIdArr, newsId }: IComments) {
  /**/
  console.log("______________________________________");
  console.log(kidsIdArr);
  console.log("______________________________________");
  return (
    <CommentWrapper>
      {kidsIdArr &&
        kidsIdArr.map((id) => (
          <Comment key={id} commentId={id} newsId={newsId} />
        ))}
    </CommentWrapper>
  );
}
