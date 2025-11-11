import { Card } from "@/components/ui/card";
import { Code2, Package, Monitor } from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "HTML", "Java", "PHP", ".NET"],
  },
  {
    category: "Packages & Tools",
    icon: Package,
    skills: ["MS Office", "Tally 9"],
  },
  {
    category: "Operating Systems",
    icon: Monitor,
    skills: ["Windows XP, Vista & 7", "Linux"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skillsData.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
