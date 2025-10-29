import Layout from "@/components/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team chat, and project tracking features.",
      technologies: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with data visualization and automated reporting.",
      technologies: ["Next.js", "GraphQL", "MongoDB", "Recharts"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      technologies: ["React", "API Integration", "CSS3", "Geolocation"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website Builder",
      description: "Drag-and-drop website builder for creating professional portfolios with customizable themes.",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-responsive fitness app with workout plans, progress tracking, and nutrition guidance.",
      technologies: ["React Native", "Express", "PostgreSQL", "Redux"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
          <p className="text-center text-muted-foreground mb-12">
            A showcase of my recent work and personal projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
