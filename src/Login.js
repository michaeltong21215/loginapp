import React, { useState } from 'react';

const Login = ({ setToken = {} }) => {
  const [creds, setCreds] = useState({ username: '', password: '' });

  const submitForm = () => {
    fetch('http://localhost:8080/authenticate', {
      method: 'post',
      body: JSON.stringify(creds),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setToken(data.jwttoken));
  };

  const setUserName = (e) => {
    const oldCreds = creds;
    setCreds({
      ...oldCreds,
      username: e.target.value,
    });
  };

  const setPassword = (e) => {
    const oldCreds = creds;
    setCreds({
      ...oldCreds,
      password: e.target.value,
    });
  };

  return (
    <>
      <div>
        <div>username:</div>
        <input type='text' name='username' onChange={setUserName} />
      </div>
      <div>
        <div>password:</div>
        <input type='password' name='password' onChange={setPassword} />
      </div>
      <button onClick={submitForm}>Submit</button>
    </>
  );
};

export default Login;
