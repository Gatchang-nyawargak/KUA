import CardContent from "../ui/card/CardContent";
import Card from "../ui/card/Card";
import { FaBox, FaTruck, FaDesktop } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaBox className="w-12 h-12 text-blue-500 mb-4" />, 
      title: "Procurement & Supply",
      items: ["Health Equipment", "Health Promotion Products", "Food Supplies"]
    },
    {
      icon: <FaTruck className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Logistics Management",
      items: ["End-to-end Procurement", "Emergency Services", "Humanitarian Contexts"]
    },
    {
      icon: <FaDesktop className="w-12 h-12 text-blue-500 mb-4" />,
      title: "Rental Solutions",
      items: ["Vehicle Rentals", "IT Equipment", "Short to Long-term Options"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <Card className="text-center rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <ul className="text-gray-600">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
