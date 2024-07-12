import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { fetchDeleteData } from './fetch/http';
import { instance, axiosGet, axiosPost } from './axios/http';

function App() {
  // console.log(fetchDeleteData());
  // console.log(instance.get('/posts'));
  console.log(axiosPost('posts'));
  return <></>;
}

export default App;
