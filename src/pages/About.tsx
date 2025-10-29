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
                    I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                    With several years of experience in the tech industry, I specialize in creating scalable, 
                    efficient, and user-friendly solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey in technology started with a curiosity about how things work, which evolved 
                    into a career dedicated to solving complex problems and creating meaningful digital experiences.
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
                  <p className="font-medium">Your Full Name</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">your.email@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Your City, Country</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 234 567 8900</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  ✨ Design and develop responsive web applications
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  🚀 Build scalable backend systems and APIs
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  💡 Collaborate with teams to deliver high-quality solutions
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  📱 Create seamless user experiences across devices
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Bachelor's Degree in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">University Name • 2015 - 2019</p>
                </div>
                <div>
                  <h3 className="font-semibold">Relevant Certifications</h3>
                  <p className="text-sm text-muted-foreground">Various technical certifications and courses</p>
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
