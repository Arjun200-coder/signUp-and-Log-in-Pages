

function HomePage () {
  return (
    <>
     <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Left */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Simplify Your Shopping Experience
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover top-rated products, fast delivery, and seamless customer support — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
              Shop Now
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-HqvbVMGk4eqFs1RT62Edy70Mn7fPl4c7w&s"
            alt="Homepage Banner"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default HomePage;