import React from 'react';
import { useState } from 'react';

function Mail() {
  const [errorMsg, setErrorMsg] = useState('Mail not checked');
  const [viewMailMsg, setViewMailMsg] = useState(false);

  function handleMailInput(event) {
    const enteredMail = event.target.value;
    if (enteredMail.trim() === '' || !enteredMail.includes('@')) {
      setErrorMsg('Oops the E-Mail is not correct');
    } else setErrorMsg('Mail accepted');
  }
  const handleViewButton = (event) => {
    const viewMailMsg = event.target.value;
    setViewMailMsg(true);
  };

  return (
    <>
      <div>
        <input
          placeholder="Type in your Email Address"
          type="email"
          onBlur={handleMailInput}
        />
        <p>{errorMsg}</p>
      </div>
      <div>
        <textArea placeholder="Type in your mail message"></textArea>
      </div>
      <button className="round-button" onClick={handleViewButton}>
        View Mail
      </button>
      {viewMailMsg ? <div className="mail-msg"> Mail message</div> : null}
    </>
  );
}

export default Mail;
