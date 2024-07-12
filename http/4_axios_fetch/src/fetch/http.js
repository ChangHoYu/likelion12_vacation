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

  // 이 코드가 필요한 이유
  // 기본적으로 잘못된 url이나 요청을 보내도 State는 fufilled 즉 resolve함수를 호출해서 이행이됨.
  // 단 잘못된 요청은 ok가 false로 되기에 if문의 !response.ok로 성공여부를 판단하고
  // 에러 객체를 만든 후 throw하여 에러처리를 하는 것
  // PromiseState는 rejected로 result는 에러 객체를 포함하고 있음.
  if (!response.ok) {
    const error = new Error(response.statusText || '데이터를 불러오는데 실패했습니다.');
    error.status = response.status;
    throw error;
  }

  return resData;
}

export async function fetchPostData() {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      title: 'fetch test',
      body: 'hello world',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const resData = response.json();

  if (!response.ok) {
    const error = new Error(response.statusText || '데이터를 생성하는데 실패했습니다.');
    error.status = response.status;
    throw error;
  }
  // 우리가 요청한 데이터가 담겨있음.
  return resData;
}
/**
 * PATCH vs PUT
 * The PUT method replaces all current representations of the target resource with the request payload. (MDN)
 * The PUT method requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message content. (RFC)
 */
export async function fetchPatchData() {
  const response = await fetch(url + '/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'fetch test',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error(response.statusText || '데이터를 변경하는데 실패했습니다.');
    error.status = response.status;
    throw error;
  }

  const resData = response.json();
  return resData;
}

export async function fetchPutData() {
  const response = await fetch(url + '/1', {
    method: 'PUT',
    body: JSON.stringify({
      title: 'fetch test',
      body: 'likelion_12 front_end_study',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error(response.statusText || '데이터를 변경하는데 실패했습니다.');
    error.status = response.status;
    throw error;
  }

  const resData = response.json();
  return resData;
}

export async function fetchDeleteData() {
  const response = await fetch(url + '/1', {
    method: 'Delete',
  });

  if (!response.ok) {
    const error = new Error(response.statusText || '데이터를 삭제하는데 실패했습니다.');
    error.status = response.status;
    throw error;
  }

  const resData = response.json();
  return resData;
}
