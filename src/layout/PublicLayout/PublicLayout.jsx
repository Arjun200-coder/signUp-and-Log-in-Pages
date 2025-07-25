import { NavLink, Outlet } from 'react-router-dom';

function PublicLayoutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">MyStore</h1>

          <nav>
            <ul className="flex space-x-6 text-gray-700 font-medium text-sm">
              <li>
                <NavLink to="/" className="hover:text-blue-500">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about_us_page" className="hover:text-blue-500">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/product_page" className="hover:text-blue-500">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog_page" className="hover:text-blue-500">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact_us_page" className="hover:text-blue-500">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services_page" className="hover:text-blue-500">
                  Services
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 border-t">
        © 2025 MyStore. All rights reserved.
      </footer> */}

      <footer className="bg-gray-200 py-4">
              <div className="max-w-5xl mx-auto px-4">
                <ul className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm ">
                  <li>
                    <NavLink to="Login" className="hover:text-blue-500 hover:underline">Log In</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className="hover:text-blue-500 hover:underline">Register Now</NavLink>
                  </li>
                  <li>
                    <NavLink to="/forgot-password" className="hover:text-blue-500 hover:underline">Forgot Password</NavLink>
                  </li>
                  <li>
                    <NavLink to="/reset-password" className="hover:text-blue-500 hover:underline">Reset Password</NavLink>
                  </li>
                </ul>
              </div>
            </footer>
    </div>
  );
}

export default PublicLayoutPage;
