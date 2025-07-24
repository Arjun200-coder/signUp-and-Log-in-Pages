import React, {useState} from 'react';


function RegisterPage()  {

const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setSubmitSuccess('');

    const Name = document.getElementById("name").value.trim();
    const Email = document.getElementById("email").value.trim();
    const Password = document.getElementById("password").value.trim();

    let isValid = true;

    if (Name === '') {
      setNameError("Please enter your name");
      isValid = false;
    }

    if (!Email.includes('@') || !Email.includes('.')) {
      setEmailError("Please enter a valid email");
      isValid = false;
    }

    if (Password.length < 6 || Password.includes(' ')) {
      setPasswordError("Password must be at least 6 characters and contain no spaces");
      isValid = false;
    }

    if (isValid) {
      const userData = { name: Name, email: Email, password: Password };
      console.log("Form Data:", userData);
      document.getElementById("form").reset();
      setSubmitSuccess("Form has submitted successfully.");
    }
  };

  return (
    <>
    <div id="main-content" className="flex justify-center items-center pb-8">
      <form id="form" onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 mt-8 flex flex-col w-[30rem] h-[43rem] shadow-[12px_12px_2px_1px_rgba(130,130,233,0.2)]">
        <div className="flex flex-col items-center mb-6">
      <img
        src="https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?semt=ais_hybrid&w=740"
        alt="logo"
        className="w-14 h-14 mb-2"
      />
      <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
      <p className="text-gray-500 text-sm">Sign up in your account to continue</p>
    </div>
        <label htmlFor="name" className="text-gray-900 mt-3">Full Name</label>
        <input type="text" id="name" placeholder="Enter your name" required className=" rounded-lg border-1 border-gray-300 mt-2 p-3 text-base" />
        <span id="nameError" className="mt-2 text-sm text-red-600">{nameError}</span>

        <label htmlFor="email" className="text-gray-900 mt-3">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email" 
        required 
        className="rounded-lg border-1 border-gray-300 mt-2 p-3 text-base" />
        <span id="emailError" className="mt-2 text-sm text-red-600">{emailError}</span>

        <label htmlFor="password" className="text-gray-900 mt-3">Password</label>
        <input
      type="password"
      id="password"
      placeholder="Enter your password"
      required
      className="rounded-lg border-1 border-gray-300 p-3  text-base"/>
    <span id="passwordError" className="text-sm text-red-600">{passwordError}</span>
        <button
      type="submit"
      id="signInBtn"
      className="mt-6 px-9 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg">
     Sign Up
    </button>
    <span id="submitSuccessfully" className="text-sm text-green-600 font-semibold mt-1 min-h-[10px] block">
      {submitSuccess}
    </span>
        <div className='mt-2 divider text-sm text-gray-600 my-1 text-center'>Or continue with</div>
        <div className="flex justify-between gap-3 mt-2">
      <button className="flex items-center justify-center gap-2 flex-1 border border-gray-300 rounded-xl p-3 text-sm font-semibold bg-white hover:bg-gray-100 transition duration-300">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Google
      </button>

      <button className="flex items-center justify-center gap-2 flex-1 border border-gray-300 rounded-xl p-3 text-sm font-semibold bg-white hover:bg-gray-100 transition duration-300">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_ps_PWPSsQ0ZeX7Zsqvtu_30qFYpdmW-0g&s"
          alt="Apple"
          className="w-5 h-5"
        />
        Apple
      </button>
    </div>
      </form>
    </div>
    </>
  )
}

export default RegisterPage