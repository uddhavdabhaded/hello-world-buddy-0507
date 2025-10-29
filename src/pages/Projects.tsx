import Layout from "@/components/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce App",
      description: "Cross-platform e-commerce application with user authentication, product listings, cart management, and payment gateway integration. Responsive UI with seamless navigation across Android and iOS.",
      technologies: ["Flutter", "Firebase", "Payment Gateway", "Authentication"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Task management and productivity application with task creation, reminders, push notifications, and offline synchronization. Integrated Google Sign-In and JWT authentication.",
      technologies: ["Flutter", "Node.js", "JWT", "Google Sign-In", "Push Notifications"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Office Book",
      description: "Employee management application with login/logout functionality, task creation, updates, and deletions. Features real-time data synchronization, user roles, and smooth UI experience.",
      technologies: ["Flutter", "Node.js", "Real-time Sync", "User Management"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "School Book",
      description: "School management application with student registration, attendance tracking, timetable management, and parent-teacher communication. Includes push notifications and secure authentication.",
      technologies: ["Flutter", "Firebase", "Push Notifications", "Authentication"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "CRM App",
      description: "Customer relationship management app with lead management, deal tracking, communication, and reporting features to help businesses improve client interactions and boost sales.",
      technologies: ["Flutter", "Node.js", "API Integration", "Analytics"],
      image: "/placeholder.svg",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "ERP System",
      description: "Enterprise resource planning system with modules for HR, Inventory, and Finance. Built with React.js, Node.js, and PostgreSQL with JWT-based authentication for secure access.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "JWT"],
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
