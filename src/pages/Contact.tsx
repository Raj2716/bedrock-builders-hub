import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, Calculator, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FadeUp, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem,
  HoverScale,
  HeroText
} from '@/components/animations/MotionWrapper';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Quote Request Submitted",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
    
    // Reset form after animation
    setTimeout(() => {
      setIsSubmitted(false);
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
    }, 2000);
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

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 20px rgba(var(--primary), 0.2)" },
    blur: { scale: 1, boxShadow: "none" }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <motion.div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZ2LTZoNnY2em0wLTZ2LTZoLTZ2Nmg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <HeroText delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 font-poppins">
                Get Your Quote Today
              </h1>
            </HeroText>
            <motion.p 
              className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Ready to supply your construction project? Our team provides competitive 
              wholesale pricing and flexible delivery options tailored to your timeline.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Quote Request Form */}
            <SlideInLeft className="lg:col-span-2">
              <Card className="card-gradient border-0 shadow-industrial overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-poppins">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Calculator className="w-6 h-6 text-primary" />
                    </motion.div>
                    Request Wholesale Quote
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will provide a detailed quote within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="py-20 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                          <CheckCircle className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Quote Request Sent!</h3>
                        <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                      </motion.div>
                    ) : (
                      <motion.form 
                        key="form"
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <motion.div whileFocus="focus" variants={inputVariants}>
                            <Label htmlFor="name">Contact Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleChange('name', e.target.value)}
                              required
                              className="mt-2 transition-all duration-300"
                            />
                          </motion.div>
                          <motion.div whileFocus="focus" variants={inputVariants}>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              required
                              className="mt-2 transition-all duration-300"
                            />
                          </motion.div>
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

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            type="submit" 
                            size="lg" 
                            className="w-full shadow-construction"
                            disabled={isSubmitting}
                          >
                            <AnimatePresence mode="wait">
                              {isSubmitting ? (
                                <motion.div
                                  key="loading"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="flex items-center gap-2"
                                >
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                  />
                                  Submitting...
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="submit"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="flex items-center gap-2"
                                >
                                  <Send className="w-5 h-5" />
                                  Submit Quote Request
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Button>
                        </motion.div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </SlideInLeft>

            {/* Contact Information */}
            <SlideInRight className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <HoverScale>
                    <Card className="card-gradient border-0 shadow-elevation">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 shadow-construction"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <info.icon className="w-6 h-6 text-primary-foreground" />
                          </motion.div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 font-poppins">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <motion.p 
                                  key={detail} 
                                  className="text-muted-foreground text-sm"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: index * 0.15 + detailIndex * 0.1 }}
                                >
                                  {detail}
                                </motion.p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </motion.div>
              ))}
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Service Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide reliable delivery services across multiple regions. 
              Contact us to confirm service availability in your area.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {serviceAreas.map((area) => (
              <StaggerItem key={area}>
                <HoverScale>
                  <Card className="card-gradient border-0 shadow-elevation text-center">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold text-foreground">{area}</h3>
                      </motion.div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-muted-foreground mb-6">
              Don't see your area listed? We're expanding our coverage. Contact us to inquire about delivery to your location.
            </p>
            <HoverScale>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+1234567890">Check Service Availability</a>
              </Button>
            </HoverScale>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-hero text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <FadeUp className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 font-poppins">
              Need Materials Urgently?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We offer emergency delivery services for urgent construction needs. 
              Our rush delivery can get materials to your site within 4 hours.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <HoverScale>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <a href="tel:+1234567890">Call Emergency Hotline</a>
                </Button>
              </HoverScale>
              <HoverScale>
                <Button 
                  asChild
                  size="lg" 
                  className="text-lg px-8 py-6 bg-white text-primary hover:bg-muted"
                >
                  <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('name')?.focus(); window.scrollTo({ top: 400, behavior: 'smooth' }); }}>Request Rush Delivery</a>
                </Button>
              </HoverScale>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Contact;
