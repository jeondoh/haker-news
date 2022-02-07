// 카테고리 URL 가져오기
export const subTitleUrl = (urlStr: string): string => {
  const reUrl = urlStr?.match(/^(http(s)?:\/\/)([a-z0-9-_.]*)/);
  if (reUrl) {
    return reUrl[0].replace(/^((http)(s)?:\/\/)?(www\.)?/, "");
  }
  return "";
};
// 현재시간과 작성시간 시간 차이 return 함수
export const getDiffCurrentTime = (unixTime: number): string => {
  // 데이터가 Unix 시간으로 들어옴
  const now = new Date();
  const writeDate = new Date(unixTime * 1000);
  const diffTime = now.getTime() - writeDate.getTime();
  const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diffTime / (1000 * 60 * 60));
  const diffMinute = Math.floor(diffTime / (1000 * 60));

  let resultDiff = `${diffMinute} m ago`;
  if (diffMinute >= 60) {
    resultDiff = `${diffHour} h ago`;
    if (diffHour >= 24) {
      resultDiff = `${diffDay} d ago`;
    }
  }
  return resultDiff;
};
// 특수문자 제거
export const removeHTMLEntities = (
  textData: string,
  isSlice: boolean
): string => {
  if (textData) {
    let result = isSlice ? textData.slice(0, 300) : textData;
    result = result.replaceAll(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, " ");
    result = result.replaceAll(
      /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/gi,
      " "
    );
    result = result.replaceAll("&#x27;", "'");
    return `${result}...`;
  }
  return "NO TEXT";
};
