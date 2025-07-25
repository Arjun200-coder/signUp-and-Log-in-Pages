
const products = [
  {
    id: 1,
    name: 'Oversized Hoodie',
    brand: 'ASOS DESIGN',
    price: '₹2,199',
    image:
      'https://nobero.com/cdn/shop/files/222C021C-8EFF-4A86-A782-A25876663738.jpg?v=1732879745',
  },
  {
    id: 2,
    name: 'Relaxed Fit Jeans',
    brand: 'Pull&Bear',
    price: '₹1,799',
    image:
      'https://cdn06.nnnow.com/web-images/large/styles/F3PA21C4L05/1736251394169/1.jpg',
  },
  {
    id: 3,
    name: 'Chunky Sneakers',
    brand: 'Nike',
    price: '₹5,499',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfYLyvbqKfBDqzQXw2T9rHA0s2IqDiXVEgA&s',
  },
  {
    id: 4,
    name: 'Casual Shirt',
    brand: 'ZARA',
    price: '₹1,299',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2023/3/294445171/SO/ST/AJ/103363258/men-regular-fit-solid-casual-shirt.jpg',
  },
  {
    id: 5,
    name: 'Puffer Jacket',
    brand: 'H&M',
    price: '₹3,999',
    image:
      'https://media.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000014300864-Purple-LILAC-1000014300864_01-2100.jpg',
  },
  {
    id: 6,
    name: 'Tote Bag',
    brand: 'ASOS Accessories',
    price: '₹899',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OwYWjBdui9T_Cr6sF9159uGWFVFkDc6how&s',
  },
];

function ProductsPage() {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Recommended Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
              <p className="text-lg font-bold text-blue-600 mb-4">
                {product.price}
              </p>
              <button className="mt-auto bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
