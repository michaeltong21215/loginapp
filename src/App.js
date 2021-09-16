import { useEffect, useState } from 'react';
import Login from './Login';
import HomePage from './HomePage';
import useLocalstorage from './hooks/useLocalStorage';

const App = () => {
  // const [isLoggedin, setIsLoggedIn] = useState(null);
  const [isLoggedin, setIsLoggedIn] = useLocalstorage('token', null);

  return (
    <div className='App'>
      {isLoggedin ? (
        <HomePage token={isLoggedin} />
      ) : (
        <Login setToken={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
