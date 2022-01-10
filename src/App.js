import logo from './logo.svg';
import React from "react";
import { Button } from 'antd';
// import './App.css';
import './App.scss';
import TEST from './pages/test/test';


const name = 'Jack'
const age = 20

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="name">
          我的名字是{name}，年龄{age}。
        </div>
        <div className="button-box">
          <Button type="primary">按钮</Button>
        </div>
      </header>
      {/*测试less使用*/}
      <div className="content-box">
        <TEST />
      </div>
    </div>
  );
}

export default App;
