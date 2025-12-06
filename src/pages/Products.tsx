import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Truck, Info, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import materialsImage from '@/assets/materials-showcase.jpg';
import { 
  FadeUp, 
  StaggerContainer, 
  StaggerItem,
  HoverScale,
  HeroText
} from '@/components/animations/MotionWrapper';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('sand');

  const productCategories = {
    sand: {
      title: "Sand & Fine Aggregates",
      description: "Premium quality sand products for all construction applications",
      products: [
        {
          name: "Concrete Sand",
          description: "High-quality washed sand perfect for concrete mixing and masonry work",
          specifications: ["Size: 0.15-4.75mm", "Washed & Screened", "Low Clay Content"],
          applications: ["Concrete Production", "Mortar Mixing", "Paving"],
          price: "From $35/ton"
        },
        {
          name: "Masonry Sand",
          description: "Fine, clean sand ideal for bricklaying and block work",
          specifications: ["Size: 0.15-2.36mm", "Angular Grains", "Consistent Gradation"],
          applications: ["Bricklaying", "Block Work", "Pointing"],
          price: "From $40/ton"
        },
        {
          name: "Fill Sand",
          description: "General purpose sand for backfilling and base preparation",
          specifications: ["Size: 0.075-9.5mm", "Well-Graded", "Compactable"],
          applications: ["Backfilling", "Base Preparation", "Pipe Bedding"],
          price: "From $25/ton"
        },
        {
          name: "Specialty Sands",
          description: "Custom sand blends for specific project requirements",
          specifications: ["Custom Gradations", "Tested & Certified", "Project-Specific"],
          applications: ["Sports Fields", "Filtration", "Specialized Construction"],
          price: "Quote on Request"
        }
      ]
    },
    stone: {
      title: "Stone & Coarse Aggregates", 
      description: "Crushed stone and aggregate materials for heavy construction",
      products: [
        {
          name: "Crushed Stone #57",
          description: "Standard crushed stone for drainage and concrete applications",
          specifications: ["Size: 19-25mm", "Clean & Angular", "ASTM Compliant"],
          applications: ["Concrete Mix", "Drainage", "Road Base"],
          price: "From $45/ton"
        },
        {
          name: "Crushed Stone #67",
          description: "Medium-sized crushed stone for various construction uses",
          specifications: ["Size: 12-19mm", "Well-Graded", "Low Absorption"],
          applications: ["Concrete", "Asphalt", "Railroad Ballast"],
          price: "From $42/ton"
        },
        {
          name: "Pea Gravel",
          description: "Small, rounded stones perfect for decorative and drainage applications",
          specifications: ["Size: 6-12mm", "Rounded", "Natural Color"],
          applications: ["Landscaping", "Drainage", "Walkways"],
          price: "From $55/ton"
        },
        {
          name: "Riprap Stone",
          description: "Large stone for erosion control and heavy construction",
          specifications: ["Size: 150-600mm", "Angular & Durable", "Tested Strength"],
          applications: ["Erosion Control", "Retaining Walls", "Breakwaters"],
          price: "From $65/ton"
        }
      ]
    },
    specialty: {
      title: "Raw Salt & Specialty Materials",
      description: "Premium raw salt supply across Tamil Nadu and specialty construction materials", 
      products: [
        {
          name: "Raw Salt - Industrial Grade",
          description: "Premium quality raw salt supplied to major manufacturers across Tamil Nadu",
          specifications: ["High Purity", "Bulk Quantities", "All-TN Delivery"],
          applications: ["RTC Salt", "Alagar Salt", "Industrial Processing"],
          price: "Quote on Request"
        },
        {
          name: "Raw Salt - Commercial Grade",
          description: "Quality raw salt for various commercial and manufacturing applications",
          specifications: ["Consistent Quality", "Large Volume Supply", "Regular Supply"],
          applications: ["Salt Manufacturing", "Food Industry", "Commercial Use"],
          price: "Quote on Request"
        },
        {
          name: "Drainage Stone",
          description: "Specially graded stone for effective water management systems",
          specifications: ["Open-Graded", "High Permeability", "Durable"],
          applications: ["French Drains", "Septic Systems", "Foundation Drainage"],
          price: "Quote on Request"
        },
        {
          name: "Base Course Material",
          description: "Engineered aggregate blend for road and pavement construction",
          specifications: ["Dense-Graded", "Optimized Gradation", "High CBR"],
          applications: ["Road Construction", "Parking Areas", "Heavy-Duty Pavements"],
          price: "Quote on Request"
        }
      ]
    }
  };

  const deliveryOptions = [
    {
      title: "Standard Delivery",
      description: "Next-day delivery for orders placed before 3 PM",
      minOrder: "5 tons minimum"
    },
    {
      title: "Same-Day Rush",
      description: "Emergency delivery within 4 hours (subject to availability)",
      minOrder: "10 tons minimum"
    },
    {
      title: "Scheduled Delivery", 
      description: "Plan ahead with scheduled deliveries up to 30 days in advance",
      minOrder: "No minimum"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${materialsImage})` }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <HeroText delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-poppins">
                Premium Construction Materials
              </h1>
            </HeroText>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Comprehensive selection of high-quality sands, stones, and aggregates 
              for all your construction and industrial needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="sand" className="w-full" onValueChange={setSelectedCategory}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1 bg-muted/50">
                <TabsTrigger 
                  value="sand" 
                  className="py-4 px-6 text-center data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  <div>
                    <div className="font-semibold">Sand & Fine Aggregates</div>
                    <div className="text-xs opacity-80">Concrete, Masonry & Fill</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="stone" 
                  className="py-4 px-6 text-center data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  <div>
                    <div className="font-semibold">Stone & Coarse Aggregates</div>
                    <div className="text-xs opacity-80">Crushed Stone & Gravel</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="specialty" 
                  className="py-4 px-6 text-center data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  <div>
                    <div className="font-semibold">Raw Salt & Specialty</div>
                    <div className="text-xs opacity-80">Salt Supply & Materials</div>
                  </div>
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {Object.entries(productCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <FadeUp className="mb-12 text-center">
                      <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
                        {category.title}
                      </h2>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {category.description}
                      </p>
                    </FadeUp>

                    <StaggerContainer className="grid md:grid-cols-2 gap-8">
                      {category.products.map((product) => (
                        <StaggerItem key={product.name}>
                          <HoverScale>
                            <Card className="card-gradient border-0 shadow-elevation hover:shadow-industrial transition-all duration-300 h-full">
                              <CardHeader>
                                <CardTitle className="flex justify-between items-start">
                                  <div>
                                    <h3 className="text-xl font-semibold text-foreground font-poppins">
                                      {product.name}
                                    </h3>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 0.2 }}
                                    >
                                      <Badge variant="secondary" className="mt-2">
                                        {product.price}
                                      </Badge>
                                    </motion.div>
                                  </div>
                                  <motion.div
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <Info className="w-5 h-5 text-muted-foreground" />
                                  </motion.div>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                  {product.description}
                                </p>
                                
                                <div>
                                  <h4 className="font-medium text-foreground mb-2">Specifications:</h4>
                                  <ul className="space-y-1">
                                    {product.specifications.map((spec, specIndex) => (
                                      <motion.li 
                                        key={spec} 
                                        className="flex items-center gap-2 text-sm text-muted-foreground"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: specIndex * 0.1 }}
                                      >
                                        <CheckCircle className="w-3 h-3 text-primary" />
                                        {spec}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="font-medium text-foreground mb-2">Applications:</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {product.applications.map((app, appIndex) => (
                                      <motion.div
                                        key={app}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: appIndex * 0.1 }}
                                      >
                                        <Badge variant="outline" className="text-xs">
                                          {app}
                                        </Badge>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>

                                <motion.div 
                                  className="pt-4 border-t border-border"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Button asChild className="w-full shadow-construction">
                                    <Link to="/contact">Request Quote for {product.name}</Link>
                                  </Button>
                                </motion.div>
                              </CardContent>
                            </Card>
                          </HoverScale>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Flexible Delivery Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer multiple delivery options to meet your project timeline and budget requirements.
            </p>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {deliveryOptions.map((option) => (
              <StaggerItem key={option.title}>
                <HoverScale>
                  <Card className="card-gradient border-0 shadow-elevation text-center h-full">
                    <CardContent className="p-8">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-construction"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Truck className="w-8 h-8 text-primary-foreground" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground font-poppins">
                        {option.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {option.description}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {option.minOrder}
                      </Badge>
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
            <HoverScale>
              <Button asChild size="lg" className="shadow-construction">
                <Link to="/contact">Contact Our Logistics Team</Link>
              </Button>
            </HoverScale>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
