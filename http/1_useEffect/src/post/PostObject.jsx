import { useState } from 'react';
import { instance } from '../axios/http';

export default function PostObject() {
  const [input, setInput] = useState({
    title: '',
    body: '',
    userId: 1,
  });
  const [error, setError] = useState(null);

  function inputHandler(identifier, e) {
    e.preventDefault();
    setInput(prev => ({
      ...prev,
      [identifier]: e.target.value,
    }));
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await instance.post('posts', input);
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
          <input id="title" type="text" name="title" onChange={e => inputHandler('title', e)} />
        </div>
        <div>
          <label htmlFor="body">content</label>
          <input id="body" type="text" name="body" onChange={e => inputHandler('body', e)} />
        </div>
        <button type="submit">완료</button>
      </form>
    </>
  );
}
