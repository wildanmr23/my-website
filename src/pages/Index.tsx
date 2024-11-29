import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  Phone,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const skills = [
    "Html",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "React js",
    "Vite js",
    "Node js",
  ];

  const projects = [
    {
      title: "School website",
      description: "School website with the latest technology and modern design",
      tech: ["Html", "CSS", "Javascript", "React js", "Bootstrap"],
      link: "https://website-sekolah-demo.vercel.app",
      image: "assets/porto1.png",
    },
    {
      title: "Property agent company",
      description: "Collaborative task management tool with real-time updates",
      tech: ["Html", "CSS", "Javascript", "Vite js", "Tailwind"],
      link: "https://demo-website-properti.vercel.app",
      image:
        "assets/porto2.png",
    },
    {
      title: "Portfolio Website",
      description: "With an attractive appearance and contemporary design",
      tech: ["Html", "CSS", "Javascript", "Vite js", "Tailwind"],
      link: "https://website-travel-orcin.vercel.app/",
      image:
        "assets/porto3.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="py-16 min-h-screen flex items-center justify-center text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <Avatar className="relative w-32 h-32 border-4 border-primary rounded-full overflow-hidden">
              <AvatarImage
                src="assets/owner.png"
                alt="Your Name"
                className="w-full h-full object-cover"
              />
              <AvatarFallback className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700 text-xl font-bold">
                WM
              </AvatarFallback>
            </Avatar>
          </div>
          <h1 className="heading">
            Hi, I'm <span className="text-primary">Wildan Mursalin Rizqia</span>
          </h1>
          <p className="subheading">
            Full Stack Web Developer specializing in modern web applications
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <a href="#projects">
              <Button variant="outline"  className="px-6 py-4">
                <Eye className="mr-2" />
                View Projects
              </Button>
            </a>
            <a
              href="https://wa.me/6282127312767"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-8 py-5">
                <Phone className="mr-2" />
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section*/}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <h2 className="heading text-4xl font-bold text-foreground mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Side: Text */}
            <div>
              <p className="text-lg leading-relaxed text-foreground/80">
                I am a web developer with expertise in building responsive and
                dynamic websites using HTML, CSS, and JavaScript. I leverage
                modern frameworks and tools such as React.js for building
                interactive user interfaces, Vite.js for fast and efficient
                development workflows, and utilize both Bootstrap and Tailwind
                CSS to create visually appealing, mobile-first, and responsive
                designs. My development approach ensures that web applications
                are optimized for performance and provide seamless user
                experiences across different devices and browsers.
              </p>
            </div>
            {/* Right Side: Cards */}
            <div>
              <div className="grid gap-6">
                {/* Card 1 */}
                <div className="block bg-background/50 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all hover:bg-background/80 flex items-start gap-4">
                  {/* Icon */}
                  <GraduationCap className="text-foreground text-primary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2 ">
                      Al - Furqon Islamic Boarding School
                    </h4>
                    <p className="text-foreground/80">Since (2017 - 2023)</p>
                    <p className="text-sm text-foreground/60 mt-2">
                      Have completed education with the best academic degree.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="block bg-background/50 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all hover:bg-background/80 flex items-start gap-4">
                  {/* Icon */}
                  <GraduationCap className="text-foreground w-8 h-8 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Ahmad Dahlan University
                    </h4>
                    <p className="text-foreground/80">Since (2023 - Present)</p>
                    <p className="text-sm text-foreground/60 mt-2">
                      I am currently studying in the field of informatics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="heading">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-secondary/20 p-4 rounded-lg text-center hover:bg-primary/20 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-secondary/20" id="projects">
        <div className="container">
          <h2 className="heading">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="block bg-background/50 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all hover:bg-background/80"
              >
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="heading">Get In Touch</h2>
          <p className="subheading">Let's work together on your next project</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/wildanmr23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://id.linkedin.com/in/wildan-mursalin-rizqia-3950b627b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto: wildanmursalin.28@gmail.com">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://wa.me/6282127312767"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
