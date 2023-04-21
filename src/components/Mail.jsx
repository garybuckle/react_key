import React from 'react';
import { useState } from 'react';

function Mail() {
  const [errorMsg, setErrorMsg] = useState('Mail not checked');
  function handleMailInput(event) {
    const enteredMail = event.target.value;
    if (enteredMail.trim() === '' || !enteredMail.includes('@')) {
      setErrorMsg('Oops the E-Mail is not correct');
    } else setErrorMsg('Mail accepted');
  }

  return (
    <div>
      <input
        placeholder="Type in your Email Address"
        type="email"
        onBlur={handleMailInput}
      />
      <p>{errorMsg}</p>
    </div>
  );
}

export default Mail;
