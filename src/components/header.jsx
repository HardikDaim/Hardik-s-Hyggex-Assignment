import React, { useState, useEffect } from "react";

export default function Navbar({ picturePath }) {
  return (
    <>
      <header className="py-4 bg-white ">
        <div className="container mx-auto  ">
          <nav className="relative flex justify-between">
            <div
              to="/"
              className="flex items-center md:gap-x-12 mr-7 cursor-pointer"
            >
            <img src="/logo.jpg" height="100px" width="200px"></img>
            </div>

       

            <div className="flex items-center ml-7">
              <div className="hidden md:flex gap-x-5 md:gap-x-5">
                <div
                  to="/"
                  type="button"
                  className="rounded-lg inline-block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold cursor-pointer"
                >
                  Home
                </div>
                <div
                  to="/"
                  type="button"
                  className="rounded-lg inline-block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold cursor-pointer"
                >
                  Flashcard
                </div>
                <div
                  to="/"
                  type="button"
                  className="rounded-lg inline-block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold cursor-pointer"
                >
                  Contact
                </div>
                <div
                  to="/"
                  type="button"
                  className="rounded-lg inline-block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold cursor-pointer"
                >
                  FAQ
                </div>

                <div
                  to="/"
                  type="button"
                  className="flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold  text-white hover:text-slate-100 bg-gradient-to-r from-blue-500 to-blue-800 cursor-pointer"
                >
                  Login
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
