"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import BannerLayout from "../_components/layouts/BannerLayout";
import { CONTACTS } from "../_components/constants/constants";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Footer from "../_components/HomeComponents/Footer";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef<HTMLFormElement | null>(null); 

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_3s73tyl', 'template_kmnplmf', form.current, '4WJY6NkRd272G5dvl')
        .then(
          () => {
            console.log(form.current)
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <BannerLayout>
      <div className="px-4 py-2">
        {/* Contact Information Section */}
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">{CONTACTS.Country}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">{CONTACTS.City}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Company:</span>
                <span className="text-LightGray md:text-sm">{CONTACTS.Current1}</span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">{CONTACTS.EMAIL}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">LinkedIn:</span>
                <a href={CONTACTS.Linkedin} target="_blank" rel="noopener noreferrer" className="text-LightGray text-sm">
                  View Profile
                </a>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">{CONTACTS.PHONE}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a className="hover:scale-125 ease-in-out duration-700" href={`mailto:${CONTACTS.EMAIL}`} target="_blank" rel="noreferrer">
            <HiMail />
          </a>
          {/* <a className="hover:scale-125 ease-in-out duration-700" href={CONTACTS.Github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a> */}
          <a className="hover:scale-125 ease-in-out duration-700" href={CONTACTS.Linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          {/* <a className="hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1" href={CONTACTS.Upwork} target="_blank" rel="noreferrer">
            <SiUpwork />
          </a> */}
        </div>

        {/* Contact Form Section */}
        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col w-full mb-6">
                <div className="relative">
                  <HiUser className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input_stylings"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-full mb-6">
                <div className="relative">
                  <HiMail className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input_stylings"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col w-full mb-6">
                <div className="relative">
                  <BsChatTextFill className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    cols={50}
                    className="input_stylings"
                    placeholder="Message"
                    required
                  />
                </div>
              </div>

              <div className="my-4">
                <button type="submit" className="button">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
};

export default Contact;
