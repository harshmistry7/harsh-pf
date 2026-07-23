'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare, CheckCircle2, XCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const Form = () => {
  const [toast, setToast] = useState(null); // null or { message, type }

  const showToast = (message, type) => {
    setToast({ message, type });
    // Auto-dismiss after 4 seconds
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

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
        showToast("Your message has been sent successfully!", "success");
        e.target.reset();
      } else {
        showToast(result.message || "Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      showToast("An error occurred. Please try again later.", "error");
    }
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
          value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
        />

        {/* Button */}
        <Button type="submit" className="flex items-center max-w-[166px] gap-x-1">
          Let's Talk
          <ArrowRightIcon size={20} />
        </Button>
      </form>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3.5 bg-background dark:bg-card border border-border rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-sm select-none max-w-sm"
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="text-green-500 shrink-0" size={20} />
            ) : (
              <XCircle className="text-red-500 shrink-0" size={20} />
            )}
            
            <p className="text-sm font-medium text-foreground leading-snug pr-2">
              {toast.message}
            </p>

            <button
              onClick={() => setToast(null)}
              className="text-muted-foreground hover:text-foreground hover:bg-muted p-1 rounded-lg transition-colors shrink-0"
              aria-label="Dismiss Notification"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Form;
