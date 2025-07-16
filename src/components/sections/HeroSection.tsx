import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  id: string;
}

export function HeroSection({ id }: HeroSectionProps) {
  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/30 dark:to-secondary/10 pt-16">
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        {/* Optional: subtle background pattern or image */}
        <Image
          src="/images/flag_of_canada.jpeg"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up animate-delay-[200ms]">
          <span className="block">Hi, I’m </span>
          <span className="block text-primary">Omar Mostafiz</span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg text-foreground/80 sm:text-xl md:mt-8 md:max-w-2xl animate-fade-in-up animate-delay-[400ms]">
          A Software Engineer with a passion for building AI-powered tools, automation systems, and scalable full-stack applications. I've worked on everything from mobile apps and cloud platforms to LLM-integrated voice assistants, using technologies like React, Node.js, AWS, and many more to solve real-world problems. I love turning complex ideas into clean, efficient code that delivers real impact.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animate-delay-[600ms]">
          <Button size="lg" asChild className="shadow-lg transform hover:scale-105 transition-transform duration-300">
            <a href="#experience">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="shadow-lg transform hover:scale-105 transition-transform duration-300">
            <a href="#contact">
              Contact Me <MessageSquare className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
