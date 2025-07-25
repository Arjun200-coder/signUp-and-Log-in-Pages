
function ServicesPage () {
  return (
    <>
     <section className="bg-[#f7f9fb] min-h-screen py-1 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          We offer a wide range of professional services to help your business grow. Here are some of our key services designed to deliver excellence and value.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* Service Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1042/1042330.png"
              alt="Delivery"
              className="w-[20rem] h-[20rem] mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Fast & Secure Delivery</h3>
            <p className="text-gray-600 text-sm">Get your products delivered quickly and safely at your doorstep with real-time tracking.</p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/726/726476.png"
              alt="Support"
              className="w-[20rem] h-[20rem] mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">24/7 Customer Support</h3>
            <p className="text-gray-600 text-sm">Our support team is available round the clock to help you with your queries and concerns.</p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              alt="Refund"
              className="w-[20rem] h-[20rem] mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Easy Return & Refund</h3>
            <p className="text-gray-600 text-sm">Not satisfied? Return the product easily and get a quick refund with minimal hassle.</p>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/929/929426.png"
              alt="Warranty"
              className="w-[20rem] h-[20rem] mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Product Warranty</h3>
            <p className="text-gray-600 text-sm">All our premium products come with full warranty coverage and guaranteed support.</p>
          </div>

          {/* Service Card 5 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Consultation"
              className="w-[20rem] h-[20rem] mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Free Consultation</h3>
            <p className="text-gray-600 text-sm">We offer expert consultation to help you make the right choices and grow your business.</p>
          </div>

          {/* Service Card 6 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
              alt="Integration"
              className="w-[20rem] h-[20rem] mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Custom Integrations</h3>
            <p className="text-gray-600 text-sm">We help integrate the right tools and technology for your business processes.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ServicesPage