import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import WhyChooseUs from './components/WhyChooseUs';
import ChatWidget from './components/ChatWidget';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="bg-blue-500 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-700 ease-in-out min-h-screen w-full flex flex-col">
        {/* Navbar Component */}
        <header className="p-6 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md max-w-5xl mx-auto w-full flex flex-col items-center">
          <Navbar />
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="mt-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300 shadow-md"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </header>

        <div className="w-full">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 text-center my-4">
            SoftSell
          </h1>
        </div>

        <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-8 space-y-12">
          <Routes>
            <Route path="/" element={
              <section
                id="hero"
                className="relative p-12 text-center bg-gradient-to-r from-primary-light via-primary to-primary-dark min-h-[90vh] flex flex-col justify-center items-center text-white overflow-hidden"
              >
                <h2 className="text-6xl font-heading font-extrabold mb-6 drop-shadow-xl animate-fadeInUp">
                  Grow Your Sales with SoftSell
                </h2>
                <p className="text-primary-light text-xl max-w-3xl mb-10 font-sans drop-shadow-md animate-fadeInUp delay-200">
                  We help businesses turn visitors into loyal customers with powerful and elegant landing pages.
                </p>
                <button className="bg-secondary hover:bg-secondary-dark text-white px-14 py-4 rounded-full shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl animate-bounce">
                  Get Started
                </button>
              </section>
            } />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-primary-dark dark:bg-gray-900 text-white text-center py-12 px-8 flex justify-center items-center">
          <div className="bg-black bg-opacity-70 p-8 rounded-md max-w-6xl w-full space-y-6">
            <h3 className="text-3xl font-heading font-bold mb-4">Get in Touch</h3>
            <p className="mb-2 font-sans text-lg">Email: support@softsell.com</p>
            <p className="mb-6 font-sans text-lg">Phone: +91 9876558 43210</p>
            <p className="text-sm font-sans">&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
          </div>
        </footer>

        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
