import { useState } from 'react';
import { instance } from '../axios/http';

export default function PostAPI() {
  const [error, setError] = useState(null);

  async function submitHandler(e) {
    e.preventDefault();

    // 3.new FormData()
    // 단 input태그에 name 속성이 필요하다
    // 복잡한(많은) 값이 있을 때 유용하다.
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
