import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignIn() {
  let email = useRef("");
  let pass = useRef("");
  const navigate = useNavigate();

  function Signining(e) {
    e.preventDefault();
    if (
      email == "" ||
      pass == "" ||
      email.current.value == "" ||
      pass.current.value == ""
    ) {
      alert("please fill in all inputs");
      return null;
    }
    let user = {
      email: email.current.value,
      password: pass.current.value,
    };

    fetch("https://trello.vimlc.uz/api/auth/login", {
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
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        // navigate("/");
        // location.reload();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="hello pt-10 w-full h-full flex items-center justify-center relative">
      <Link to="/" className="btn-def border-def p-1 absolute top-4 left-4">
        <h1 className="text-[25px]">{`<Back`}</h1>
      </Link>
      <div className="w-[480px] p-5 mt-10 h-[560px] border-def relative">
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
          <label>
            <h1>Password</h1>
            <input
              ref={pass}
              type="text"
              placeholder="password"
              className="w-full p-4 border-def"
            />
          </label>
        </form>
        <button
          className="btn-def border-def w-full mt-10 p-3"
          onClick={Signining}
        >
          Sign in
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-black text-white btn-def border-def w-full mt-4 p-3"
        >
          {`Sign up > > >`}
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

export default SignIn;
