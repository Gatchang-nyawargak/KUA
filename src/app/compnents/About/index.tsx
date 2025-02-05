import Card from "../ui/card/Card";
import CardContent from "../ui/card/CardContent";

const About = () => {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-slide-in transition-all duration-700 ease-out transform">
            <Card className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  At De South Ltd, we stand as a global entity committed to fulfilling the
                  unique needs of our clientele. Our core strength is in delivering
                  exceptional, personalized services that set us apart.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in transition-all duration-700 ease-out transform delay-200">
            <Card className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  DE SOUTH aims to redefine the trading and logistics industry, setting new
                  standards in excellence, innovation, and integrity, with a vision to lead
                  and shape the future through groundbreaking solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
