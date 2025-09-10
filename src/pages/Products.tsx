import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Zap, Gauge, Settings } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      id: "centrifugal",
      title: "Centrifugal Pumps",
      icon: <Droplets className="w-8 h-8 text-industrial-blue" />,
      description: "High-efficiency centrifugal pumps for water transfer, circulation, and general industrial applications.",
      applications: ["Water Treatment", "HVAC Systems", "Industrial Cooling", "Fire Protection"],
      features: [
        "Flow rates up to 5,000 GPM",
        "Heads up to 500 feet",
        "Stainless steel construction",
        "Energy efficient design"
      ],
      models: [
        {
          name: "AquaCent 150",
          specs: "150 GPM, 100 ft head",
          price: "Starting at $2,450"
        },
        {
          name: "AquaCent 500",
          specs: "500 GPM, 200 ft head", 
          price: "Starting at $4,850"
        },
        {
          name: "AquaCent 1000",
          specs: "1000 GPM, 300 ft head",
          price: "Starting at $8,950"
        }
      ]
    },
    {
      id: "submersible",
      title: "Submersible Pumps",
      icon: <Zap className="w-8 h-8 text-industrial-blue" />,
      description: "Reliable underwater pumping solutions designed for wells, sumps, and deep water applications.",
      applications: ["Well Water", "Sewage Systems", "Drainage", "Mining Dewatering"],
      features: [
        "Submersible to 500 feet",
        "Corrosion-resistant materials",
        "Variable speed control",
        "Clog-resistant design"
      ],
      models: [
        {
          name: "AquaSub 200",
          specs: "200 GPM, 4-inch diameter",
          price: "Starting at $3,250"
        },
        {
          name: "AquaSub 400",
          specs: "400 GPM, 6-inch diameter",
          price: "Starting at $5,750"
        },
        {
          name: "AquaSub 800",
          specs: "800 GPM, 8-inch diameter",
          price: "Starting at $9,850"
        }
      ]
    },
    {
      id: "custom",
      title: "Custom Solutions",
      icon: <Settings className="w-8 h-8 text-industrial-blue" />,
      description: "Engineered pumping systems tailored to meet specific industrial requirements and unique applications.",
      applications: ["Chemical Processing", "Oil & Gas", "Specialized Manufacturing", "Research Facilities"],
      features: [
        "Custom engineering design",
        "Specialized materials",
        "Unique specifications",
        "Complete system integration"
      ],
      models: [
        {
          name: "Custom Engineering",
          specs: "Tailored to requirements",
          price: "Quote on request"
        },
        {
          name: "Retrofit Solutions",
          specs: "Upgrade existing systems",
          price: "Quote on request"
        },
        {
          name: "System Integration",
          specs: "Complete pump systems",
          price: "Quote on request"
        }
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
              Industrial Pump Products
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive range of high-quality pumps and pumping solutions for every industrial application.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="quote" size="lg" asChild>
                <Link to="/contact">
                  Request Product Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-industrial-blue" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div key={category.id} className={`${index % 2 === 1 ? 'bg-industrial-blue-light' : ''} rounded-lg p-8`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Category Info */}
                  <div>
                    <div className="flex items-center mb-4">
                      {category.icon}
                      <h2 className="text-3xl font-bold text-industrial-dark ml-3">{category.title}</h2>
                    </div>
                    
                    <p className="text-lg text-industrial-grey mb-6">{category.description}</p>
                    
                    {/* Applications */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-industrial-dark mb-3">Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="secondary" className="bg-industrial-blue text-white">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-industrial-dark mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-industrial-grey">
                            <Gauge className="w-4 h-4 text-industrial-blue mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Models */}
                  <div>
                    <h3 className="text-lg font-semibold text-industrial-dark mb-4">Available Models</h3>
                    <div className="space-y-4">
                      {category.models.map((model, modelIndex) => (
                        <Card key={modelIndex} className="border border-industrial-blue/20 hover:shadow-industrial transition-shadow duration-300">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg text-industrial-dark">{model.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-industrial-grey mb-2">{model.specs}</p>
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-industrial-blue">{model.price}</span>
                              <Button variant="industrial" size="sm" asChild>
                                <Link to="/contact">Get Quote</Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="py-16 bg-industrial-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Technical Specifications?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our engineering team can provide detailed technical documentation, performance curves, and custom specifications for any product.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contact Engineering Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-industrial-blue" asChild>
              <Link to="/services">Technical Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;