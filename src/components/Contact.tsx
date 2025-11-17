import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Get In Touch
          </h2>

          <Card className="p-8 shadow-xl border-border/50 bg-card">
            <div className="space-y-6">
              <p className="text-center text-lg text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, collaborations, or academic exchanges.
              </p>

              <div className="space-y-4">
                <a 
                  href="mailto:Praveena.ams14@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-lg font-semibold text-foreground">Praveena.ams14@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+919486904766"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-accent/10 transition-colors group"
                >
                  <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-lg font-semibold text-foreground">+91 8675945571</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-lg font-semibold text-foreground">Namakal, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex justify-center">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => window.location.href = 'mailto:Praveena.ams14@gmail.com'}
                >
                  Send Email
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
