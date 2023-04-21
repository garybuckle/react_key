import React from 'react';
import { useState } from 'react';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const resetNewsLeterField = (event) => {
    setEmail('');
  };
  return (
    <div>
      <div className="title">Newsletter</div>
      <input
        type="email"
        placeholder=" Your Mail Address"
        value={email}
        onChange={changeEmailHandler}
      />
      <div>
        <button onClick={resetNewsLeterField}>Clear Field</button>
      </div>
    </div>
  );
}

export default NewsLetter;
