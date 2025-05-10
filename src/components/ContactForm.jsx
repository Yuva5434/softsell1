import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.licenseType) newErrors.licenseType = 'License type is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted! (frontend validation only)');
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
    }
  };

  return (
<section id="contact" className="bg-white dark:bg-gray-900 min-h-screen py-20 px-12 flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-heading font-extrabold text-primary-dark dark:text-primary-light mb-12">SoftSell</h1>
      <h3 className="text-5xl font-heading font-bold text-gray-800 dark:text-white mb-16 tracking-wide">Contact Us</h3>
      <div className="max-w-3xl w-full">
        <form className="space-y-8" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300 text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-4 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white text-lg ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300 text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-4 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white text-lg ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="company" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300 text-lg">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white text-lg"
            />
          </div>
          <div>
            <label htmlFor="licenseType" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300 text-lg">License Type</label>
            <select
              id="licenseType"
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className={`w-full p-4 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white text-lg ${
                errors.licenseType ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            >
              <option value="">Select a license type</option>
              <option value="single">Single User</option>
              <option value="multi">Multi User</option>
              <option value="enterprise">Enterprise</option>
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm mt-2">{errors.licenseType}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block mb-3 font-semibold text-gray-700 dark:text-gray-300 text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white text-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-secondary hover:bg-secondary-dark text-white px-10 py-4 rounded-full shadow-lg transition text-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
