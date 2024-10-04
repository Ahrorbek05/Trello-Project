import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  let email = useRef("");
  let firstName = useRef("");
  let lastName = useRef("");
  let pass = useRef("");
  let confirmPass = useRef("");
  const navigate = useNavigate();
  function SignUping(e) {
    e.preventDefault();
    if (
      email == "" ||
      pass == "" ||
      confirmPass == "" ||
      firstName == "" ||
      lastName == "" ||
      email.current.value == "" ||
      pass.current.value == "" ||
      firstName.current.value == "" ||
      lastName.current.value == "" ||
      confirmPass.current.value == ""
    ) {
      alert("please fill in all inputs");
      return null;
    }
    let user = {
      email: email.current.value,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      password: pass.current.value,
      confirmPassword: confirmPass.current.value,
    };
    fetch("https://trello.vimlc.uz/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message == "Ushbu email allaqachon ro'yxatdan o'tgan") {
          alert(data.message);
        } else if (
          data.message ==
          "Ro'yxatdan muvaffaqiyatli o'tdingiz! Email tasdiqlash uchun havola yuborildi."
        ) {
          alert(data.message);
          navigate("/signin");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="hello pt-10 w-full h-full flex items-center justify-center relative">
      <Link to="/" className="btn-def border-def p-1 absolute top-4 left-4">
        <h1 className="text-[25px]">{`<Back`}</h1>
      </Link>
      <div className="w-[480px] p-5  h-[660px] border-def relative">
        <div className="decor flex gap-2">
          <div className="border-def w-3 h-3 bg-black"></div>
          <div className="border-def w-3 h-3"></div>
          <div className="border-def w-3 h-3 bg-black"></div>
        </div>
        <h1 className="text-[50px] text-center pt-12">Sign In</h1>
        <form className="flex flex-col gap-4">
          <label>
            <h1>Email</h1>
            <input
              ref={email}
              type="text"
              placeholder="example@gmail.com"
              className="w-full p-4 border-def"
            />
          </label>
          <div className="flex gap-4">
            <label>
              <h1>First Name</h1>
              <input
                ref={firstName}
                type="text"
                placeholder="Alex"
                className="w-full p-4 border-def"
              />
            </label>
            <label>
              <h1>Last Name</h1>
              <input
                ref={lastName}
                type="text"
                placeholder="Jhonson"
                className="w-full p-4 border-def"
              />
            </label>
          </div>
          <div className="flex gap-4">
            <label>
              <h1>Password</h1>
              <input
                ref={pass}
                type="text"
                placeholder="password"
                className="w-full p-4 border-def"
              />
            </label>
            <label>
              <h1>Confirm Password</h1>
              <input
                ref={confirmPass}
                type="text"
                placeholder="confirm"
                className="w-full p-4 border-def"
              />
            </label>
          </div>
        </form>
        <button
          className="btn-def border-def w-full mt-10 p-3"
          onClick={SignUping}
        >
          Sign up
        </button>
        <button
          onClick={() => navigate("/signin")}
          className="bg-black text-white btn-def border-def w-full mt-4 p-3"
        >
          {`Sign in > > >`}
        </button>
        <div className="decor flex gap-2 absolute bottom-5 right-5 ">
          <div className="border-def w-3 h-3 bg-black"></div>
          <div className="border-def w-3 h-3"></div>
          <div className="border-def w-3 h-3 "></div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
