import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Resume</h1>
            <p className="text-muted-foreground mb-6">
              Download my complete resume or view it below
            </p>
            <Button size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume (PDF)
            </Button>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Professional Summary</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Detail-oriented Full Stack Developer with 2+ years of experience in building scalable 
                web and mobile applications. Proficient in Flutter for mobile and Node.js for backend, 
                with hands-on contribution to 2 client projects and 4 internal projects, managing both 
                modules and end-to-end development. Currently working at BAAP Company (since Aug 2025) 
                with focus on scalability and teamwork. Skilled in writing clean, maintainable code, 
                API integrations, and Agile collaboration. Passionate about problem-solving, continuous 
                learning and delivering high-quality solutions.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Bachelor of Computer Application</h4>
                    <p className="text-sm text-muted-foreground">University of Mysore (Online)</p>
                    <p className="text-sm text-muted-foreground">Expected: November 2025</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Shiv Chhatrapati Vidyalaya College</h4>
                    <p className="text-sm text-muted-foreground">2020 - 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="space-y-2">
                  <p className="text-sm">• English - Professional proficiency</p>
                  <p className="text-sm">• Hindi - Native proficiency</p>
                  <p className="text-sm">• Marathi - Native proficiency</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Technical Skills</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Mobile: Flutter, Dart, State Management</li>
                    <li>• Frontend: React.js, HTML5, CSS3, JavaScript</li>
                    <li>• Backend: Node.js, Express.js, RESTful APIs</li>
                    <li>• Database: PostgreSQL, MySQL, MongoDB</li>
                    <li>• Tools: Git, GitHub, VS Code, Postman</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Key Strengths</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• API Integration & Testing</li>
                    <li>• Agile/Scrum Methodologies</li>
                    <li>• Problem Solving & Debugging</li>
                    <li>• Cross-platform Development</li>
                    <li>• Clean Code & Best Practices</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium">Flutter Developer</h4>
                  <p className="text-sm text-muted-foreground mb-2">BAAP Company • Aug 2025 - Present</p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Contributing to 2 client projects and 4 internal projects</li>
                    <li>• Building scalable mobile applications using Flutter</li>
                    <li>• Implementing API integrations and state management</li>
                    <li>• Collaborating with teams using Agile methodologies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Notable Projects</h4>
                  <p className="text-sm text-muted-foreground mb-2">2023 - 2025</p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Developed 6+ applications including e-commerce, CRM, and ERP systems</li>
                    <li>• Built ERP modules with React.js, Node.js, and PostgreSQL</li>
                    <li>• Integrated RESTful APIs with JWT/OAuth authentication</li>
                    <li>• Extensive API testing and validation using Postman</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
