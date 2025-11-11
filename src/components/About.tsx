import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          
          <Card className="p-8 shadow-lg border-border/50 bg-card">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Objective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be associated with a progressive institution, to strive for academic excellence and impart quality education, 
                  which also gives scope to update my knowledge and skills in accordance with the latest trends and be part of the 
                  team that dynamically works for the growth of the Institution.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Area of Interest</h3>
                <div className="flex gap-3">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                    Data Mining
                  </span>
                  <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full font-medium">
                    Data Warehousing
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Key Strengths</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">▸</span>
                    <span>Good adaptability and ability to work in diverse environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">▸</span>
                    <span>Strong team leadership skills with a positive attitude</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1">▸</span>
                    <span>Ability to strike a friendly chord with any kind of personality and versatility</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
