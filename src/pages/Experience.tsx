import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2021 - Present",
      description: [
        "Led development of scalable web applications serving 100K+ users",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Architected microservices infrastructure using Docker and Kubernetes",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description: [
        "Developed and maintained multiple client-facing web applications",
        "Collaborated with design team to implement responsive UI/UX",
        "Optimized database queries improving application performance by 40%",
        "Integrated third-party APIs and payment gateways",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2018 - 2019",
      description: [
        "Built responsive web interfaces using React and modern CSS",
        "Participated in agile development sprints and daily standups",
        "Fixed bugs and implemented new features based on user feedback",
        "Learned best practices for clean code and version control",
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Work Experience</h1>
          <p className="text-center text-muted-foreground mb-12">
            My professional journey and career milestones
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <Card className="md:ml-16">
                    <CardHeader>
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <CardTitle className="flex items-center gap-2 mb-1">
                            <Briefcase className="h-5 w-5 text-primary" />
                            {exp.title}
                          </CardTitle>
                          <p className="text-lg font-medium text-muted-foreground">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">▸</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
