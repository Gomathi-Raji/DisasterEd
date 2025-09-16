import { Shield, Users, BookOpen, AlertTriangle, CheckCircle, Award, MapPin, Cloud, Zap, Phone, Mountain, Droplets, Wind, Flame, Star, TrendingUp, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-disaster-prep.jpg";
import WeatherWidget from "@/components/WeatherWidget";
import QuickEmergencyPanel from "@/components/QuickEmergencyPanel";
import DisasterPreparednessSection from "@/components/DisasterPreparednessSection";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";

const Landing = () => {
  const features = [
    {
      icon: BookOpen,
      title: "AI-Powered Learning",
      description: "24/7 AI assistant providing instant disaster management guidance and educational content",
      color: "primary",
      link: "#",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Real-Time Weather Alerts",
      description: "Live weather monitoring with disaster risk assessment and emergency notifications",
      color: "warning",
      link: "/real-time-alerts",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response Hub",
      description: "Quick access to Indian emergency services, procedures, and safety resources",
      color: "emergency",
      link: "/emergency",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: MapPin,
      title: "Interactive Emergency Maps",
      description: "OpenStreetMap integration showing hospitals, fire stations, and evacuation routes",
      color: "safe",
      link: "/emergency-map",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Mountain,
      title: "Earthquake Preparedness",
      description: "Comprehensive earthquake safety protocols and building safety assessments",
      color: "orange",
      link: "/modules",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Droplets,
      title: "Flood Management",
      description: "Flood prediction, evacuation planning, and water safety emergency procedures",
      color: "blue",
      link: "/modules",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Wind,
      title: "Cyclone Safety",
      description: "Cyclone tracking, preparation checklists, and shelter location guidance",
      color: "purple",
      link: "/modules",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Flame,
      title: "Fire Emergency Response",
      description: "Fire safety protocols, evacuation procedures, and prevention strategies",
      color: "red",
      link: "/modules",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Students Trained" },
    { number: "1,200+", label: "Schools Connected" },
    { number: "25", label: "Disaster Types Covered" },
    { number: "99.5%", label: "Preparedness Score" }
  ];

  const emergencyNumbers = [
    { name: 'Police', number: '100', color: 'bg-red-500 hover:bg-red-600', description: 'Emergency Police Services' },
    { name: 'Fire Brigade', number: '101', color: 'bg-orange-500 hover:bg-orange-600', description: 'Fire & Rescue Services' },
    { name: 'Ambulance', number: '102', color: 'bg-green-500 hover:bg-green-600', description: 'Medical Emergency' },
    { name: 'Disaster Mgmt', number: '108', color: 'bg-blue-500 hover:bg-blue-600', description: 'Disaster Response' },
    { name: 'Women Helpline', number: '1091', color: 'bg-purple-500 hover:bg-purple-600', description: 'Women in Distress' },
    { name: 'Child Helpline', number: '1098', color: 'bg-pink-500 hover:bg-pink-600', description: 'Child Protection' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Enhanced Header */}
      <header className="border-b bg-white/90 dark:bg-background/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">DisasterEd</span>
            </div>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-muted-foreground hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <nav className="hidden md:flex space-x-6">
              <Link to="/emergency" className="text-muted-foreground hover:text-emergency transition-all font-medium hover-scale flex items-center space-x-1">
                <AlertTriangle className="h-4 w-4" />
                <span>Emergency</span>
              </Link>
              <Link to="/emergency-map" className="text-muted-foreground hover:text-primary transition-all font-medium hover-scale flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Maps</span>
              </Link>
              <Link to="/real-time-alerts" className="text-muted-foreground hover:text-warning transition-all font-medium hover-scale flex items-center space-x-1">
                <Cloud className="h-4 w-4" />
                <span>Alerts</span>
              </Link>
              <Link to="/geo-location-tips" className="text-muted-foreground hover:text-safe transition-all font-medium hover-scale flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>Safety Tips</span>
              </Link>
            </nav>
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <LanguageSelector />
              <Button variant="outline" className="hover-scale" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 hover-scale animate-pulse-glow" asChild>
                <Link to="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-primary/5 to-secondary/10 overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emergency rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary font-medium animate-pulse px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
                  🚨 India's #1 Emergency Preparedness Platform
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent animate-scale-in">
                  Master Disaster
                  <br />Response &
                  <br />Save Lives
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  India's most comprehensive disaster education platform trusted by educational institutions nationwide. 
                  Interactive training, real-time weather alerts, AI-powered guidance, OpenStreetMap integration,
                  and Indian emergency response tools to build truly prepared communities.
                </p>
              </div>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/50 dark:bg-card/50 rounded-xl backdrop-blur-sm border hover-scale transition-all animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '200ms'}}>
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold px-8 py-4 text-lg hover-scale animate-pulse-glow shadow-lg" asChild>
                  <Link to="/login">🚀 Start Training Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg hover-scale transition-all" asChild>
                  <Link to="/emergency">🚨 Emergency Hub</Link>
                </Button>
              </div>

              {/* Enhanced Emergency Numbers Quick Access */}
              <div className="bg-gradient-to-r from-red-50 via-orange-50 to-pink-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-pink-950/20 rounded-2xl p-6 border border-red-200 dark:border-red-800 shadow-emergency animate-fade-in" style={{animationDelay: '300ms'}}>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-red-800 dark:text-red-200">Indian Emergency Hotlines</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {emergencyNumbers.map((contact, index) => (
                    <Button
                      key={index}
                      size="sm"
                      className={`${contact.color} text-white font-bold hover-scale transition-all group relative overflow-hidden`}
                      onClick={() => window.open(`tel:${contact.number}`)}
                      title={contact.description}
                    >
                      <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-bold">{contact.name}</span>
                        <span className="text-lg font-black">{contact.number}</span>
                      </div>
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-red-700 dark:text-red-300 mt-3 text-center font-medium">
                  ⚡ Tap any number for instant calling • Available 24/7 across India
                </p>
              </div>

              {/* Enhanced Live Demo Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 animate-fade-in" style={{animationDelay: '400ms'}}>
                <Button variant="ghost" size="sm" className="text-sm bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/20 dark:hover:bg-blue-950/40 hover-scale transition-all border border-blue-200 dark:border-blue-800">
                  <Zap className="h-4 w-4 mr-1" />
                  AI Assistant (See floating bot →)
                </Button>
                <Button variant="ghost" size="sm" className="text-sm bg-green-50 hover:bg-green-100 dark:bg-green-950/20 dark:hover:bg-green-950/40 hover-scale transition-all border border-green-200 dark:border-green-800" asChild>
                  <Link to="/real-time-alerts">
                    <Cloud className="h-4 w-4 mr-1" />
                    Live Weather Alerts
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="text-sm bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/20 dark:hover:bg-purple-950/40 hover-scale transition-all border border-purple-200 dark:border-purple-800" asChild>
                  <Link to="/emergency-map">
                    <MapPin className="h-4 w-4 mr-1" />
                    Interactive Maps
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-scale transition-all">
                <img 
                  src={heroImage} 
                  alt="Disaster preparedness education in action"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Enhanced Readiness Score Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white dark:bg-card rounded-xl p-4 shadow-xl border hover-scale transition-all animate-pulse-glow">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-muted-foreground">Readiness Score</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">99.5%</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border animate-pulse">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 right-4 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border animate-pulse delay-500">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">50K+ Trained</span>
                </div>
              </div>
              
              {/* Weather Widget positioned in hero - Mobile responsive */}
              <div className="absolute top-16 right-2 w-64 lg:w-72 hidden sm:block">
                <WeatherWidget showAlerts={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Live Demo Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-950 dark:to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16 animate-fade-in">
            <Badge variant="outline" className="text-primary px-4 py-2 bg-white/50 dark:bg-card/50 backdrop-blur-sm">✨ Try Our Platform Live</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Experience DisasterEd In Action</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Test our emergency response tools and AI assistant with real Indian emergency data - no signup required
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-2 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800 hover-scale animate-fade-in group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-red-600 transition-colors">Emergency Hub</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-4 text-sm">
                  Access Indian emergency contacts (100, 101, 102, 108), safety procedures, and real-time alerts
                </p>
                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 hover-scale shadow-lg" asChild>
                  <Link to="/emergency">🚨 Open Emergency Hub</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-2 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-green-200 dark:border-green-800 hover-scale animate-fade-in group overflow-hidden relative" style={{animationDelay: '100ms'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">Interactive Maps</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-4 text-sm">
                  OpenStreetMap integration showing hospitals, fire stations, and evacuation routes across India
                </p>
                <Button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 hover-scale shadow-lg" asChild>
                  <Link to="/emergency-map">🗺️ View Emergency Maps</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-2 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800 hover-scale animate-fade-in group overflow-hidden relative" style={{animationDelay: '200ms'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-yellow-600 transition-colors">Weather Alerts</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-4 text-sm">
                  Real-time weather monitoring with disaster risk assessment for Indian conditions
                </p>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 hover-scale shadow-lg" asChild>
                  <Link to="/real-time-alerts">⛈️ View Weather Alerts</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disaster Preparedness Section */}
      <DisasterPreparednessSection />

      {/* Enhanced Features Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 sm:mb-16 animate-fade-in">
            <Badge variant="outline" className="text-primary px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">🛡️ Comprehensive Safety Education</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Everything You Need for Disaster Preparedness</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized training modules covering all major natural disasters affecting India - from earthquakes to cyclones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-3 cursor-pointer group overflow-hidden relative border-2 hover:border-primary/20 animate-fade-in" style={{animationDelay: `${index * 50}ms`}}>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <Link to={feature.link}>
                  <CardHeader className="relative z-10 pb-4">
                    <div className={`inline-flex p-4 rounded-full mx-auto bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors font-bold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="outline" className="hover-scale">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* Simple dot pattern for background */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in space-y-6">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Join 50,000+ Students Already Prepared
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Build Safer Communities Across India?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of educational institutions already using DisasterEd to enhance their emergency preparedness 
              with Indian emergency services integration and real-time weather monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-semibold hover-scale bg-white text-primary hover:bg-white/90 shadow-2xl" asChild>
                <Link to="/login">🚀 Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold hover-scale border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/emergency">🚨 Try Emergency Hub</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 opacity-80">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-300 fill-current" />
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">1,200+ Schools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Emergency Panel */}
      <QuickEmergencyPanel />

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">DisasterEd</span>
              </div>
              <p className="text-muted-foreground">
                Building safer communities through education and preparedness.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/emergency" className="hover:text-primary">🚨 Emergency Hub</Link></li>
                <li><Link to="/emergency-map" className="hover:text-primary">🗺️ Interactive Maps</Link></li>
                <li><span className="text-muted-foreground">🤖 AI Assistant (floating chat)</span></li>
                <li><Link to="/real-time-alerts" className="hover:text-primary">⛈️ Weather Alerts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Emergency Services (India)</h3>
              <ul className="space-y-6 text-muted-foreground">
                <li><span className="text-red-600 font-bold">🚔 Police: 100</span></li>
                <li><span className="text-orange-600 font-bold">🚒 Fire: 101</span></li>
                <li><span className="text-green-600 font-bold">🚑 Ambulance: 102</span></li>
                <li><span className="text-blue-600 font-bold">🌪️ Disaster: 108</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Get Started</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/login" className="hover:text-primary">Sign In</Link></li>
                <li><Link to="/role-selection" className="hover:text-primary">Choose Role</Link></li>
                <li><Link to="/modules" className="hover:text-primary">Training Modules</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 DisasterEd India. Comprehensive disaster preparedness education platform. All rights reserved.</p>
            <p className="text-sm mt-2">🇮🇳 Proudly serving educational institutions across India with localized emergency response training.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;