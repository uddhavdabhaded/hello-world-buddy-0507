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
                Experienced Full Stack Developer with 5+ years of expertise in designing, developing, 
                and deploying scalable web applications. Proficient in modern JavaScript frameworks, 
                backend technologies, and cloud services. Strong problem-solving abilities with a 
                passion for creating efficient, user-friendly solutions. Proven track record of 
                delivering high-quality projects on time while collaborating effectively with 
                cross-functional teams.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Bachelor's in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">University Name</p>
                    <p className="text-sm text-muted-foreground">2015 - 2019 • GPA: 3.8/4.0</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <div className="space-y-2">
                  <p className="text-sm">• AWS Certified Developer</p>
                  <p className="text-sm">• React Advanced Certification</p>
                  <p className="text-sm">• Node.js Professional</p>
                  <p className="text-sm">• Scrum Master Certified</p>
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
                    <li>• Frontend: React, TypeScript, Next.js</li>
                    <li>• Backend: Node.js, Python, Express</li>
                    <li>• Database: PostgreSQL, MongoDB</li>
                    <li>• DevOps: Docker, AWS, CI/CD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Soft Skills</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Team Leadership & Mentoring</li>
                    <li>• Agile/Scrum Methodologies</li>
                    <li>• Problem Solving & Analysis</li>
                    <li>• Effective Communication</li>
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
                  <h4 className="font-medium">Senior Full Stack Developer</h4>
                  <p className="text-sm text-muted-foreground mb-2">Tech Company Inc. • 2021 - Present</p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Led development of scalable applications</li>
                    <li>• Mentored team of 5 junior developers</li>
                    <li>• Improved system performance by 40%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Full Stack Developer</h4>
                  <p className="text-sm text-muted-foreground mb-2">Digital Solutions Ltd. • 2019 - 2021</p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Developed client-facing web applications</li>
                    <li>• Integrated third-party APIs and services</li>
                    <li>• Optimized database performance</li>
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
