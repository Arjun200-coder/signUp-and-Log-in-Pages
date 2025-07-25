import { useState } from 'react';

function ForgetPasswordPage()  {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email address');
      setMessage('');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      setMessage('');
      return;
    }

    setMessage('If this email is registered, a reset link has been sent!');
    setError('');
    setEmail('');
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Forgot Password</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">Enter your email address and we'll send you a link to reset your password.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          {message && <p className="text-green-500 text-sm mb-3">{message}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default ForgetPasswordPage