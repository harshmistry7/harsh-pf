'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [modalMessage, setModalMessage] = useState(""); // State for modal message
  const [isSuccess, setIsSuccess] = useState(false); // State to differentiate success and error

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(e.target); // Collect form data

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setModalMessage("Your message has been sent successfully!");
        setIsSuccess(true);
      } else {
        setModalMessage(result.message || "Something went wrong. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      setModalMessage("An error occurred. Please try again later.");
      setIsSuccess(false);
    }

    setIsModalOpen(true); // Open the modal after handling the submission
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="relative flex items-center">
          <Input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            required 
          />
          <User className="absolute right-6" size={20} />
        </div>

        {/* Email Input */}
        <div className="relative flex items-center">
          <Input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email" 
            required 
          />
          <MailIcon className="absolute right-6" size={20} />
        </div>

        {/* Message Input */}
        <div className="relative flex items-center">
          <Textarea 
            id="message" 
            name="message" 
            placeholder="Type Your Message Here" 
            required 
          />
          <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>

        {/* Hidden API Key */}
        <input 
          type="hidden" 
          name="apikey" 
          value="85dc48e0-9dab-464a-a14b-1d6885205306" 
        />

        {/* Button */}
        <Button type="submit" className="flex items-center max-w-[166px] gap-x-1">
          Let's Talk 
          <ArrowRightIcon size={20} />
        </Button>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p className={`text-lg font-semibold ${isSuccess ? "text-green-500" : "text-red-500"}`}>
              {modalMessage}
            </p>
            <button 
              onClick={closeModal} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
