import React from "react";
import frame from "../assets/frame.png";
import LogINForm from "./LogINForm";
import SignUpForm from "./SignUpForm";
import {FcGoogle} from "react-icons/fc"

const Template = ({ title, desc1, desc2, image, formtype, setLoggedIn }) => {
  return (
    <div className="max-w-[1100px] w-[11/12] flex justify-evenly mx-auto py-12 gap-x-20 gap-y-0 mt-6 ">
      <div className="flex flex-col w-[11/12] max-w-[450px]">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>

        <div className="mt-4 text-[1.125rem] leading-[1.625rem]">
          <p className=" text-white">{desc1}</p>
          <p className="text-blue-100 italic">{desc2}</p>
        </div>

        {formtype === "signup" ? (
          <SignUpForm setLoggedIn={setLoggedIn} />
        ) : (
          <LogINForm setLoggedIn={setLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-black"></div>
          <p className="text-white">OR</p>
          <div className="h-[1px] w-full bg-black"></div>
        </div>

        <button className="w-full flex justify-center rounded-[8px] font-medium text-white border border-slate-600 px-[12px] py-[8px] gap-x-2 mt-3">
            <FcGoogle className="mt-2  text-lg"/>
          <p className="mt-1 ">Sign In with Google</p>
        </button>
      </div>

      <div className="relative w-[11/12] max-w-[450px]">
        <img src={frame} alt="frame" width={558} height={504} loading="lazy" 
            
        />
        <img
          src={image}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
    </div>
  );
};

export default Template;
