import { Award, Clock, Users, Truck, CheckCircle, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import facilityImage from '@/assets/facility-building.jpg';

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
    { year: "2009", event: "Company founded with a single quarry operation" },
    { year: "2012", event: "Expanded to serve 5 major metropolitan areas" },
    { year: "2015", event: "Achieved ISO 9001 quality certification" },
    { year: "2018", event: "Opened state-of-the-art processing facility" },
    { year: "2020", event: "Launched sustainable materials program" },
    { year: "2024", event: "Serving 500+ construction companies nationwide" }
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
      <section className="py-20 bg-gradient-industrial">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-foreground mb-6 font-poppins">
                Building Trust Through Quality & Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                For over 15 years, StoneMaster has been the trusted partner for construction 
                companies nationwide, delivering premium materials with unmatched reliability 
                and service excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="shadow-construction">
                  <Link to="/contact">Partner With Us</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/products">View Our Materials</Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src={facilityImage}
                alt="StoneMaster facility"
                className="rounded-2xl shadow-industrial w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <Card className="card-gradient border-0 shadow-elevation">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 shadow-construction">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide the construction industry with the highest quality materials, 
                    exceptional service, and innovative solutions that enable our partners 
                    to build lasting structures while maintaining project timelines and budgets.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-0 shadow-elevation">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 shadow-construction">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and innovative construction materials supplier, 
                    setting industry standards for quality, sustainability, and customer 
                    service while contributing to the infrastructure that shapes our communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing materials to 
              delivering exceptional customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="card-gradient border-0 shadow-elevation hover:shadow-industrial transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 shadow-construction">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership - here's how we've grown 
              over the past 15 years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-0.5"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`relative flex items-center animate-fade-in ${
                      index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10"></div>
                    
                    <Card className={`w-full md:w-96 ml-16 md:ml-0 card-gradient border-0 shadow-elevation ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">
              Certifications & Standards
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Our commitment to quality is backed by industry-leading certifications 
              and compliance with all relevant standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert}
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-construction-orange-light flex-shrink-0" />
                  <span className="text-primary-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the 500+ construction companies that trust StoneMaster for their 
              material supply needs. Let's build something great together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-construction">
                <Link to="/contact">Start Partnership</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/products">Browse Materials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;