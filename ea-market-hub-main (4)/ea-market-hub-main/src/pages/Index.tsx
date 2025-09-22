import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingCart, 
  Users, 
  Truck, 
  Shield, 
  Star, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Leaf,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import marketplaceImage from "@/assets/marketplace-features.jpg";
import sustainableImage from "@/assets/sustainable-farming.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl text-center mx-auto text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Connecting Farmers & Buyers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Agricultural Business with <span className="text-green-fresh">E-AGRO MARKET</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              The ultimate digital marketplace connecting farmers directly with buyers, ensuring fair prices and fresh produce for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                Start Selling <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              What is E-AGRO MARKET?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              E-AGRO MARKET is a revolutionary digital platform that bridges the gap between agricultural producers and consumers. 
              Our marketplace empowers farmers to sell their products directly to buyers, eliminating middlemen and ensuring 
              fair prices while providing consumers access to fresh, high-quality agricultural products.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={marketplaceImage} 
                  alt="Digital marketplace features" 
                  className="rounded-lg shadow-medium w-full"
                />
              </div>
              <div className="text-left space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Direct Farm-to-Consumer</h4>
                    <p className="text-muted-foreground">Connect directly with local farmers and get the freshest produce</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Fair Price Guarantee</h4>
                    <p className="text-muted-foreground">Transparent pricing that benefits both farmers and consumers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Quality Assurance</h4>
                    <p className="text-muted-foreground">Rigorous quality checks ensure you get premium agricultural products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose E-AGRO MARKET?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform offers comprehensive solutions for modern agricultural commerce
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Easy Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Browse and purchase agricultural products with just a few clicks
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Farmer Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with verified farmers across the region for authentic products
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Efficient logistics network ensures fresh produce reaches you quickly
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary">Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Safe and secure payment processing for all your transactions
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-to-r from-green-soft/50 to-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Supporting Sustainable Agriculture
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe in promoting sustainable farming practices that benefit both the environment and farming communities. 
                Our platform supports eco-friendly agriculture and helps build a more sustainable food system.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Eco-friendly farming practices</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Reduced carbon footprint</span>
              </div>
              <div className="flex items-center space-x-4">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Community empowerment</span>
              </div>
            </div>
            <div>
              <img 
                src={sustainableImage} 
                alt="Sustainable farming practices" 
                className="rounded-lg shadow-medium w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions? We're here to help you get started with E-AGRO MARKET
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-2">Mon-Fri 9AM-6PM</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@eagromarket.com</p>
                  <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">123 Agriculture Ave</p>
                  <p className="text-muted-foreground">Farmville, FC 12345</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">E-AGRO MARKET</span>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2024 E-AGRO MARKET. All rights reserved.</p>
              <p className="text-sm text-primary-foreground/80 mt-2">
                Connecting farmers and buyers for a sustainable future
              </p>
            </div>
          </div>
          <Separator className="my-8 bg-primary-foreground/20" />
          <div className="text-center text-sm text-primary-foreground/80">
            <p>Built with ❤️ for the agricultural community</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;