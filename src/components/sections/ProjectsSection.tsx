import { PROJECTS_DATA } from '@/lib/constants';
import { ProjectCard } from '@/components/ProjectCard';

interface ProjectsSectionProps {
  id: string;
}

export function ProjectsSection({ id }: ProjectsSectionProps) {
  return (
    <section id={id} className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
