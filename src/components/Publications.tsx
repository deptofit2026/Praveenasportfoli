import { Card } from "@/components/ui/card";
import { BookOpen, FileText } from "lucide-react";

const publications = [
  {
    type: "Journal Publication",
    title: "Efficient Feature Reduction Technique for a large scale text data",
    venue: "International Journal of Advanced Research In Technology",
    icon: BookOpen,
  },
];

const conferences = [
  {
    title: "An Efficient Feature Reduction Technique for a large scale text data",
    venue: "J.K.K. Nattraja College of Engineering And Technology",
    type: "International Conference",
  },
  {
    title: "Quantum Cryptography for Securing Wireless LAN Network",
    venue: "Velalar College of Engineering Technology",
    type: "National Conference",
  },
  {
    title: "A Prediction Algorithm using Combination of Modified ID3 and Divisive Hierarchical Clustering Method",
    venue: "SNS College of Technology",
    type: "National Conference",
  },
  {
    title: "Diagnosing Anomalies and Identifying faulty Nodes in Sensor Networks",
    venue: "Hindustha College of Engineering and Technology",
    type: "National Conference",
  },
  {
    title: "Efficient Feature Reduction Technique for a large scale text data",
    venue: "SSM College of Engineering",
    type: "National Conference",
  },
];

const Publications = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Publications & Research
          </h2>

          <div className="space-y-8">
            {/* Journal Publications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Journal Publications
              </h3>
              {publications.map((pub, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
                >
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground">
                      {pub.title}
                    </h4>
                    <p className="text-muted-foreground italic">{pub.venue}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Conference Presentations */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Conference Presentations
              </h3>
              <div className="space-y-4">
                {conferences.map((conf, index) => (
                  <Card
                    key={index}
                    className="p-5 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/30 bg-card"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full whitespace-nowrap">
                          {conf.type}
                        </span>
                        <div>
                          <h4 className="text-base font-semibold text-foreground">
                            {conf.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {conf.venue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
