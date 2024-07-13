import { useState, useEffect } from 'react';
import './App.css';
import { useGetData } from './hooks/useGetData';

function App() {
  // const [isLoading, setIsLoading] = useState(null);
  // const [fetchedData, setFetchedData] = useState([]);
  // const [error, setError] = useState(null);

  /**
   * 기본 useEffect를 사용하는 방법
   * 단 이럴 경우 보일러플레이트 코드(Boilerplate Code)문제가 발생
   * 커스텀훅으로 해결 가능하다
   */
  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await instance.get('posts');
  //       setFetchedData(data);
  //     } catch (error) {
  //       setError({
  //         message: error.response.message || '데이터를 가져오는데 실패했습니다.',
  //         status: error.response.status,
  //       });
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   getData();
  // }, []);

  // 커스텀 훅으로 간결화
  const { isLoading, error, fetchedData } = useGetData('posts', []);

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
      {isLoading && <p>로딩중....</p>}
      {!isLoading && fetchedData.length === 0 && <p>데이터가 없는뎁쇼</p>}
      {!isLoading && fetchedData.length > 0 && (
        <ul>
          {fetchedData.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
