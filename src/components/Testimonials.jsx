export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-heading font-bold text-gray-800 dark:text-white mb-10">Customer Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-white dark:bg-gray-700 rounded shadow-lg">
            <p className="italic text-gray-700 dark:text-gray-300 mb-4">"SoftSell made it incredibly easy to sell our unused software licenses. Highly recommend!"</p>
            <h4 className="font-bold text-primary dark:text-primary-light">Jane Doe</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">CTO, TechCorp</p>
          </div>
          <div className="p-8 bg-white dark:bg-gray-700 rounded shadow-lg">
            <p className="italic text-gray-700 dark:text-gray-300 mb-4">"The valuation process was quick and transparent. Got paid faster than expected."</p>
            <h4 className="font-bold text-primary dark:text-primary-light">John Smith</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Operations Manager, SoftSolutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
