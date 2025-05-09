import { SKILLS_DATA, SkillCategory as SkillCategoryType, Skill as SkillType } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

interface SkillsSectionProps {
  id: string;
}

const SkillItem: React.FC<{ skill: SkillType }> = ({ skill }) => (
  <li className="flex items-center justify-between p-3 bg-card rounded-lg shadow-sm border border-border hover:border-primary transition-colors duration-200">
    <div className="flex items-center gap-3">
      {skill.Icon && <skill.Icon className="w-5 h-5 text-primary" />}
      <span className="font-medium text-sm">{skill.name}</span>
    </div>
    <Badge 
      variant={
        skill.level === "Expert" ? "default" : 
        skill.level === "Advanced" ? "secondary" :
        "outline"
      }
      className="text-xs px-2 py-0.5"
    >
      {skill.level}
    </Badge>
  </li>
);

const SkillCategoryCard: React.FC<{ category: SkillCategoryType }> = ({ category }) => (
  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
    <CardHeader className="pb-4">
      <CardTitle className="text-xl font-semibold flex items-center gap-2">
        {category.Icon && <category.Icon className="w-6 h-6 text-primary" />}
        {category.name}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-3">
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </CardContent>
  </Card>
);

export function SkillsSection({ id }: SkillsSectionProps) {
  return (
    <section id={id} className="bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category) => (
            <SkillCategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
