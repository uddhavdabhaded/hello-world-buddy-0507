import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      company: "BAAP Company",
      period: "August 2025 - Present",
      description: [
        "Contributing to 2 client projects and 4 internal projects with hands-on module and end-to-end development",
        "Building scalable mobile applications using Flutter with focus on clean, maintainable code",
        "Implementing RESTful API integrations and state management solutions (GetX/Bloc)",
        "Collaborating with cross-functional teams using Agile methodologies",
        "Developing both Android and iOS applications with seamless user experiences",
        "Working on authentication systems, real-time data synchronization, and push notifications",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Various Projects",
      period: "2023 - 2025",
      description: [
        "Developed 6+ major projects including e-commerce, task management, and CRM applications",
        "Built ERP system modules for HR, Inventory, and Finance using React.js, Node.js, and PostgreSQL",
        "Integrated multiple RESTful APIs including SMS, Google Sheets, OAuth/JWT authentication",
        "Utilized Postman for comprehensive API testing, validation, and debugging",
        "Implemented responsive UI designs with Bootstrap and modern CSS frameworks",
        "Managed databases with PostgreSQL, MySQL, and MongoDB, including schema design and optimization",
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
