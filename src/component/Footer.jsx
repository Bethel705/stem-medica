import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div class="bg-gray-100">
    <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div class="p-5">
            <h3 class="font-bold text-xl text-indigo-600">Stem Medica</h3>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase text-indigo-600 font-bold">Important Links</div>
            <a class="my-3 block" href="/#">Home <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#"> Product<span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Partnership <span class="text-teal-600 text-xs p-1">New</span></a><a
                class="my-3 block" href="/#">News <span class="text-teal-600 text-xs p-1">New</span></a>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase text-indigo-600 font-bold">Support</div>
            <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
            <a class="my-3 block" href="/#">XXX XXXX, Floor x Addis Ababa, ETHIOPIA
                <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com
                <span class="text-teal-600 text-xs p-1"></span></a>
        </div>
    </div>
</div>

<div class="bg-gray-100 pt-2">
    <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex gap-3">
          <FaFacebook />
          <FaTelegram />
          <FaYoutube />
          <FaTiktok />
           

          
        </div>
        <div class="my-5">© Copyright 2024. All Rights Reserved.</div>
    </div>
</div>


    </div>
  )
}

export default Footer