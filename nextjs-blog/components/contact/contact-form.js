import { useState } from "react";
import classes from "./contact-form.module.css";

function ContactForm() {

  const [ enteredEmail,    setEnteredEmail   ] = useState("");
  const [ enteredName,     setEnteredName   ] = useState("");
  const [ enteredMessage,  setEnteredMessage ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userMessage = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    }

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(userMessage),
      headers: {
        "Content-Type": "application/json",
      }
    });
  }

  return (
      <section className={classes.contact}>
        <h1>How can I help you</h1>

        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.controls}>

            <div className={classes.control}>
              <label htmlFor="email">Your email</label>
              <input type="email"
                     id="email"
                     value={enteredEmail}
                     onChange={(event) => setEnteredEmail(event.target.value)}
                     required
              />
            </div>

            <div className={classes.control}>
              <label htmlFor="name">Your name</label>
              <input type="text"
                     id="neme"
                     value={enteredName}
                     onChange={(event) => setEnteredName(event.target.value)}
                     required
              />
            </div>

          </div>

          <div className={classes.control}>
            <label htmlFor="message">Your message</label>
            <textarea id="message"
                      value={enteredMessage}
                      onChange={(event) => setEnteredMessage(event.target.value)}
                      required
            />
          </div>

          <div className={classes.actions}>
            <button>Send Message</button>
          </div>

        </form>
      </section>
  );
}

export default ContactForm;