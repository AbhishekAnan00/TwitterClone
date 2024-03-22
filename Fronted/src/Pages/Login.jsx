import React, { useState } from "react";
import twitter from "../assets/twitter.jpg";
import axios from "axios";
import { USER_API_END_POINT } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { getUser } from "../Redux/UserSlice";
const Login = () => {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (login) {
      //login
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(getUser(res?.data?.user))
        if (res.data.success) {
          window.location.href = "/";
          alert(res.data.message);
        }
        console.log(res);
      } catch (error) {
        alert(error.response.data.message);
        console.error("error :", error);
      }
    } else {
      //signup
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          { name, username, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          setLogin(true);
          alert(res.data.message);
        }
        console.log(res);
      } catch (error) {
        alert(error.response.data.message);
        console.error("error :", error);
      }
    }
  };
  const handleOnClick = () => {
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
          <p className="text-2xl font-semibold py-4">
            {login ? "signup" : "login"}
          </p>
          <form onSubmit={handleOnSubmit} className="flex flex-col">
            {login && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-sky-600 border-2 rounded-full p-2 outline-none bg-black my-2"
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-sky-600 border-2 rounded-full p-2 outline-none bg-black my-2"
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-sky-600 border-2 rounded-full p-2 outline-none bg-black my-2"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
