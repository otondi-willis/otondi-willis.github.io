import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, Code } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-12">
          <span className="gradient-text">Resume</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible defaultValue="experience" className="space-y-4">
            {/* Education */}
            <AccordionItem value="education" className="card-elevated px-6 border-none">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  <span className="text-xl font-heading font-semibold">Education</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="border-l-2 border-accent pl-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Data & AI Program</h3>
                    <p className="text-accent font-medium">Cyber Shujaa</p>
                    <p className="text-sm text-muted-foreground">Sep – Dec 2025</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">AWS re/Start Scholarship</h3>
                    <p className="text-accent font-medium">eMobilis</p>
                    <p className="text-sm text-muted-foreground">Feb – Apr 2025</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">BSc. Biomedical Engineering</h3>
                    <p className="text-accent font-medium">Kenyatta University</p>
                    <p className="text-sm text-muted-foreground">2021</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Experience */}
            <AccordionItem value="experience" className="card-elevated px-6 border-none">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-accent" />
                  <span className="text-xl font-heading font-semibold">Experience</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="border-l-2 border-accent pl-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Service Centre Officer</h3>
                    <p className="text-accent font-medium">Equity Group Holdings</p>
                    <p className="text-sm text-muted-foreground mb-2">Mar 2024 – Present</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Optimized customer onboarding and query resolution processes</li>
                      <li>Built business case for AI chatbot implementation</li>
                      <li>15% improvement in resolution times through process mapping</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Software Developer & Tech Lead</h3>
                    <p className="text-accent font-medium">E&M Technology House</p>
                    <p className="text-sm text-muted-foreground mb-2">Jan – Dec 2024</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Led architecture for TeleAfia health-tech ecosystem platform</li>
                      <li>Designed microservices architecture with secure payment integration</li>
                      <li>Delivered MVP for flagship innovation hub project</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Relationship Officer</h3>
                    <p className="text-accent font-medium">Equity Group Holdings</p>
                    <p className="text-sm text-muted-foreground mb-2">Mar 2021 – Dec 2023</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Managed client portfolios and financial advisory services</li>
                      <li>Built strong customer relationships and retention strategies</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Certifications */}
            <AccordionItem value="certifications" className="card-elevated px-6 border-none">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-accent" />
                  <span className="text-xl font-heading font-semibold">Certifications</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Google UX Design",
                    "Product Management",
                    "Agile PM",
                    "Microsoft Business Analysis",
                    "Microsoft Software Development",
                  ].map((cert) => (
                    <Badge key={cert} variant="secondary" className="px-4 py-2 text-sm">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Skills */}
            <AccordionItem value="skills" className="card-elevated px-6 border-none">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-accent" />
                  <span className="text-xl font-heading font-semibold">Skills</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">AI/ML & Data</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Pandas", "Scikit-learn", "ML Strategy", "NumPy"].map((skill) => (
                      <span key={skill} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">BI & Analytics</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Power BI", "Tableau", "DAX", "SQL", "Data Visualization"].map((skill) => (
                      <span key={skill} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Cloud & Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Microservices", "Git", "Figma", "API Design"].map((skill) => (
                      <span key={skill} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Leadership</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Agile", "Stakeholder Communications", "Team Mentorship", "Product Strategy"].map(
                      (skill) => (
                        <span key={skill} className="tech-badge">
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Resume;
