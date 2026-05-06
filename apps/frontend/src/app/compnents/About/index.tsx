import Card from "../ui/card/Card";
import CardContent from "../ui/card/CardContent";

const About = () => {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-300 mb-12 tracking-wide">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="animate-slide-in transition-all duration-700 ease-out transform">
            <Card className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To equip refugees and host communities with relevant skills, create pathways for sustainable livelihoods, and support practical, community-led approaches to environmental resilience.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Vision */}
          <div className="animate-slide-in transition-all duration-700 ease-out transform delay-200">
            <Card className="transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  A society where refugees and host communities have the skills, opportunities, and supportive environment to build stable and meaningful lives.
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
