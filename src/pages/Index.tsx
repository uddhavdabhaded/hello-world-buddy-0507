import { ArrowRight, Code, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer & Technical Expert
            </p>
            <p className="text-lg text-muted-foreground">
              Passionate about creating innovative solutions and building amazing web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button size="lg">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="rounded-full w-4/5 h-4/5 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/skills">
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Code className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <p className="text-muted-foreground">
                  Explore my technical expertise and proficiencies
                </p>
              </div>
            </Link>
            <Link to="/experience">
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
                <p className="text-muted-foreground">
                  View my professional journey and achievements
                </p>
              </div>
            </Link>
            <Link to="/contact">
              <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Mail className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
                <p className="text-muted-foreground">
                  Let's discuss your next project together
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
