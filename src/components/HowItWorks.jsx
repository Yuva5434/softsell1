export default function HowItWorks() {
  return (
<section id="how-it-works" className="bg-white dark:bg-gray-900 min-h-screen py-20 px-12 flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-heading font-extrabold text-primary-dark dark:text-primary-light mb-12">SoftSell</h1>
      <h3 className="text-5xl font-heading font-bold text-gray-800 dark:text-white mb-16 tracking-wide">How It Works</h3>
      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-16 text-left">
        <button className="p-10 shadow-card rounded bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition cursor-pointer flex flex-col items-center focus:outline-none focus:ring-4 focus:ring-secondary">
          <div className="mb-6 text-secondary text-7xl">📤</div>
          <h4 className="text-3xl font-semibold mb-4 text-primary dark:text-primary-light">Upload License</h4>
          <p className="text-gray-700 dark:text-gray-300 font-sans text-center text-lg">Easily upload your software licenses to get started.</p>
        </button>
        <button className="p-10 shadow-card rounded bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition cursor-pointer flex flex-col items-center focus:outline-none focus:ring-4 focus:ring-secondary">
          <div className="mb-6 text-secondary text-7xl">💰</div>
          <h4 className="text-3xl font-semibold mb-4 text-primary dark:text-primary-light">Get Valuation</h4>
          <p className="text-gray-700 dark:text-gray-300 font-sans text-center text-lg">Receive a fair market valuation for your licenses.</p>
        </button>
        <button className="p-10 shadow-card rounded bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition cursor-pointer flex flex-col items-center focus:outline-none focus:ring-4 focus:ring-secondary">
          <div className="mb-6 text-secondary text-7xl">🏦</div>
          <h4 className="text-3xl font-semibold mb-4 text-primary dark:text-primary-light">Get Paid</h4>
          <p className="text-gray-700 dark:text-gray-300 font-sans text-center text-lg">Secure and fast payment directly to your account.</p>
        </button>
      </div>
    </section>
  );
}
