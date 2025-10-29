import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile App Development",
      skills: ["Flutter", "Dart", "REST API Integration", "Firebase", "Android/iOS Deployment", "State Management (GetX/Bloc)"],
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "Bootstrap"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT/OAuth)", "API Integration"],
    },
    {
      title: "Database Management",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Schema Design", "SQL Queries", "Relationships"],
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Dart", "SQL", "Core Java"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "API Testing"],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Technical Skills</h1>
          <p className="text-center text-muted-foreground mb-12">
            A comprehensive overview of my technical expertise and capabilities
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Proficiency Levels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Mobile App Development (Flutter)</span>
                  <span className="text-muted-foreground">90%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Backend Development (Node.js)</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Frontend Development (React.js)</span>
                  <span className="text-muted-foreground">80%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Database Management</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">API Integration & Testing</span>
                  <span className="text-muted-foreground">88%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "88%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
