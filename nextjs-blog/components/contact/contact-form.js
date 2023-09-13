import { useState, useEffect } from "react";
import { sendMessage } from "@/helpers/fetching";

import classes from "./contact-form.module.css";
import Notification from "@/ui/notification";

function ContactForm() {

  const [ enteredEmail, setEnteredEmail   ] = useState("");
  const [ enteredName, setEnteredName    ] = useState("");
  const [ enteredMessage, setEnteredMessage ] = useState("");
  const [ requestStatus, setRequestStatus  ] = useState(null);
  const [ requestError, setRequestError   ] = useState();

  useEffect(() => {
    if (requestStatus || requestStatus !== "pending") {
      const timerID = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000)

      return () => clearTimeout(timerID)
    }
  }, [requestStatus])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userMessage = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    }

    setRequestStatus("pending")

    try {
      await sendMessage(userMessage);
      setRequestStatus("success")
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("")
    } catch (error) {
      setRequestError(error.message)
      setRequestStatus("error")
    }
  }

  let notificationData;

  if (requestStatus === "pending") {
    notificationData = {
      status: "pending",
      title: "Sending message",
      message: "Your message is traveling through web"
    }
  } else if (requestStatus === "error") {
    notificationData = {
      status: "error",
      title: "Error",
      message: requestError
    }
  } else if (requestStatus === "success") {
    notificationData = {
      status: "success",
      title: "Success!",
      message: "Successfully sent the message!"
    }
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

        { notificationData &&
            <Notification
                status={notificationData.status}
                title={notificationData.title}
                message={notificationData.message}
            /> }

      </section>
  );
}

export default ContactForm;