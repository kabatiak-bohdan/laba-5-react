import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          &times;
        </button>
        <h3>Форма зворотного зв'язку</h3>
        <form action="https://formspree.io/f/mnppdobq" method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Ваше ім'я" required />
          <input type="email" name="email" placeholder="Ваш Email" required />
          <input type="tel" name="phone" placeholder="Номер телефону" required />
          <textarea name="message" placeholder="Ваше повідомлення" rows="4" required></textarea>
          <button type="submit" className="submit-btn">Надіслати</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;