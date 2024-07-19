import { useRef, useState } from 'react';
import { instance } from '../axios/http';

/**
 * Changing a ref does not trigger a re-render.(공식문서)
 * ref를 사용해야하는 상황(공식문서)
 * Storing timeout IDs
 * Storing and manipulating DOM elements, which we cover on the next page
 * Storing other objects that aren’t necessary to calculate the JSX.
 * useRef는 리렌더링을 일으키지 않는다. <- 성능면에서 더 좋을 수 있다.
 * 하지만 useRef는 남발 하면 안된다.
 * useRef로 값을 조작할 수 있다. 하지만 이런 조작은 대체적으로 피해야 한다.
 */
export default function PostRef() {
  const title = useRef(null);
  const body = useRef(null);
  const [error, setError] = useState(null);

  async function submitHandler(e) {
    const enteredTitle = title.current.value;
    const enteredBody = body.current.value;

    const input = {
      title: enteredTitle,
      body: enteredBody,
    };
    console.log(input);
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
          <input id="title" type="text" name="title" ref={title} />
        </div>
        <div>
          <label htmlFor="body">content</label>
          <input id="body" type="text" name="body" ref={body} />
        </div>
        <button type="submit">완료</button>
      </form>
    </>
  );
}
