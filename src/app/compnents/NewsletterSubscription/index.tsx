"use client";
import React, { useState } from "react";

const KuaNewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setError(true);
      return;
    }

    // Simulate a successful subscription
    setMessage("Thank you for subscribing to KUA Initiative updates!");
    setError(false);
    setEmail("");
  };

  return (
    <div className="py-12 bg-blue-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Stay Connected with KUA Initiative
        </h2>
        <p className="text-blue-700 mb-6">
          Subscribe to receive updates on our programs, community projects, and impact stories.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-full border border-blue-400 focus:outline-none focus:border-blue-600 w-full sm:w-auto"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
        {message && (
          <p className={`mt-4 ${error ? "text-red-500" : "text-blue-500"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default KuaNewsletterSubscription;