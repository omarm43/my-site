
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Download, Menu, Code2, Linkedin, Github, Mail } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = 'home';
      NAV_LINKS.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = link.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinksContent = ({isMobile = false}: {isMobile?: boolean}) => (
    NAV_LINKS.map((link) => (
      <Button
        key={link.id}
        variant="ghost"
        asChild
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          activeSection === link.id ? "text-primary" : "text-foreground/80",
          isMobile && "w-full justify-start py-3 text-base"
        )}
      >
        <Link href={`#${link.id}`}>{link.label}</Link>
      </Button>
    ))
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Code2 className="h-6 w-6" />
          <span>Omar Mostafiz</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLinksContent />
        </nav>

        <div className="flex items-center gap-1"> {/* Changed gap-2 to gap-1 here */}
          <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
            <a href="/resume.pdf" download="Omar_Mostafiz_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex">
            <a href={`mailto:${SOCIAL_LINKS.email}`} aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-4">
                <SheetHeader className="mb-6">
                  <SheetTitle className="flex items-center gap-2 text-xl font-bold text-primary">
                    <Code2 className="h-6 w-6" />
                    <span>Omar Mostafiz</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-3">
                  <NavLinksContent isMobile={true} />
                  <SheetClose asChild>
                    <Button variant="outline" asChild className="mt-4 w-full justify-start">
                      <a href="/resume.pdf" download="Omar_Mostafiz_Resume.pdf">
                        <Download className="mr-2 h-4 w-4" />
                        Resume
                      </a>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="outline" asChild className="w-full justify-start">
                      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="outline" asChild className="w-full justify-start">
                      <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="outline" asChild className="w-full justify-start">
                      <a href={`mailto:${SOCIAL_LINKS.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </a>
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

