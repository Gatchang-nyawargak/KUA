import Card from "../ui/card/Card";
import CardContent from "../ui/card/CardContent";

const Team = () => {
  const team = [
    {
      name: "Emma Simango",
      role: "General Manager",
      description: "A visionary leader with a strategic mindset and deep understanding of trading and logistics.",
      imageUrl: "/images/emma.jpg" // Replace with actual image URLs
    },
    {
      name: "Philip Joseph",
      role: "Legal Advisor",
      description: "Brings extensive expertise in corporate law and strategic legal guidance, ensuring highest legal standards.",
      imageUrl: "/images/philip.jpg" // Replace with actual image URLs
    }
  ];

  return (
    <section className="py-16" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-wide">Meet The Team</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-white"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  {/* Profile Image with smooth transitions */}
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-105">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
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
