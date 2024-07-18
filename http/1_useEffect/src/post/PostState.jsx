import { useState } from 'react';
import { instance } from '../axios/http';

export default function PostState() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function bodyHandler(e) {
    setBody(e.target.value);
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await instance.post('posts', {
        title,
        body,
      });
      if (response.status === 201) {
        alert('성공적으로 데이터가 생성됐습니다.');
        console.log(response);
      }
    } catch (error) {
      setError({
        status: error.response.status,
        message: error.response.message || '데이터생성에실패했습니다.',
      });
      console.log(error);
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
          <input id="title" type="text" name="title" onChange={titleHandler} />
        </div>
        <div>
          <label htmlFor="body">content</label>
          <input id="body" type="text" name="body" onChange={bodyHandler} />
        </div>
        <button type="submit">완료</button>
      </form>
    </>
  );
}
