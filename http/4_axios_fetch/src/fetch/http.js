/**
 * fetch
 *
 * const response = fetch(url, [, options])
 *
 * 1. fetch가 반환하는 프로미스는기본적으로 HTTP 에러가 발생해도 reject하지 않고 ok상태를 false로 설정한 Response 객체를 resolve한다,
 * 단 오프라인이나 네트워크 장애, cors는 reject한다.
 *
 * 2. fetch는 HTTP 요청 전송 기능을 제공하는 클라이언트 사이드 WEB API다
 *
 * 3. HTTP을 당을 나타내는 Response 객체를 래핑한 Promise 객체를 반환한다.
 *
 */

const url = import.meta.env.VITE_API;

export async function fetchGetData() {
  const response = await fetch(url);
  const resData = await response.json();

  if (!response.ok) {
    const error = new Error(response.statusText || '데이터를 불러오는데 실패했습니다.');
    error.status = response.status;
    throw error;
  }

  return resData;
}
