import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { fetchDeleteData } from './fetch/http';

function App() {
  console.log(fetchDeleteData());
  return <></>;
}

export default App;
