import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LogINForm = ({ setLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdata] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormdata((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    toast.success("logged in");
    setLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-6 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
          Email Address <sup className="text-red-600">*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formdata.email}
          onChange={changeHandler}
          className="bg-slate-800 rounded-[0.5rem] text-white w-full px-[12px] py-[8px]"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
          Password <sup className="text-red-600">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter Password"
          value={formdata.password}
          onChange={changeHandler}
          className="bg-slate-800 rounded-[0.5rem] text-white w-full px-[12px] py-[8px]"
        />

        <span
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
          className="absolute right-3 top-[35px] cursor-pointer"
        >
          {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forget Password</p>
        </Link>
      </label>

      <button className="bg-yellow-500 text-black font-medium px-[12px] py-[8px] rounded-md">Sign In</button>
    </form>
  );
};

export default LogINForm;
