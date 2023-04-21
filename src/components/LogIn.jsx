import React from 'react';
import { useState } from 'react';

function LogIn() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    errMsg: 'All Good So Far',
  });

  const emailEnteredHandler = (event) => {
    const enteredEmail = event.target.value;
    setUserData((prevUserData) => ({
      email: enteredEmail,
      password: prevUserData.password,
    }));
  };
  const passwordEnteredHandler = (event) => {
    const enteredPassword = event.target.value;
  };
  return (
    <>
      <div>
        <input
          placeholder="Type in your Email Address"
          type="email"
          onBlur={emailEnteredHandler}
        />
      </div>
      {userData.errMsg}
      {userData.email}
      <div>
        <input
          placeholder="Type in your Password"
          type="password"
          onBlur={passwordEnteredHandler}
        />
      </div>{' '}
    </>
  );
}

export default LogIn;
