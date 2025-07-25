import { Outlet, NavLink } from 'react-router-dom';

function AuthLayoutPage() {
  return (
    <>
      {/* <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Auth System</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <NavLink to="/" className="hover:underline">Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="min-h-[80vh] flex items-center justify-center bg-gray-100 py-10 px-4">
        <div className="w-full max-w-[34rem] bg-white p8 rounded-xl shadow-lg">
          <Outlet />
        </div>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="max-w-5xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm ">
            <li>
              <NavLink to="/" className="hover:text-blue-500 hover:underline">Log In</NavLink>
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
      </footer> */}
    </>
  );
}

export default AuthLayoutPage;
