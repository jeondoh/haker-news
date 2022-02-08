import { useEffect, useState } from "react";
import { getUserInfo, IUserInfo } from "../utils/callApi";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { UserInfos, UserProfile, UserWrapper } from "../styles/UserStyle";
import { replaceUnixTime } from "../utils/utilsFn";

export default function User() {
  const [data, setData] = useState<IUserInfo>();
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  const paramName: string = params.name!;
  // 데이터 fetch
  // 단건 데이터 조회기 때문에 react-query 사용하지 않음
  useEffect(() => {
    const detailData: Promise<IUserInfo> = getUserInfo(paramName);
    detailData
      .then((value) => {
        setData(value);
      })
      .then(() => setLoading(false));
  }, [paramName]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <UserWrapper>
          <UserInfos>
            <UserProfile
              src={require("../images/userProfile.png")}
              alt="Profile"
            />
            <span>{data?.id}</span>
          </UserInfos>
          <UserInfos>
            <span>Created Time : {replaceUnixTime(data?.created)}</span>
          </UserInfos>
          <UserInfos>
            <span>karma : {data?.karma}</span>
          </UserInfos>
          <UserInfos>
            <span>submitted : {data?.submitted.length}</span>
          </UserInfos>
        </UserWrapper>
      ) : (
        <div>no profile</div>
      )}
    </>
  );
}
