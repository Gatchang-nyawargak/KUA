"use client";
import React from "react";
import Image from "next/image";
import Card from "../ui/card/Card";
import CardContent from "../ui/card/CardContent";

const Team = () => {
  const team = [
    {
      name: "Mr. Kaoma Bienvenu",
      role: "Founder & Director, Humanitarian Activist, Mentor, Web Developer, Proposal Writer",
      description: "Dedicated to empowering communities through technology and humanitarian initiatives.",
      imageUrl: "/images/kaoma.jpeg",
    },
    {
      name: "Ms. Nyawargak Gatchang",
      role: "Project Manager, Full Stack Developer, AkiraChix Alumnus",
      description: "Passionate about leveraging technology to create impact-driven solutions for communities.",
      imageUrl: "/images/warga.jpg",
    },
    {
      name: "Mr. Abwine Yves",
      role: "AI Engineer, Web Designer, Humanitarian, Community Change-Maker, Entrepreneur",
      description: "Bringing AI innovation and community-driven solutions to humanitarian challenges.",
      imageUrl: "/images/eve.png",
    },
    // {
    //   name: "Ms. Monica Gyluot",
    //   role: "GBV Coordinator, Therapist, Research Assistant",
    //   description: "Advocating for gender equality, mental health, and social justice within refugee communities.",
    //   imageUrl: "/images/monica.jpg",
    // },
    // {
    //   name: "Ms. Peace Emmanuel",
    //   role: "Youth Advocate, Assistant Project Manager",
    //   description: "Committed to empowering young people through education, mentorship, and advocacy.",
    //   imageUrl: "/images/peace.jpg",
    // },
  ];

  return (
    <section className="py-16" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-white text-center rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <CardContent className="p-8">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-500 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
