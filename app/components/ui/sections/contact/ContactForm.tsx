"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  checkbox: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus({ type: null, message: "" });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="flex justify-center my-5 md:my-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[350px] md:w-[375px] lg:w-[500px] max-w-xl lg:max-w-2xl font-oswald px-6 md:px-10 py-8 md:py-12 full-shadow rounded-lg"
      >
        <div className="flex flex-col gap-1 py-2">
          <label htmlFor="name" className="contact-label">
            Name
          </label>
          <input
            id="name"
            placeholder="Frodo Baggins"
            className="contact-input text-off-black bg-white px-3 py-2 focus:outline-none focus:border-primary transition-colors"
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <span className="text-primary text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2 py-2">
          <label htmlFor="email" className="contact-label">
            Email
          </label>
          <input
            id="email"
            placeholder="frodo@theshire.com"
            className="contact-input text-off-black bg-white px-3 py-2 focus:outline-none focus:border-primary transition-colors"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-primary text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2 py-2">
          <label htmlFor="checkbox" className="contact-label">
            I&apos;m interested in
          </label>
          <select
            id="checkbox"
            className="border-b border-black text-off-black bg-white px-3 py-2 focus:outline-none focus:border-primary transition-colors cursor-pointer"
            {...register("checkbox", {
              required: "Please select an option",
            })}
          >
            <option value="">Select an option</option>
            <option value="MMA">MMA</option>
            <option value="Brazilian Jiu-Jitsu">Brazilian Jiu-Jitsu</option>
            <option value="Kickboxing">Kickboxing</option>
            <option value="Wrestling">Wrestling</option>
            <option value="Personal Training">Personal Training</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          {errors.checkbox && (
            <span className="text-primary text-sm">
              {errors.checkbox.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 py-2">
          <label htmlFor="message" className="contact-label">
            Message
          </label>
          <textarea
            id="message"
            placeholder="This is no mere ranger..."
            className="border border-black text-off-black bg-white px-3 py-2 rounded-md focus:outline-none focus:border-primary transition-colors resize-none"
            rows={5}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 5,
                message: "Message must be at least 5 characters",
              },
            })}
          />
          {errors.message && (
            <span className="text-primary text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          className="bg-primary font-oswald text-xl px-8 py-2 w-full rounded-md text-white hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitStatus.type && (
          <div
            className={`px-4 py-3 rounded-md ${
              submitStatus.type === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}
