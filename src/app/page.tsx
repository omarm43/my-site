
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection id="home" />
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <ExperienceSection id="experience" />
        <SkillsSection id="skills" />
        <ContactSection id="contact" />
      </main>
      <footer className="py-8 bg-card border-t border-border text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Omar Mostafiz. All rights reserved.
          </p>
        </div>
      </footer>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <ThemeToggle />
        <Button variant="outline" size="icon" className="shadow-lg rounded-full" asChild>
          <Link href="#home" aria-label="Scroll to top">
            <ArrowUp className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </>
  );
}

