import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  console.log(params.id);
  return null;
}
