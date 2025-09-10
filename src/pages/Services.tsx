import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Shield, Clock, Users, Phone, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-industrial-blue" />,
      title: "Installation & Setup",
      description: "Professional installation of pump systems by certified technicians with complete system commissioning.",
      features: [
        "Site assessment and preparation",
        "Professional installation",
        "System commissioning",
        "Performance testing",
        "Operator training",
        "Documentation package"
      ],
      timeline: "2-5 business days",
      pricing: "Starting at $850"
    },
    {
      icon: <Shield className="w-12 h-12 text-industrial-blue" />,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance programs and emergency repair services to keep your pumps running efficiently.",
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "Parts replacement",
        "Performance optimization",
        "Vibration analysis",
        "Condition monitoring"
      ],
      timeline: "Same day service available",
      pricing: "Plans starting at $299/month"
    },
    {
      icon: <Users className="w-12 h-12 text-industrial-blue" />,
      title: "Custom Engineering",
      description: "Tailored pumping solutions designed specifically for your unique industrial requirements.",
      features: [
        "Engineering consultation",
        "Custom system design",
        "CAD drawings & specifications",
        "Material selection",
        "Performance calculations",
        "Project management"
      ],
      timeline: "2-8 weeks",
      pricing: "Quote based on requirements"
    },
    {
      icon: <Clock className="w-12 h-12 text-industrial-blue" />,
      title: "24/7 Emergency Support",
      description: "Round-the-clock technical support and emergency service to minimize downtime and keep operations running.",
      features: [
        "24/7 phone support",
        "Emergency dispatch",
        "Remote diagnostics",
        "Priority parts shipping",
        "Emergency repairs",
        "Temporary pump rental"
      ],
      timeline: "2-4 hour response",
      pricing: "Emergency rates apply"
    }
  ];

  const maintenancePackages = [
    {
      name: "Basic Maintenance",
      price: "$299/month",
      features: [
        "Quarterly inspections",
        "Basic maintenance",
        "Performance reports",
        "Phone support"
      ]
    },
    {
      name: "Standard Maintenance", 
      price: "$599/month",
      features: [
        "Monthly inspections",
        "Preventive maintenance",
        "Performance optimization",
        "Priority support",
        "Emergency service"
      ],
      popular: true
    },
    {
      name: "Premium Maintenance",
      price: "$999/month", 
      features: [
        "Bi-weekly inspections",
        "Comprehensive maintenance",
        "Condition monitoring",
        "24/7 support",
        "Emergency service",
        "Temporary equipment"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-industrial text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Pump Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive installation, maintenance, and support services to keep your pumping systems operating at peak performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="quote" size="lg" asChild>
                <Link to="/contact">
                  Schedule Service
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-industrial-blue">
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              Our Service Offerings
            </h2>
            <p className="text-lg text-industrial-grey max-w-2xl mx-auto">
              Complete range of professional services to support your pumping systems throughout their lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full border-0 shadow-card hover:shadow-industrial transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <CardTitle className="text-2xl text-industrial-dark ml-4">{service.title}</CardTitle>
                  </div>
                  <p className="text-industrial-grey">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-industrial-dark mb-2">Service Includes:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-industrial-grey">
                            <CheckCircle className="w-4 h-4 text-industrial-blue mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <div>
                        <p className="text-sm text-industrial-grey">Timeline: {service.timeline}</p>
                        <p className="font-semibold text-industrial-blue">{service.pricing}</p>
                      </div>
                      <Button variant="industrial" asChild>
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section className="py-16 bg-industrial-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              Maintenance Packages
            </h2>
            <p className="text-lg text-industrial-grey max-w-2xl mx-auto">
              Preventive maintenance plans designed to maximize pump life and minimize unexpected downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePackages.map((pkg, index) => (
              <Card key={index} className={`relative h-full border-0 shadow-card hover:shadow-industrial transition-shadow duration-300 ${pkg.popular ? 'ring-2 ring-industrial-blue' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-industrial-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-industrial-dark">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-industrial-blue mt-2">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-industrial-grey">
                        <CheckCircle className="w-4 h-4 text-industrial-blue mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={pkg.popular ? "industrial" : "outline"} 
                    className="w-full" 
                    asChild
                  >
                    <Link to="/contact">Select Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-16 bg-industrial-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Emergency Service Available
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                When pump failure threatens your operations, our emergency service team is ready to respond quickly with the expertise and equipment needed to get you back online.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-industrial-blue mr-3" />
                  <span>2-4 hour emergency response time</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-industrial-blue mr-3" />
                  <span>24/7 emergency hotline</span>
                </div>
                <div className="flex items-center">
                  <Wrench className="w-6 h-6 text-industrial-blue mr-3" />
                  <span>Mobile service units fully equipped</span>
                </div>
              </div>
              
              <Button variant="hero" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Hotline: +1 (555) 911-PUMP
              </Button>
            </div>
            
            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4 text-blue-100">
                <div>
                  <h4 className="font-semibold mb-2">Primary Markets</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Dallas-Fort Worth</li>
                    <li>Houston Metro</li>
                    <li>Austin-San Antonio</li>
                    <li>Oklahoma City</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Extended Service</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Louisiana</li>
                    <li>Arkansas</li>
                    <li>New Mexico</li>
                    <li>Colorado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;