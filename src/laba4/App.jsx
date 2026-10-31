import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Reviews from './Reviews';
import ContactForm from './ContactForm';

const App = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const hours = new Date().getHours();
    const isDay = hours >= 7 && hours < 21;
    setTheme(isDay ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <h1>Мій сайт</h1>
        <button onClick={toggleTheme}>
          Переключити на {theme === 'light' ? 'Темну' : 'Світлу'} тему
        </button>
      </header>

      <main>
        <Reviews />
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;