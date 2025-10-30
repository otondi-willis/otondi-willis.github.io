import { Button } from "@/components/ui/button";
import heroHeadshot from "@/assets/hero-headshot.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(225, 79%, 18%) 0%, hsl(197, 100%, 18%) 100%)",
      }}
    >
      {/* Subtle mesh overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Headshot */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[hsl(173,55%,39%)] shadow-[0_0_40px_rgba(42,157,143,0.4)]">
              <img
                src={heroHeadshot}
                alt="Willis Otondi - AI Solutions Architect"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Willis Otondi
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-[hsl(211,100%,50%)] mb-6">
              Designing AI solutions that empower people and endure.
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              I create intuitive products that users love, architect solutions that last, and mentor
              minds that drive change—because innovation isn't just about technology, it's about
              people.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(211,100%,50%)] hover:bg-[hsl(211,100%,45%)] text-white shadow-[0_4px_20px_rgba(0,123,255,0.3)] transition-all hover:shadow-[0_6px_30px_rgba(0,123,255,0.4)] hover:scale-105"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
