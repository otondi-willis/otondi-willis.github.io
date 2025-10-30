import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import teleafiaImg from "@/assets/project-teleafia.jpg";
import equityImg from "@/assets/project-equity.jpg";
import elpImg from "@/assets/project-elp.jpg";

const Projects = () => {
  const projects = [
    {
      title: "TeleAfia – Health-Tech Ecosystem Platform",
      description: "Full-stack microservices platform bridging healthcare access gaps",
      image: teleafiaImg,
      role: "Tech Lead & Solutions Architect",
      period: "Jan–Nov 2024",
      challenge: "Bridge healthcare access gap in underserved areas",
      solution: "Designed and led microservices architecture with secure payments & telemedicine",
      outcome: "MVP launched as flagship innovation hub project",
      tech: ["Python", "Microservices", "AWS", "Figma", "Payment APIs"],
    },
    {
      title: "Equity Bank Digital Onboarding Initiative",
      description: "Process optimization and digital transformation strategy",
      image: equityImg,
      role: "CX & Process Analyst",
      period: "2021–Present",
      challenge: "High customer query volume, low digital adoption",
      solution: "Process mapping, digital guidance protocols, escalation workflows",
      outcome: "15% faster resolution, AI chatbot business case approved",
      tech: ["Process Mapping", "CX Design", "Analytics", "Documentation"],
    },
    {
      title: "ELP Uganda Innovation Hub",
      description: "Leading 7 concurrent technical projects with 40 scholars",
      image: elpImg,
      role: "Lead Project Coordinator",
      period: "Feb–Dec 2024",
      challenge: "Manage multiple projects with diverse technical stacks",
      solution: "Architecture reviews, Git standardization, stakeholder communications",
      outcome: "100% on-time delivery, elevated technical maturity across teams",
      tech: ["Git", "Architecture Review", "Project Management", "Mentorship"],
    },
  ];

  return (
    <section id="projects" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real-world impact across healthcare, fintech, and innovation ecosystems
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-elevated overflow-hidden group hover:border-accent transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="text-xs text-accent font-medium">
                    {project.role} • {project.period}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-foreground">Challenge:</span>{" "}
                    <span className="text-muted-foreground">{project.challenge}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Solution:</span>{" "}
                    <span className="text-muted-foreground">{project.solution}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[hsl(173,55%,39%)]">Outcome:</span>{" "}
                    <span className="text-muted-foreground">{project.outcome}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                >
                  View Details <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
