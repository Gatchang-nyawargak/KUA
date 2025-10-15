"use client";
import React from "react";
import Image from "next/image";
import Card from "../ui/card/Card";
import CardContent from "../ui/card/CardContent";

interface Initiative {
  id: number;
  image: string;
  title: string;
  description: string;
}

const InitiativeCard: React.FC<Initiative> = ({ image, title, description }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ">
      <div className="aspect-square overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          width={500} 
          height={500}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-2xl font-semibold mb-4 text-blue-400">{title}</h3>
        {description.length > 100 ? (
          <>
            <p className="text-gray-600">
              {isExpanded ? description : `${description.substring(0, 100)}...`}
            </p>
            <button 
              onClick={handleToggle}
              className="mt-2 text-orange-500 hover:text-orange-600 font-medium text-sm uppercase transition"
            >
              {isExpanded ? "READ LESS" : "READ MORE"}
            </button>
          </>
        ) : (
          <p className="text-gray-600">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

const InitiativeGrid: React.FC = () => {
  const initiatives: Initiative[] = [
    {
      id: 1,
      image: "/images/ICT.jpeg",
      title: "Education",
      description: "We advocate for refugee access to higher education by providing digital literacy and linking them to scholarship opportunities. This helps them find online opportunities and create a presence in the digital space."
    },
    {
      id: 2,
      image: "/images/education.JPG",
      title: "Livelihood",
      description: "We collaborate with GRYN Team & WRC to provide business skills to refugee and host community entrepreneurs, helping them expand and sustain their businesses."
    },
    {
      id: 3,
      image: "/images/genderbase.JPG",
      title: "Gender-Based Violence (GBV) Prevention",
      description: "Our initiatives focus on community campaigns, school programs, and training sessions to raise awareness about GBV, providing mental health support, legal aid, and medical services for survivors."
    },
    {
      id: 4,
      image: "/images/livelihood.JPG",
      title: "Protection",
      description: "We work with stakeholders to promote child disability protection projects, raising awareness about inclusion and disability rights within families, schools, and communities."
    },
    {
      id: 5,
      image: "/images/enviroment.jpeg",
      title: "Environment",
      description: "Our environmental initiative, the Kalobeyei Green Project, focuses on planting and distributing 4000 neem trees in the Kalobeyei settlement and host community to combat climate change."
    },
    {
      id: 6,
      image: "/images/mentor.jpeg",
      title: "Mentorship for Girls",
      description: "We provide mentorship programs for young girls in Kalobeyei, offering guidance in education, leadership, and career development. Through mentorship, we empower girls with skills, confidence, and opportunities to break barriers and achieve their dreams."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">
          What We Do
        </h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {initiatives.map(initiative => (
          <InitiativeCard key={initiative.id} {...initiative} />
        ))}
      </div>
    </div>
     </section>
  );
};

export default InitiativeGrid;
