import React, { useState, useRef, useEffect } from 'react';

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const redInputBorder = {
  borderColor: "red"
};

function Newsletter({ emailExists, onSubmit }) {
  const [emailInvalid, setEmailInvalid] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (emailExists) {
      inputRef.current.value = "Subscriber Already Exists";
      setEmailInvalid(true);
    }
  }, [emailExists]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(inputRef.current.value)) {
      setEmailInvalid(true);
      return;
    }

    setEmailInvalid(false);
    onSubmit(inputRef.current.value.toLowerCase());
    inputRef.current.value = "Subscribed. Thank You!";
  }

  const emailError = emailInvalid ? (
    <label className="emailInvalid">Email Invalid</label>
  ) : null;

  const inputErrorBorder = emailError ? redInputBorder : null;

  return (
    <div className="newsletter">
      <div className="newsletterTitle">
        <span className="newsletterTitletext">
          Join The Newsletter
        </span>
      </div>

      <div className="newsletterSignup">
        <form 
          className="newsletterForm"
          onSubmit={handleSubmit}
        >
          {emailError}
          <input
            ref={inputRef}
            className="newsletterInput"
            style={inputErrorBorder}
            type="text"
            placeholder="Enter your email"
            required
          />
        
          <button
            className="submitBtn"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;