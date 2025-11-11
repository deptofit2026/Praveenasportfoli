import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Master of Engineering (M.E)",
    field: "Computer Science and Engineering",
    institution: "Karpagam University, Coimbatore",
    year: "2012",
    percentage: "89%",
  },
  {
    degree: "Bachelor of Engineering (B.Tech.)",
    field: "Information Technology",
    institution: "Vivekanandha College of Engineering for Women, Tirchengodu",
    year: "2010",
    percentage: "74%",
  },
  {
    degree: "XII Standard (Higher Secondary)",
    field: "Mathematics, Biology",
    institution: "Reliance Mat Hr Sec School, Kupandapalayam",
    year: "2006",
    percentage: "67.5%",
  },
  {
    degree: "X Standard (SSLC)",
    field: "",
    institution: "Grace High School, Anna Nagar, Erode",
    year: "2004",
    percentage: "82.4%",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Education</h2>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-lg text-foreground mb-1">{edu.field}</p>
                    )}
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <div className="md:text-right space-y-1">
                    <p className="text-2xl font-bold text-accent">{edu.percentage}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
