import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Truck, Info, CheckCircle } from 'lucide-react';
import materialsImage from '@/assets/materials-showcase.jpg';

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
      <section className="py-20 bg-gradient-industrial">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground mb-6 font-poppins">
              Premium Construction Materials
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive selection of high-quality sands, stones, and aggregates 
              for all your construction and industrial needs.
            </p>
            <div className="flex justify-center">
              <img 
                src={materialsImage}
                alt="Various construction materials"
                className="rounded-2xl shadow-industrial max-w-2xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="sand" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-1 bg-muted/50">
              <TabsTrigger 
                value="sand" 
                className="py-4 px-6 text-center data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div>
                  <div className="font-semibold">Sand & Fine Aggregates</div>
                  <div className="text-xs opacity-80">Concrete, Masonry & Fill</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="stone" 
                className="py-4 px-6 text-center data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div>
                  <div className="font-semibold">Stone & Coarse Aggregates</div>
                  <div className="text-xs opacity-80">Crushed Stone & Gravel</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="specialty" 
                className="py-4 px-6 text-center data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div>
                  <div className="font-semibold">Raw Salt & Specialty</div>
                  <div className="text-xs opacity-80">Salt Supply & Materials</div>
                </div>
              </TabsTrigger>
            </TabsList>

            {Object.entries(productCategories).map(([key, category]) => (
              <TabsContent key={key} value={key} className="animate-fade-in">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.products.map((product, index) => (
                    <Card 
                      key={product.name}
                      className="card-gradient border-0 shadow-elevation hover:shadow-industrial transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground font-poppins">
                              {product.name}
                            </h3>
                            <Badge variant="secondary" className="mt-2">
                              {product.price}
                            </Badge>
                          </div>
                          <Info className="w-5 h-5 text-muted-foreground" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          {product.description}
                        </p>
                        
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Specifications:</h4>
                          <ul className="space-y-1">
                            {product.specifications.map((spec) => (
                              <li key={spec} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-3 h-3 text-primary" />
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-2">Applications:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.applications.map((app) => (
                              <Badge key={app} variant="outline" className="text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <Button className="w-full shadow-construction">
                            Request Quote for {product.name}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-poppins">
              Flexible Delivery Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer multiple delivery options to meet your project timeline and budget requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => (
              <Card 
                key={option.title}
                className="card-gradient border-0 shadow-elevation text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-construction">
                    <Truck className="w-8 h-8 text-primary-foreground" />
                  </div>
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
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="shadow-construction">
              Contact Our Logistics Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;