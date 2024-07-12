/**
 * axios
 *
 * 1. 브라우저와 node.js에서 사용할 수 있는 Promise 기반 HTTP 클라이언트 라이브러리
 * 2. 특징
 *  - Promise API를 지원
 *  - 요청 및 응답 인터셉트
 *  - 요청 및 응답 데이터 변환
 *  - 요청 취소
 *  - JSON 데이터 자동 변환
 *  - XSRF를 막기 위한 클라이언트 사이드 지원
 * 3. 설치
 * - npm i axios
 * - yarn add axios
 */

/**
 *  axios 인스턴스
 * - 사용자 지정 confing로 새로운 인스턴스 생성 가능
 */
import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  // timeout은 ms로 시간을 지정, timeout보다 오래걸리면 요청이 중단된다.
  // 기본값은 0
  timeout: 1000,
  // header로 커스텀 헤더도 가능하다
});

export async function axiosGet(url) {
  try {
    const { data } = await instance.get(`/${url}`);
    return data;
  } catch (error) {
    console.log(error.response.message || '데이터를 가져오는데 실패했습니다.');
    console.log(error.response.status);
  }
}

export async function axiosPost(url) {
  try {
    const { data } = await instance.post(
      `/${url}`,
      {
        title: 'fetch test',
        body: 'hello world',
        userId: 1,
      },
      { 'Content-Type': 'application/json' },
    );
    return data;
  } catch (error) {
    console.log(error.response.message || '데이터를 생성하는데 실패했습니다.');
    console.log(error.response.status);
  }
}
// 나머지 delete, patch, put은 여러분이 직접 작성해보세요.

/**
 * 인터셉터
 */
