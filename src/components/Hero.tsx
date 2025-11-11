import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4">
            S.P. Praveena
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
            Assistant Professor | Information Technology
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            M.E. in Computer Science and Engineering with expertise in Data Mining, Data Warehousing, and cutting-edge research in feature reduction techniques
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Credentials
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 justify-center items-center pt-8 text-primary-foreground/80">
            <a href="mailto:Praveena.ams14@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="text-sm">Praveena.ams14@gmail.com</span>
            </a>
            <a href="tel:+919486904766" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-5 w-5" />
              <span className="text-sm">+91 9486904766</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
