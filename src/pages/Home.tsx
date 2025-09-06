import { ArrowRight, Truck, Award, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-construction.jpg';
import materialsImage from '@/assets/materials-showcase.jpg';

const Home = () => {
  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery for bulk orders within our service area"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "All materials tested and certified to meet industry standards"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock customer support for urgent construction needs"
    },
    {
      icon: Users,
      title: "B2B Focus",
      description: "Specialized wholesale pricing and services for construction companies"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Construction Partners" },
    { number: "10M+", label: "Tons Delivered" },
    { number: "15", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-earth-brown/80 via-earth-brown/60 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
              Premium Construction 
              <span className="text-construction-orange-light block mt-2">
                Materials Supplier
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your trusted wholesale partner for high-quality sands, stones, and aggregates. 
              Serving construction companies with reliable bulk delivery since 2009.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
              <Button size="lg" className="text-lg px-8 py-6 shadow-construction hover:shadow-construction">
                <Link to="/products" className="flex items-center gap-2">
                  View Our Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                <Link to="/contact">Get Quote Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Why Choose StoneMaster?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional service and premium materials 
              to keep your construction projects on schedule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="card-gradient border-0 shadow-elevation hover:shadow-industrial transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-construction">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 font-poppins">
                  {stat.number}
                </div>
                <div className="text-xl text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
                Premium Quality Materials for Every Project
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From fine concrete sand to large aggregate stones, we supply the complete range 
                of construction materials. Our products meet all industry standards and are 
                perfect for residential, commercial, and industrial projects.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Concrete Sand & Fine Aggregates",
                  "Crushed Stone & Coarse Aggregates", 
                  "Specialty Sands & Fill Materials",
                  "Custom Material Blends"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="shadow-construction">
                <Link to="/products" className="flex items-center gap-2">
                  Explore All Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src={materialsImage}
                alt="Construction materials showcase"
                className="rounded-2xl shadow-industrial w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-poppins">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get competitive wholesale pricing and reliable delivery for your construction materials. 
              Our team is ready to support your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-construction">
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;