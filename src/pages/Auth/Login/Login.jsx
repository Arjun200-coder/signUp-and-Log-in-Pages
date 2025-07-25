import {useState} from 'react';

function LoginPage()  {

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    setSubmitSuccess('');

    const Email = document.getElementById("email");
    const Pswd = document.getElementById("password");
    const CurrentEmail = Email.value.trim();
    const CurrentPassword = Pswd.value.trim();
    let IsValid = true;

    if (!CurrentEmail.includes('@') || !CurrentEmail.includes('.')) {
      setEmailError("Please fill valid email");
      IsValid = false;
    }

    if (CurrentPassword.length < 6 || CurrentPassword.includes(' ')) {
      setPasswordError("Please fill valid password");
      IsValid = false;
    }

    if (IsValid) {
      const userData = {
        email: CurrentEmail,
        password: CurrentPassword
      };
      console.log("Form Data:", userData);
      document.getElementById("form").reset();
      setSubmitSuccess("Form has submitted successfully.");
    }
  };

  return (
    <>
    <div id="main-content" className="min-h-screen flex justify-center items-center bg-[#f7f7fc] my-7">
    <form
    id="form"
    onSubmit={handleSubmit}
    className="p-10 sm:p-6 md:p-10 bg-white rounded-2xl w-full max-w-md md:w-[30rem] h-[40rem] shadow-lg flex flex-col gap-3 my-6">
    <div className="flex flex-col items-center mb-6">
      <img
        src="https://img.freepik.com/premium-vector/secure-login-form-page-with-password-computer-padlock-3d-vector-icon-cartoon-minimal-style_365941-1119.jpg?semt=ais_hybrid&w=740"
        alt="logo"
        className="w-14 h-14 mb-2"
      />
      <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
      <p className="text-gray-500 text-sm">Log in to your account to continue</p>
    </div>

    <label htmlFor="email" className="text-gray-900 font-medium">Email Address</label>
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      required
      className="rounded-lg border border-gray-300 p-3 text-base"
    />
    <span id="emailError" className="text-sm text-red-600">{emailError}</span>

    <label htmlFor="password" className="text-gray-900 font-medium">Password</label>
    <input
      type="password"
      id="password"
      placeholder="Enter your password"
      required
      className="rounded-lg border border-gray-300 p-3 text-base"
    />
    <span id="passwordError" className="text-sm text-red-600">{passwordError}</span>

    <button
      type="submit"
      id="signInBtn"
      className="mt-1 px-9 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg"
    >
     Log In
    </button>

    <span id="submitSuccessfully" className="text-sm text-green-600 font-semibold mt-1 min-h-[10px] block">
      {submitSuccess}
    </span>

    <div className="text-center text-sm text-gray-500 my-2">Or continue with</div>

    <div className="flex justify-between gap-3 mt-1">
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

export default LoginPage



    