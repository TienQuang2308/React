// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // nếu dùng react-bootstrap
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import QuestionBank from './components/QuestionBank';

function App() {
  return (
    <div className="App" style={{ textAlign: 'left', marginTop: '50px' }}>
      <SignUpForm />
      <LoginForm />
      <QuestionBank />
    </div>
  );
}

export default App;