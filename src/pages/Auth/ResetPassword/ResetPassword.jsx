import React, { useState } from 'react';

function ResetPasswordPage()  {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (!newPassword || !confirmPassword) {
      setError('Please fill in both fields');
      setMessage('');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password should be at least 6 characters');
      setMessage('');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setMessage('');
      return;
    }

    // Simulate success
    setMessage('Password has been successfully reset!');
    setError('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Reset Password</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">Enter your new password below.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          {message && <p className="text-green-500 text-sm mb-3">{message}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default ResetPasswordPage;



