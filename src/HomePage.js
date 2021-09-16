import React, { useEffect } from 'react';

const HomePage = ({ token }) => {
  const getHelloWorld = () => {
    console.log('home page token: ', token);
    fetch('http://localhost:8080/v1/helloresources/welcomeToUser', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log('hello world data: ', data))
      .catch((err) => console.log('ui error: ', err));
  };

  useEffect(() => {
    getHelloWorld();
  }, []);

  return <div>Congrats! You have logged in successfully.</div>;
};

export default HomePage;
