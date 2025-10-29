import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-48 flex-shrink-0 mx-auto md:mx-0">
                  <img
                    src="/placeholder.svg"
                    alt="Profile"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-semibold">Who I Am</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a detail-oriented Full Stack Developer with 2+ years of experience in building scalable 
                    web and mobile applications. I specialize in Flutter for mobile development and Node.js for 
                    backend services. Currently working at Baap Company since August 2025, I have hands-on 
                    contribution to 2 client projects and 4 internal projects, managing both modules and 
                    end-to-end development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm skilled in writing clean, maintainable code, API integrations, and Agile collaboration. 
                    My passion lies in problem-solving, continuous learning, and delivering high-quality solutions 
                    that make a real impact.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">Uddhav Badri Dabhade</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">dabhadeuddhav4@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Chhatrapati Sambhajinagar, Maharashtra 431001</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 8767589400</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  📱 Design and develop cross-platform mobile applications using Flutter
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  🚀 Build scalable backend systems and RESTful APIs with Node.js and Express
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  💡 Integrate third-party APIs, authentication systems (JWT/OAuth), and payment gateways
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  🎨 Create responsive web interfaces with React.js and modern CSS frameworks
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  🔧 Work with databases (PostgreSQL, MySQL, MongoDB) and Firebase services
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  🤝 Collaborate with teams using Agile methodologies and Git version control
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Bachelor of Computer Application</h3>
                  <p className="text-sm text-muted-foreground">University of Mysore (Online) • Expected: November 2025</p>
                </div>
                <div>
                  <h3 className="font-semibold">Shiv Chhatrapati Vidyalaya College</h3>
                  <p className="text-sm text-muted-foreground">2020 - 2022</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Languages</h2>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-secondary rounded-lg">
                  <p className="font-medium">English</p>
                </div>
                <div className="px-4 py-2 bg-secondary rounded-lg">
                  <p className="font-medium">Hindi</p>
                </div>
                <div className="px-4 py-2 bg-secondary rounded-lg">
                  <p className="font-medium">Marathi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
