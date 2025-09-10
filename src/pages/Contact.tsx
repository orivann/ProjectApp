import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-industrial-blue" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Emergency: +1 (555) 911-PUMP"]
    },
    {
      icon: <Mail className="w-6 h-6 text-industrial-blue" />,
      title: "Email",
      details: ["info@aquapump.com", "emergency@aquapump.com"]
    },
    {
      icon: <MapPin className="w-6 h-6 text-industrial-blue" />,
      title: "Address",
      details: ["123 Industrial Blvd", "Manufacturing District", "Dallas, TX 75201"]
    },
    {
      icon: <Clock className="w-6 h-6 text-industrial-blue" />,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Emergency: 24/7 Available"]
    }
  ];

  const offices = [
    {
      city: "Dallas (Headquarters)",
      address: "123 Industrial Blvd, Dallas, TX 75201",
      phone: "+1 (555) 123-4567",
      manager: "Mike Thompson"
    },
    {
      city: "Houston",
      address: "456 Pump Street, Houston, TX 77001", 
      phone: "+1 (555) 234-5678",
      manager: "Sarah Chen"
    },
    {
      city: "Oklahoma City",
      address: "789 Service Ave, Oklahoma City, OK 73101",
      phone: "+1 (555) 345-6789", 
      manager: "Lisa Rodriguez"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-industrial text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact AquaPump
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to discuss your pumping requirements? Our team of experts is here to provide custom solutions and competitive quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-industrial-dark">Request a Quote</CardTitle>
                <p className="text-industrial-grey">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Needed</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pump-selection">Pump Selection</SelectItem>
                        <SelectItem value="installation">Installation</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="repair">Repair Service</SelectItem>
                        <SelectItem value="custom-solution">Custom Solution</SelectItem>
                        <SelectItem value="emergency">Emergency Service</SelectItem>
                        <SelectItem value="consultation">Technical Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      placeholder="Please describe your pumping requirements, application details, flow rates, pressures, and any specific challenges you're facing..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="industrial" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-industrial-dark mb-6">Get in Touch</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-card">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          {info.icon}
                          <div>
                            <h3 className="font-semibold text-industrial-dark mb-2">{info.title}</h3>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-industrial-grey text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <Card className="border-2 border-industrial-blue bg-industrial-blue-light">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-industrial-dark mb-2">Emergency Service</h3>
                  <p className="text-industrial-grey mb-4">
                    Pump failure? Need immediate assistance? Our emergency team is available 24/7.
                  </p>
                  <Button variant="industrial" size="lg" className="w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency Hotline
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-industrial-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-industrial-grey max-w-2xl mx-auto">
              Multiple service centers to better serve you across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-industrial transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-industrial-dark">{office.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-industrial-blue mr-2 mt-1" />
                      <p className="text-industrial-grey text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-industrial-blue mr-2" />
                      <p className="text-industrial-grey text-sm">{office.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-industrial-blue mr-2" />
                      <p className="text-industrial-grey text-sm">Manager: {office.manager}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-industrial-dark mb-4">Find Us</h2>
            <p className="text-lg text-industrial-grey">Visit our Dallas headquarters for in-person consultations.</p>
          </div>
          
          <div className="bg-industrial-blue-light rounded-lg p-8 text-center">
            <MapPin className="w-16 h-16 text-industrial-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-industrial-dark mb-2">Dallas Headquarters</h3>
            <p className="text-industrial-grey mb-4">123 Industrial Blvd, Manufacturing District, Dallas, TX 75201</p>
            <p className="text-sm text-industrial-grey mb-6">
              Interactive map and directions available on our website. 
              Visitor parking available on-site.
            </p>
            <Button variant="industrial" asChild>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;