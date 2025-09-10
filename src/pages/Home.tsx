import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";
import industrialHero from "@/assets/industrial-hero.jpg";

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-industrial-blue" />,
      title: "Reliable Performance",
      description: "Built to last with premium materials and rigorous quality testing."
    },
    {
      icon: <Wrench className="w-8 h-8 text-industrial-blue" />,
      title: "Expert Installation",
      description: "Professional installation and setup by certified technicians."
    },
    {
      icon: <Clock className="w-8 h-8 text-industrial-blue" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency service."
    },
    {
      icon: <Award className="w-8 h-8 text-industrial-blue" />,
      title: "Industry Certified",
      description: "All products meet or exceed industry standards and certifications."
    }
  ];

  const productCategories = [
    {
      title: "Centrifugal Pumps",
      description: "High-efficiency pumps for water transfer and circulation applications.",
      features: ["High flow rates", "Energy efficient", "Low maintenance"]
    },
    {
      title: "Submersible Pumps",
      description: "Reliable underwater pumping solutions for various depths and applications.",
      features: ["Waterproof design", "Corrosion resistant", "Variable speeds"]
    },
    {
      title: "Custom Solutions",
      description: "Tailored pumping systems designed for specific industrial requirements.",
      features: ["Custom engineering", "Specialized materials", "Unique specifications"]
    }
  ];

  const industries = [
    "Manufacturing", "Oil & Gas", "Water Treatment", "Mining", "Agriculture", "Construction"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${industrialHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-blue/90 to-industrial-blue-dark/90"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Reliable Industrial Pumping Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            for Every Industry
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Leading provider of industrial pumps and equipment with over 25 years of experience. 
            Trusted by industries worldwide for reliable, efficient pumping solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="quote" size="lg" asChild>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              Why Choose AquaPump?
            </h2>
            <p className="text-lg text-industrial-grey max-w-2xl mx-auto">
              We deliver exceptional quality and service that keeps your operations running smoothly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-industrial transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-industrial-dark mb-3">{feature.title}</h3>
                  <p className="text-industrial-grey">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-industrial-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-industrial-grey max-w-2xl mx-auto">
              Comprehensive range of industrial pumping solutions for every application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="h-full border-0 shadow-card hover:shadow-industrial transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-industrial-dark mb-3">{category.title}</h3>
                  <p className="text-industrial-grey mb-4">{category.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-industrial-grey">
                        <CheckCircle className="w-4 h-4 text-industrial-blue mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="industrial" className="w-full" asChild>
                    <Link to="/products">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-industrial-grey mb-12 max-w-2xl mx-auto">
            Trusted by leading companies across diverse industries worldwide.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-industrial-blue-light text-industrial-dark px-4 py-3 rounded-lg font-medium hover:bg-industrial-blue hover:text-white transition-colors duration-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-industrial text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our team of experts to discuss your pumping requirements and get a custom quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="quote" size="lg" asChild>
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-industrial-blue" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;