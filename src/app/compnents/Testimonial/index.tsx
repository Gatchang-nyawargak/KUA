"use client";
import React from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  customerName: string;
  designation: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    customerName: "John Deng",
    designation: "Entrepreneur",
    feedback:
      "This product is amazing! It has completely transformed the way I work and manage my business.",
    image: "/images/j.jpeg",
  },
  {
    id: 2,
    customerName: "John Smith",
    designation: "Business Owner",
    feedback:
      "Outstanding quality and service. I highly recommend these products to anyone looking for reliability.",
    image: "/images/p.jpeg",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    designation: "Freelancer",
    feedback:
      "I love the design and functionality. It’s truly a game-changer for my daily workflow.",
    image: "/images/G.jpg",
  },
  {
    id: 4,
    customerName: "Michael Brown",
    designation: "Professional",
    feedback:
      "The products exceeded my expectations in both quality and performance. A must-have!",
    image: "/images/q.jpeg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.customerName}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonial.customerName}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
