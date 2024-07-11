//import Basic from './Basic';
import './app.css';
import InnerComponent from './InnerComponent';
/**
 * 기본 css파일의 문제
 */
function App() {
  return (
    <>
      <div className="app-component">
        <p>App 컴포넌트</p>
        <button className="click-button">버튼</button>
        <InnerComponent />
      </div>
    </>
  );
}

export default App;
