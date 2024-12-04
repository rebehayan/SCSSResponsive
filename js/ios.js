const userAgent = navigator.userAgent;
let version = null;

if (/iP(hone|od|ad)/.test(userAgent)) {
  // iOS User-Agent에서 버전 추출
  const match = userAgent.match(/OS (\d+_\d+(_\d+)?)/);
  if (match && match[1]) {
    version = match[1].replace(/_/g, "."); // iOS 버전을 '.'으로 구분하여 반환
  }
}

if (version) {
  document.body.classList.add("ios");
}
