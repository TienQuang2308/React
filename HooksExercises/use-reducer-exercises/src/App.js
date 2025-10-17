// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // nếu dùng react-bootstrap
import CounterComponent from './components/CounterComponent';
import LightSwitch from './components/LightSwitch';
import LoginForm from './components/LoginForm';
import QuestionBank from './components/QuestionBank';

function App() {
  return (
    <div className="App" style={{ textAlign: 'left', marginTop: '50px' }}>
      <CounterComponent />
      <LightSwitch />
      <LoginForm />
      <QuestionBank />
    </div>
  );
}

export default App;
