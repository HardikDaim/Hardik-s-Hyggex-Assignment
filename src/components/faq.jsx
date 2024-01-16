import React, { useState } from "react";

export default function Faq() {
  return (
    <div className="mx-auto container">
      <div className="pl-4" style={{marginBottom:"200px"}}>
        <div className="text-3xl py-5 font-bold text-blue-800">FAQ</div>

        <div>
          <div className="mb-4">
            <div className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-2 border-blue-800 rounded-bl-xl rounded-tr-xl focus:ring-4 focus:ring-gray-200 gap-3 cursor-pointer select-none">
              <span className="text-xl font-bold">
                Can Education Flashcards be used for all age groups?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-2 border-blue-800 rounded-bl-xl rounded-tr-xl focus:ring-4 focus:ring-gray-200 gap-3 cursor-pointer select-none">
              <span className="text-xl font-bold">
                How do Education Flashcards works?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-2 border-blue-800 rounded-bl-xl rounded-tr-xl focus:ring-4 focus:ring-gray-200 gap-3 cursor-pointer select-none">
              <span className="text-xl font-bold">
                Can Education Flashcards be used for test preparations?
              </span>
              <svg
                data-accordion-icon
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
