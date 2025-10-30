import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/willis-otondi/",
      username: "willis-otondi",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/otondi-willis",
      username: "otondi-willis",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:otondi.willise@gmail.com",
      username: "otondi.willise@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+254780005016",
      username: "+254 780 005 016",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(197, 100%, 18%) 0%, hsl(225, 79%, 18%) 100%)",
      }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 animate-fade-in">
            Let's Build the Future of AI
          </h2>
          <p className="text-xl text-gray-200 mb-12 animate-slide-up">
            Ready to transform healthcare and finance with intelligent, scalable solutions?
            <br />
            Let's connect and create impact together.
          </p>

          {/* Contact Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12 animate-scale-in">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group card-elevated bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white group-hover:text-[hsl(211,100%,70%)] transition-colors">
                      {link.label}
                    </div>
                    <div className="text-sm text-gray-300">{link.username}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-[hsl(211,100%,50%)] hover:bg-[hsl(211,100%,45%)] text-white shadow-[0_4px_20px_rgba(0,123,255,0.4)] transition-all hover:shadow-[0_6px_30px_rgba(0,123,255,0.5)] hover:scale-105 text-lg px-8 py-6"
          >
            <a href="mailto:otondi.willise@gmail.com">Hire Me as Your AI Solutions Architect</a>
          </Button>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/20 text-gray-300 text-sm">
            <p>© 2025 Willis Otondi. Building AI solutions that empower people and endure.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
