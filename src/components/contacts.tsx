"use client";
import React from "react";
import Image from "next/image";
import phone from "@/assets/phone.png";
import mail from "@/assets/mail.png";

const Contacts = () => {
  return (
    <div
      className="w-full md:min-w-[950px]  md:mx-auto flex flex-col lg:flex-row text-white/70 md:pl-44 p-4
                    rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="h-[90px] w-[90px] md:w-auto mr-6" />
            <p className="text-xl">+91 87780 15076</p>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="mail" className="h-[90px] w-[90px] md:w-auto mr-6" />
            <p className="text-xl">abusithik482@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">
          Let's Connect
        </h2>
        <p className="text-white/70 mb-6">
          Send me a message and lets schedule a call!
        </p>
        <form
          className="space-y-4"
          action="https://getform.io/f/adrrlwza"
          method="POST"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault(); 

            const form = e.currentTarget; 
            const inputs = form.querySelectorAll<
              HTMLInputElement | HTMLTextAreaElement
            >("input, textarea");
            let valid = true;

            inputs.forEach((input) => {
              if (!input.value.trim()) {
                valid = false;
                input.classList.add("border-red-500");
              } else {
                input.classList.remove("border-red-500");
              }
            });

            if (!valid) {
              alert("Please fill in all the fields.");
            } else {
              form.submit(); 
            }
          }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2
                         focus:ring-orange-400"
            ></input>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2
                         focus:ring-orange-400"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2
                        focus:ring-orange-400"
            ></input>
            <input
              type="phone"
              name="phone"
              placeholder="Phone"
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2
                        focus:ring-orange-400"
            ></input>
          </div>
          <textarea
            name="Your message"
            placeholder="Message"
            className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2
                        focus:ring-orange-400"
          />
          <button className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
