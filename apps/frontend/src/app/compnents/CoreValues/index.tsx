import Card from "../ui/card/Card";
import CardContent from "../ui/card/CardContent";
import { FaHandshake, FaBalanceScale, FaHardHat, FaShieldAlt, FaLock, FaUsers } from "react-icons/fa";

const CoreValues = () => {
  const values = [
    {
      title: "Respect",
      description: "We collaborate with international agencies, governments, and stakeholders, avoiding competition and focusing on community empowerment.",
      icon: <FaHandshake className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Responsibility",
      description: "We take responsibility for assets, our team, and the environment, ensuring ethical stewardship in all dealings.",
      icon: <FaBalanceScale className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Hard Work",
      description: "We embrace diversity and work tirelessly to bring positive change to our community, breaking language and status barriers.",
      icon: <FaHardHat className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Trust",
      description: "We are dedicated to earning and maintaining the trust of our partners through transparency and reliability.",
      icon: <FaShieldAlt className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Confidentiality",
      description: "We uphold strict confidentiality measures to protect the privacy and security of individuals and their data.",
      icon: <FaLock className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Teamwork",
      description: "We work as one team, embracing our diverse membership to drive impactful community change.",
      icon: <FaUsers className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="values">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`animate-slide-in transition-all duration-700 ease-out transform delay-${index * 200}`}
            >
              <Card className="bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-xl overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
