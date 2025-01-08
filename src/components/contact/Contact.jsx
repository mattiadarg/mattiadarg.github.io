import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';
import {useTranslation} from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_36b9u4p',
        'template_49zqar2',
        formRef.current,
        'RPkPEHuXhGLJs5ql3'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h2>{t('contactMe')}</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mattiadarg@gmail.com</h5>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mattiadarg@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
              {t('sendM')}
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder={t('name')}
              name="user_name"
              required
          />
          <input
              type="text"
              placeholder={t('mail')}
              name="user_email"
              required
          />
          <textarea
              placeholder={t('mex')}
              rows="7"
              name="message"
              required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t('send')}
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
