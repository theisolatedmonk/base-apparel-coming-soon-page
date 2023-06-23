'use client'
import React from 'react'

import Image from "next/image";
import error from "@/images/icon-error.svg";
import arrow from "@/images/icon-arrow.svg";




export default function DescriptionText() {
  return (
    <div className="flex flex-col p-6 gap-6 ">
    <div className="flex flex-col justify-center w-full items-center font-light text-5xl tracking-[8px] gap-2  ">
          <p className="text-[hsl(0,36%,70%)]  ">WE'RE</p>
          <p className="text-[hsl(0,6%,24%)]  w-[50%]textcenter text-center font-normal">
            COMING SOON
          </p>
        </div>
  
        <p className="text-[hsl(0,36%,70%)] text-center ">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
  
        <div className="flex flex-col gap-2">
        <div className=" flex border-[1px] fo border-[hsl(0,6%,24%)] rounded-full  w-full justify-between ">
          <input
            type="email"
            placeholder="Email Address"
            className="  p-4 outline-none
     rounded-full text-[hsl(0,36%,70%)] "
          />
      <div className="flex gap-4">
      <div className="flex items-center justify-center">
          <Image src={error} alt={""} className=" " />
          </div>
          
          <button className="bg-[hsl(0,93%,68%)] px-8 py-2 rounded-full">
            {" "}
            <Image src={arrow} alt={""} className="" />
          </button>
      </div>
        </div>
        <p className="hidde text-[hsl(0,93%,68%)]  px-6">please provide a valid email</p>
        </div>

    </div>
      
  )
}