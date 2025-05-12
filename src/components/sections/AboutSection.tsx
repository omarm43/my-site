import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Code2, Cloud, Brain, Briefcase, Users } from 'lucide-react'; // Example icons

interface AboutSectionProps {
  id: string;
}

const techStack = [
  { name: "JavaScript", Icon: Code2, color: "text-yellow-400" },
  { name: "Python", Icon: Code2, color: "text-blue-400" },
  { name: "React", Icon: Code2, color: "text-sky-400" },
  { name: "Next.js", Icon: Code2, color: "text-neutral-400" },
  { name: "Node.js", Icon: Code2, color: "text-green-400" },
  { name: "AWS", Icon: Cloud, color: "text-orange-400" },
];

export function AboutSection({ id }: AboutSectionProps) {
  return (
    <section id={id} className="bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary shadow-lg">
              <Image
                src="/images/omar5.jpg"
                alt="Omar Mostafiz"
                width={256}
                height={256}
                className="object-cover"
                data-ai-hint="professional portrait"
              />
            </Avatar>
          </div>
          <div className="md:col-span-2 space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Hello! I'm Omar Mostafiz, a Software Engineer with a strong focus on building intelligent, scalable, and user-centric solutions. My experience spans full-stack development, mobile apps, and AI-powered automation — including projects like a 24/7 virtual receptionist using VoIP and LLMs, and a generative content engine that automated WordPress publishing using GPT-4 and DALL·E and much more corportate projects.
            </p>
            <p className="text-lg leading-relaxed">
              I thrive in fast-paced environments where I can turn complex problems into elegant, maintainable code. Whether I'm developing fullstack applications, deploying cloud-native systems on AWS, designing APIs, or optimizing app performance, I'm driven by the challenge of building technology that makes life simpler and more efficient.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond coding, I'm a firm believer in collaborative teamwork, continuous improvement, and the power of teamwork. I'm always eager to take on new challenges and contribute to projects that make a positive impact.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">My Core Tech Stack:</h3>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 p-2 bg-card rounded-md shadow-sm border border-border">
                    <tech.Icon className={`w-6 h-6 ${tech.color}`} />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
