import { ContactForm } from "@/components/ContactForm";
import { SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface ContactSectionProps {
  id: string;
}

export function ContactSection({ id }: ContactSectionProps) {
  return (
    <section id={id} className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Get In Touch
        </h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="md:col-span-1 flex justify-center">
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary shadow-lg">
              <Image
                src="/images/omar2.jpg"
                alt="Omar Mostafiz"
                width={256}
                height={256}
                className="object-cover"
                data-ai-hint="professional portrait"
              />
            </Avatar>
          </div>
          <div className="md:col-span-1 flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Let's Connect</h3>
              <p className="text-foreground/80 mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
              </p>
            </div>
            <div className="space-y-3">
              <Button variant="outline" asChild className="w-full justify-start text-left">
                <a href={`mailto:${SOCIAL_LINKS.email}`} target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-3 h-5 w-5 text-primary" /> {SOCIAL_LINKS.email.replace("@", "[at]").replace(/\./g, "[dot]")}
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full justify-start text-left">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 h-5 w-5 text-primary" /> LinkedIn Profile
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full justify-start text-left">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-5 w-5 text-primary" /> GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
