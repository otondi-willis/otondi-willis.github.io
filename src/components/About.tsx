import { Heart, Building2, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutPhoto from "@/assets/about-photo.jpg";

const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Healthcare + AI",
      description: "Building compliant, scalable health-tech systems",
    },
    {
      icon: Building2,
      title: "Fintech Expertise",
      description: "Fraud detection, onboarding automation, process optimization",
    },
    {
      icon: Brain,
      title: "Technical Leadership",
      description: "Leading cross-functional teams from MVP to production",
    },
  ];

  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-12 animate-fade-in">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src={aboutPhoto}
                alt="Willis Otondi in modern office environment"
                className="w-full rounded-2xl shadow-lg border-4 border-[hsl(173,55%,39%)]"
              />
            </div>
          </div>

          {/* Bio and Highlights */}
          <div className="space-y-8 animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                Dynamic <strong>Biomedical Engineer</strong> transitioning into{" "}
                <strong>AI/ML Solutions Architecture</strong>, with a unique fusion of expertise in
                healthcare technology, cloud computing, software development, and product design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                I bridge the gap between clinical needs and cutting-edge AI, delivering solutions
                that are not only technically robust but also deeply human-centered. From leading
                the architecture of a full-stack telemedicine platform to optimizing digital banking
                experiences, I thrive at the intersection of{" "}
                <span className="text-accent font-semibold">innovation, empathy, and impact</span>.
              </p>
            </div>

            {/* Value Highlights */}
            <div className="grid gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="card-elevated p-6 hover:border-accent transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
