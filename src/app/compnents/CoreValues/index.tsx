import Card from "../ui/card/Card";
import CardContent from "../ui/card/CardContent";
import { FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";

const CoreValues = () => {
  const values = [
    {
      title: "Integrity",
      description: "Our professional employees adhere to the highest ethical standards in all business dealings.",
      icon: <FaShieldAlt className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Excellence",
      description: "We are committed to delivering innovative and products and services of the highest quality.",
      icon: <FaStar className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Community Focus",
      description: "We actively contribute to the positive development of the communities in which we operate.",
      icon: <FaUsers className="w-10 h-10 text-blue-500" />,
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
