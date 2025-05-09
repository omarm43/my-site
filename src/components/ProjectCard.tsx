import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/constants';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-[3/2] relative w-full">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint={project.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2">{project.name}</CardTitle>
        <CardDescription className="text-sm text-foreground/80 mb-4 h-20 overflow-y-auto">
          {project.description}
        </CardDescription>
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((techItem) => (
              <Badge key={techItem} variant="secondary" className="text-xs">
                {techItem}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t border-border">
        <div className="flex w-full justify-start gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          {project.liveLink && project.liveLink !== "#" && (
            <Button variant="default" size="sm" asChild>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
