import style from './styles.module.css';

const blogPosts = [
  {
    id: 1,
    title: 'Design Trends 2025',
    excerpt:
      'Explore the upcoming design trends that will shape digital products in 2025.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLt_yye_H3j32MTrE2gshIr8tFQSudToBQQ&s',
  },
  {
    id: 2,
    title: 'Why Responsive Design Matters',
    excerpt:
      "Learn why making your website responsive is essential in today's mobile-first world.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS41mxr06iLg3w5uDOjWcT9kVXuUQ0leKa0Eg&s',
  },
  {
    id: 3,
    title: 'Top UI/UX Tools',
    excerpt:
      'Check out the most popular tools used by designers and developers for stunning UI/UX.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPj8W4jCshf4P53ehZQtPtFBgGu258XZv60g&s',
  },
];

function BlogPage() {
  return (
    <section className={`${style.body} min-h-screen py-14 px-5 md:px-10`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-lg transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-medium hover:underline text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
