import { useState, useEffect } from "react";

const Form = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);

  const disableErrorMsg = () => {
    setIsError(false);
    setErrorMsg("");
  };

  useEffect(() => {
    if (isError) {
      setTimeout(disableErrorMsg, 5000);
    }
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  }, [isError, isSuccess]);

  const sendForm = async (data: any) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res);
      if (res.status === 429) throw new Error(res.statusText);
      setIsSuccess(true);
    } catch (err: any) {
      setIsError(true);
      setErrorMsg(err.message);
      console.log(err.stack);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    sendForm(data);
  };

  return (
    <>
      {isError && (
        <div className="mailForm__notify mailForm__notify--error">
          Error: {errorMsg}
        </div>
      )}
      {isSuccess && (
        <div className="mailForm__notify mailForm__notify--success">
          Message sent!
        </div>
      )}
      <form className="mailForm" onSubmit={onSubmit}>
        <label>Mail me!</label>
        <div className="mailForm__inputRow">
          <label>first name:</label>
          <input type="text" name="first_name" required />
        </div>
        <div className="mailForm__inputRow">
          <label>last name:</label>
          <input type="text" name="last_name" required />
        </div>
        <div className="mailForm__inputRow">
          <label>your email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="mailForm__inputRow">
          <label>message:</label>
          <textarea name="message" rows={5} required />
        </div>
        <button className="mailForm__button">
          <div className="icon">&#xf1d8;</div>
          <div>Send</div>
        </button>
      </form>
    </>
  );
};

export default Form;
