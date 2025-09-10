import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Wrench, Globe, Target, Eye } from "lucide-react";

const About = () => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "5,000+", label: "Pumps Installed" },
    { number: "500+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-industrial-blue" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every product and service we deliver, ensuring long-lasting performance and reliability."
    },
    {
      icon: <Users className="w-8 h-8 text-industrial-blue" />,
      title: "Customer Focus", 
      description: "Our clients' success is our priority. We build lasting relationships through exceptional service and support."
    },
    {
      icon: <Wrench className="w-8 h-8 text-industrial-blue" />,
      title: "Technical Expertise",
      description: "Our team of certified engineers and technicians brings decades of experience to every project."
    },
    {
      icon: <Globe className="w-8 h-8 text-industrial-blue" />,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge pumping solutions that meet evolving industry needs."
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001 Environmental Management", 
    "ASME Certified Pressure Vessels",
    "API 610 Centrifugal Pumps",
    "NSF/ANSI 61 Drinking Water",
    "UL Listed Electrical Components"
  ];

  const teamMembers = [
    {
      name: "Robert Martinez",
      title: "CEO & Founder",
      experience: "30+ years in industrial pumping",
      description: "Mechanical engineer with extensive experience in pump design and manufacturing."
    },
    {
      name: "Sarah Chen",
      title: "Chief Technical Officer", 
      experience: "25+ years in fluid dynamics",
      description: "Leading expert in pump performance optimization and custom engineering solutions."
    },
    {
      name: "Mike Thompson",
      title: "VP of Operations",
      experience: "20+ years in manufacturing",
      description: "Oversees all manufacturing operations and quality assurance programs."
    },
    {
      name: "Lisa Rodriguez",
      title: "Service Director",
      experience: "15+ years in field service",
      description: "Manages our nationwide service network and customer support operations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-industrial text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About AquaPump Industries
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Leading provider of industrial pumping solutions with over 25 years of experience serving industries worldwide.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                  <div className="text-blue-100 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-industrial-grey">
                <p>
                  Founded in 1999 by mechanical engineer Robert Martinez, AquaPump Industries started as a small engineering consulting firm specializing in pump selection and optimization. What began as a one-person operation has grown into a leading manufacturer and service provider of industrial pumping solutions.
                </p>
                <p>
                  Over the past 25 years, we've expanded our capabilities to include custom pump manufacturing, complete system design, installation services, and comprehensive maintenance programs. Our commitment to quality and innovation has earned us the trust of Fortune 500 companies and small businesses alike.
                </p>
                <p>
                  Today, AquaPump serves clients across diverse industries including manufacturing, oil & gas, water treatment, mining, agriculture, and construction. Our team of certified engineers and technicians continues to push the boundaries of pump technology while maintaining our core values of quality, reliability, and exceptional customer service.
                </p>
              </div>
            </div>
            
            <div className="bg-industrial-blue-light rounded-lg p-8">
              <h3 className="text-2xl font-bold text-industrial-dark mb-4">Mission Statement</h3>
              <div className="flex items-start mb-4">
                <Target className="w-6 h-6 text-industrial-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-industrial-dark mb-2">Our Mission</h4>
                  <p className="text-industrial-grey">
                    To provide reliable, efficient, and innovative pumping solutions that keep industries running smoothly while exceeding customer expectations through exceptional service and support.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Eye className="w-6 h-6 text-industrial-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-industrial-dark mb-2">Our Vision</h4>
                  <p className="text-industrial-grey">
                    To be the most trusted partner for industrial pumping solutions, recognized for our technical expertise, quality products, and unwavering commitment to customer success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-industrial-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-industrial-grey max-w-2xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-industrial transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-industrial-dark mb-3">{value.title}</h3>
                  <p className="text-industrial-grey">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-industrial-grey max-w-2xl mx-auto">
              Experienced professionals leading AquaPump's commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-industrial transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-industrial rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-industrial-dark">{member.name}</h3>
                      <p className="text-industrial-blue font-medium">{member.title}</p>
                      <p className="text-sm text-industrial-grey mb-2">{member.experience}</p>
                      <p className="text-industrial-grey">{member.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-industrial-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our commitment to quality is validated by industry-leading certifications and standards compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <Award className="w-8 h-8 text-industrial-blue mx-auto mb-2" />
                <p className="font-medium">{cert}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Work With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;