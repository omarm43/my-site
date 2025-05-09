import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { EXPERIENCE_DATA, type Experience } from '@/lib/constants';
import { Building, CalendarDays, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ExperienceSectionProps {
  id: string;
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          {experience.logoUrl && (
            <Image
              src={experience.logoUrl}
              alt={`${experience.company} logo`}
              width={56}
              height={56}
              className="rounded-md object-contain border border-border"
              data-ai-hint={experience.logoHint}
            />
          )}
          <div className="flex-grow">
            <CardTitle className="text-xl font-semibold">{experience.role}</CardTitle>
            <CardDescription className="text-base text-primary font-medium">{experience.company}</CardDescription>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <CalendarDays className="mr-2 h-4 w-4" />
              <span>{experience.startDate} – {experience.endDate}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-foreground/90">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 mt-1 h-4 w-4 text-primary flex-shrink-0" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection({ id }: ExperienceSectionProps) {
  return (
    <section id={id} className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          <Building className="inline-block h-8 w-8 mr-2 -mt-1" />
          Work Experience
        </h2>
        <div className="relative space-y-12">
          {/* Optional: Timeline line (pseudo-element or div) */}
          {/* <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -ml-0.5 hidden md:block"></div> */}

          {EXPERIENCE_DATA.map((experience, index) => (
            <div key={experience.id} className="flex justify-center">
              {/* 
                For a timeline effect, you could alternate sides or use a more complex layout.
                For simplicity, we'll stack them centrally.
              */}
              <div className="w-full max-w-3xl">
                <ExperienceCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
