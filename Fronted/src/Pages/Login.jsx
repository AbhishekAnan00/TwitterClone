import React, { useState } from "react";
import twitter from "../assets/twitter.jpg";
const Login = () => {
  const [login, setLogin] = useState(true);
  const handleOnClick = (e) => {
    e.preventDefault();
    setLogin(!login);
  };
  return (
    <div className="w-screem h-screen flex items-center justify-center">
      <div className="flex items-center justify-around w-[80%]">
        <div>
          <img src={twitter} width={"500px"} className="ml-5 border-none" />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-extrabold text-4xl">Happening now</h1>
          </div>
          <p className="text-2xl font-semibold py-4">{login ? "signup" : "login"}</p>
          <form action="" className="flex flex-col">
            {login && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-sky-600 border-2 rounded-full p-2 outline-none bg-black my-2"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="border-sky-600 border-2 rounded-full p-2 outline-none bg-black my-2"
                />
              </>
            )}

            <input
              type="text"
              placeholder="Email"
              className="border-sky-600 border-2 rounded-full p-2 outline-none bg-black my-2"
            />
            <input
              type="text"
              placeholder="Password"
              className="border-sky-600 border-2 rounded-full p-2 outline-none bg-black my-2"
            />
            <button className="text-white font-semibold bg-sky-600 hover:bg-black hover:border-sky-600 hover:border-2 py-2 mt-4 rounded-full text-lg">
            {login ? "Create Account" : "login"}
            </button>
            <h1 className="my-2 text-zinc-500">
              {login ? "Already have an account !" : "Don't have an account ?"}
              <span
                onClick={handleOnClick}
                className="text-sky-600 mx-3 font-semibold cursor-pointer"
              >
                {login ? "Login" : "signup"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
