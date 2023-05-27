import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [accountType , setAccountType] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormdata((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formdata.password, formdata.confirmPassword);
    if (formdata.password !== formdata.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setLoggedIn(true);
    toast.success("Logged In");
    navigate("/Dashboard");
  }

  return (
    <div>
      <div className="flex max-w-max p-2 gap-x-3 justify-center bg-slate-800 my-6 rounded-full">
        <button onClick={()=>(setAccountType("Student"))}
        className={`${(accountType==="Student")?("bg-slate-900 text-white"):("bg-transparent text-white")} py-2 px-2 rounded-full transition-all duration-200`}>Student</button>
        <button onClick={()=>(setAccountType("Instructor"))}
        className={`${(accountType==="Instructor")?("bg-slate-900 text-white"):("bg-transparent text-white")} py-2 px-2 rounded-full transition-all duration-200`}>Instructor</button>
      </div>

      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-6 mt-6"
      >
        <div className="flex gap-6 w-full">
          <label>
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              First Name <sup className="text-red-600">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              placeholder="Enter your firstname"
              value={formdata.firstname}
              onChange={changeHandler}
              className="bg-slate-800 rounded-[0.5rem] text-white w-full px-[12px] py-[8px]"
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Last Name <sup className="text-red-600">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              placeholder="Enter your lastname"
              value={formdata.lastname}
              onChange={changeHandler}
              className="bg-slate-800 rounded-[0.5rem] text-white w-full px-[12px] py-[8px]"
            />
          </label>
        </div>

        <label>
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

        <div className="flex gap-3 w-full">
          <label className="relative w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Password <sup className="text-red-600">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
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
          </label>

          <label className="relative w-full">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-red-600">*</sup>
            </p>
            <input
              required
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formdata.confirmPassword}
              onChange={changeHandler}
              className="bg-slate-800 rounded-[0.5rem] text-white w-full px-[12px] py-[8px]"
            />
          <span
            onClick={() => {
              setShowConfirm((prev) => !prev);
            }}
            className="absolute right-3 top-[35px] cursor-pointer"
          >
            {showConfirm ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye fontSize={24} fill="#AFB2BF"/>}
          </span>
          </label>
        </div>

        <button className="bg-yellow-500 text-black font-medium px-[12px] py-[8px] rounded-md">Create Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
