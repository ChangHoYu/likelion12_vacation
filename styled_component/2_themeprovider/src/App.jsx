import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import TestComponent1 from './TestComponent1';
import TestComponent2 from './TestComponent2';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TestComponent1 />
        <TestComponent2 />
      </ThemeProvider>
    </>
  );
}

export default App;
