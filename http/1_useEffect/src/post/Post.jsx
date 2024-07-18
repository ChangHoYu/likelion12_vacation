import { useState } from 'react';
import { instance } from '../axios/http';

export default function Post() {
  /**
   * POST, PATCH, PUT <- 기본적으로 (1)입력을 받고 (2)입력 검증을 함
   * (1) 이건 할 만 하다
   * (2) 이게 좀 어렵다
   *
   * (1) 입력 받기
   * 1. 개별 상태
   * 2. 객체
   * 3. new FormData()
   */
  // 1. 개별 상태
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');

  //2 객체
  // const [input, setInput] = useState({
  //   title: '',
  //   body: '',
  //   userId: 1,
  // });
  const [error, setError] = useState(null);

  // 1. 개별 상태
  // function titleHandler(e) {
  //   setTitle(e.target.value);
  // }

  // function bodyHandler(e) {
  //   setBody(e.target.value);
  // }

  // 2. 객체
  // function inputHandler(identifier, e) {
  //   e.preventDefault();
  //   setInput(prev => ({
  //     ...prev,
  //     [identifier]: e.target.value,
  //   }));
  // }

  async function submitHandler(e) {
    e.preventDefault();

    // 3.new FormData()
    // 단 input태그에 name 속성이 필요하다
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    try {
      const response = await instance.post('posts', data);
      if (response.status === 201) {
        alert('성공적으로 데이터가 생성됐습니다.');
        console.log(response);
      }
    } catch (error) {
      setError({
        status: error.response.status,
        message: error.response.message || '데이터생성에실패했습니다.',
      });
    }
    e.target.reset();
  }

  if (error) {
    return (
      <>
        <p>{error.status}</p>
        <p>{error.message}</p>
      </>
    );
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">title</label>
          <input id="title" type="text" name="title" />
        </div>
        <div>
          <label htmlFor="body">content</label>
          <input id="body" type="text" name="body" />
        </div>
        <button type="submit">완료</button>
      </form>
    </>
  );
}
