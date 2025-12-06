import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, Calculator } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    materialType: '',
    quantity: '',
    deliveryDate: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      materialType: '',
      quantity: '',
      deliveryDate: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+1 (555) 123-4567", "Mon-Fri: 7 AM - 7 PM", "Sat: 8 AM - 4 PM"]
    },
    {
      icon: Mail,
      title: "Email Support", 
      details: ["orders@stonemaster.com", "quotes@stonemaster.com", "support@stonemaster.com"]
    },
    {
      icon: MapPin,
      title: "Main Office",
      details: ["1234 Industrial Blvd", "Construction City, ST 12345", "United States"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 7:00 AM - 7:00 PM", "Saturday: 8:00 AM - 4:00 PM", "Sunday: Emergency Only"]
    }
  ];

  const serviceAreas = [
    "Metropolitan Construction Zone",
    "Northern Industrial District", 
    "Southern Commercial Area",
    "Eastern Development Region",
    "Western Infrastructure Zone"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnY2em0wLTZ2LTZoLTZ2Nmg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 font-poppins">
              Get Your Quote Today
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
              Ready to supply your construction project? Our team provides competitive 
              wholesale pricing and flexible delivery options tailored to your timeline.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Quote Request Form */}
            <div className="lg:col-span-2">
              <Card className="card-gradient border-0 shadow-industrial animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-poppins">
                    <Calculator className="w-6 h-6 text-primary" />
                    Request Wholesale Quote
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will provide a detailed quote within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Contact Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select onValueChange={(value) => handleChange('projectType', value)} required>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential Construction</SelectItem>
                            <SelectItem value="commercial">Commercial Building</SelectItem>
                            <SelectItem value="infrastructure">Infrastructure Project</SelectItem>
                            <SelectItem value="industrial">Industrial Construction</SelectItem>
                            <SelectItem value="roadwork">Road & Highway</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="materialType">Material Needed *</Label>
                        <Select onValueChange={(value) => handleChange('materialType', value)} required>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select material type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="concrete-sand">Concrete Sand</SelectItem>
                            <SelectItem value="masonry-sand">Masonry Sand</SelectItem>
                            <SelectItem value="fill-sand">Fill Sand</SelectItem>
                            <SelectItem value="crushed-stone-57">Crushed Stone #57</SelectItem>
                            <SelectItem value="crushed-stone-67">Crushed Stone #67</SelectItem>
                            <SelectItem value="pea-gravel">Pea Gravel</SelectItem>
                            <SelectItem value="riprap">Riprap Stone</SelectItem>
                            <SelectItem value="specialty">Specialty Materials</SelectItem>
                            <SelectItem value="mixed">Multiple Materials</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="quantity">Estimated Quantity (tons)</Label>
                        <Input
                          id="quantity"
                          value={formData.quantity}
                          onChange={(e) => handleChange('quantity', e.target.value)}
                          placeholder="e.g., 50 tons"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="deliveryDate">Preferred Delivery Date</Label>
                        <Input
                          id="deliveryDate"
                          type="date"
                          value={formData.deliveryDate}
                          onChange={(e) => handleChange('deliveryDate', e.target.value)}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details & Special Requirements</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={4}
                        placeholder="Tell us about your project, delivery location, any special requirements..."
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full shadow-construction">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="card-gradient border-0 shadow-elevation animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 shadow-construction">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail) => (
                            <p key={detail} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Service Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide reliable delivery services across multiple regions. 
              Contact us to confirm service availability in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Card 
                key={area}
                className="card-gradient border-0 shadow-elevation text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">{area}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Don't see your area listed? We're expanding our coverage. Contact us to inquire about delivery to your location.
            </p>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+1234567890">Check Service Availability</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">
              Need Materials Urgently?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We offer emergency delivery services for urgent construction needs. 
              Our rush delivery can get materials to your site within 4 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <a href="tel:+1234567890">Call Emergency Hotline</a>
              </Button>
              <Button 
                asChild
                size="lg" 
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-muted"
              >
                <a href="#quote-form" onClick={(e) => { e.preventDefault(); document.getElementById('name')?.focus(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Request Rush Delivery</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;