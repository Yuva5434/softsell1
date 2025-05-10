export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white dark:bg-gray-900 min-h-screen py-20 px-12 flex flex-col justify-center items-center text-center">
      <h2 className="text-5xl font-heading font-bold text-primary-dark dark:text-primary-light mb-12">Why Choose Us</h2>
      <div className="max-w-5xl w-full grid md:grid-cols-4 gap-12 text-left">
        <div className="p-8 shadow-card rounded bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition flex flex-col items-center">
          <div className="mb-6 text-secondary text-7xl">⚡</div>
          <h4 className="text-2xl font-semibold mb-4 text-primary dark:text-primary-light">Fast & Easy</h4>
          <p className="text-gray-700 dark:text-gray-300 font-sans text-center text-lg">Quickly upload and sell your licenses with minimal hassle.</p>
        </div>
        <div className="p-8 shadow-card rounded bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition flex flex-col items-center">
          <div className="mb-6 text-secondary text-7xl">🔒</div>
          <h4 className="text-2xl font-semibold mb-4 text-primary dark:text-primary-light">Secure Transactions</h4>
          <p className="text-gray-700 dark:text-gray-300 font-sans text-center text-lg">Your data and payments are protected with top-notch security.</p>
        </div>
        <div className="p-8 shadow-card rounded bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition flex flex-col items-center">
          <div className="mb-6 text-secondary text-7xl">💼</div>
          <h4 className="text-2xl font-semibold mb-4 text-primary dark:text-primary-light">Trusted by Professionals</h4>
          <p className="text-gray-700 dark:text-gray-300 font-sans text-center text-lg">Join thousands of satisfied customers and businesses.</p>
        </div>
        <div className="p-8 shadow-card rounded bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition flex flex-col items-center">
          <div className="mb-6 text-secondary text-7xl">🌍</div>
          <h4 className="text-2xl font-semibold mb-4 text-primary dark:text-primary-light">Global Reach</h4>
          <p className="text-gray-700 dark:text-gray-300 font-sans text-center text-lg">Sell your licenses to buyers worldwide with ease.</p>
        </div>
      </div>
    </section>
  );
}
