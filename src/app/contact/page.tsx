"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import BannerLayout from "../_components/layouts/BannerLayout";
import { CONTACTS } from "../_components/constants/constants";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill, BsInstagram, BsTwitter } from "react-icons/bs";
import Footer from "../_components/HomeComponents/Footer";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef<HTMLFormElement | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_3s73tyl",
          "template_kmnplmf",
          form.current,
          "4WJY6NkRd272G5dvl"
        )
        .then(
          () => {
            setIsModalOpen(true); // Open modal on success
          },
          (error) => {
            console.error("Failed to send email...", error.text);
          }
        );
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", message: "" }); // Reset form
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
                <a
                  href={CONTACTS.Linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-LightGray text-sm"
                >
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
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={`mailto:${CONTACTS.EMAIL}`}
            target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={CONTACTS.Linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LiaLinkedin/>
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={`mailto:${CONTACTS.EMAIL}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook/>
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={`mailto:${CONTACTS.EMAIL}`}
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href={`mailto:${CONTACTS.EMAIL}`}
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg w-full max-w-md mx-4 p-6 shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Message Sent!
            </h2>
            <p className="text-gray-700 mb-6">
              Thank you for reaching out! I will get back to you as soon as
              possible.
            </p>
            <button
              onClick={closeModal}
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </BannerLayout>
  );
};

export default Contact;
