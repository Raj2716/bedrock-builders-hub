import { Award, Clock, Users, Truck, CheckCircle, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import facilityImage from '@/assets/facility-building.jpg';
import { 
  FadeUp, 
  SlideInLeft, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem,
  HoverScale,
  HeroText
} from '@/components/animations/MotionWrapper';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Every material we supply meets or exceeds industry standards. We maintain rigorous quality control processes to ensure consistent, reliable products for your projects."
    },
    {
      icon: Clock,
      title: "Reliable Delivery",
      description: "Time is money in construction. Our logistics team ensures on-time delivery with real-time tracking and proactive communication about your orders."
    },
    {
      icon: Users,
      title: "Partnership Focus",
      description: "We build long-term relationships with our clients, understanding their unique needs and providing customized solutions for each project."
    },
    {
      icon: Truck,
      title: "Fleet Excellence",
      description: "Our modern fleet of delivery vehicles and equipment ensures safe, efficient transportation of materials to your job site."
    }
  ];

  const milestones = [
    { year: "1989", event: "Company founded by A. Kumarasamy Nayakar" },
    { year: "2000", event: "Expanded aggregate materials trading across Tamil Nadu" },
    { year: "2010", event: "Major project: Ramanathapuram Medical College" },
    { year: "2015", event: "Partnership with CMK Construction Chennai" },
    { year: "2018", event: "Salt supply expansion - RTC Salt & Alagar Salt" },
    { year: "2024", event: "35+ years of trusted B2B partnerships" }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ASTM International Standards Compliance", 
    "Environmental Protection Agency Certified",
    "Department of Transportation Approved",
    "Occupational Safety & Health Compliant"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${facilityImage})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <HeroText delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
                A. Kumarasamy Nayakar
              </h1>
            </HeroText>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              35 Years of Excellence in Aggregate Materials & Construction Supply
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <HoverScale>
                <Button asChild size="lg" className="shadow-construction">
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </HoverScale>
              <HoverScale>
                <Button asChild variant="outline" size="lg">
                  <Link to="/products">View Our Materials</Link>
                </Button>
              </HoverScale>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeUp className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded by A. Kumarasamy Nayakar, our firm has been successfully trading 
              in aggregate materials and building construction supply for over 35 years. 
              We also produce and supply raw salt across all of Tamil Nadu.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeUp>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
                Our Mission & Vision
              </h2>
            </FadeUp>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <SlideInLeft delay={0.2}>
                <HoverScale>
                  <Card className="card-gradient border-0 shadow-elevation h-full">
                    <CardContent className="p-8">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 shadow-construction"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Target className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Our Mission</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To provide the construction industry with the highest quality materials, 
                        exceptional service, and innovative solutions that enable our partners 
                        to build lasting structures while maintaining project timelines and budgets.
                      </p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </SlideInLeft>
              
              <SlideInRight delay={0.3}>
                <HoverScale>
                  <Card className="card-gradient border-0 shadow-elevation h-full">
                    <CardContent className="p-8">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 shadow-construction"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Award className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Our Vision</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To be the most trusted and innovative construction materials supplier, 
                        setting industry standards for quality, sustainability, and customer 
                        service while contributing to the infrastructure that shapes our communities.
                      </p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </SlideInRight>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing materials to 
              delivering exceptional customer service.
            </p>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <HoverScale>
                  <Card className="card-gradient border-0 shadow-elevation hover:shadow-industrial transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <motion.div 
                          className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 shadow-construction"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <value.icon className="w-8 h-8 text-primary-foreground" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-foreground font-poppins">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership - here's how we've grown 
              over the past 35 years.
            </p>
          </FadeUp>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <motion.div 
                className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-0.5"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ originY: 0 }}
              />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={milestone.year}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                  >
                    {/* Timeline dot */}
                    <motion.div 
                      className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                    />
                    
                    <HoverScale className={`w-full md:w-96 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <Card className="card-gradient border-0 shadow-elevation">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="text-3xl font-bold text-primary font-poppins">
                              {milestone.year}
                            </div>
                            <div className="text-muted-foreground">
                              {milestone.event}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-20 bg-gradient-hero text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-poppins">
              Certifications & Standards
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Our commitment to quality is backed by industry-leading certifications 
              and compliance with all relevant standards.
            </p>
          </FadeUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <StaggerItem key={cert}>
                  <HoverScale>
                    <motion.div 
                      className="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CheckCircle className="w-6 h-6 text-construction-orange-light flex-shrink-0" />
                      </motion.div>
                      <span className="text-primary-foreground">{cert}</span>
                    </motion.div>
                  </HoverScale>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <FadeUp className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our trusted partners like CMK Construction, URC Construction, 
              Sunex Concrete, and Esteem Engineering. Let's build something great together.
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <HoverScale>
                <Button asChild size="lg" className="text-lg px-8 py-6 shadow-construction">
                  <Link to="/contact">Start Partnership</Link>
                </Button>
              </HoverScale>
              <HoverScale>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/products">Browse Materials</Link>
                </Button>
              </HoverScale>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default About;
