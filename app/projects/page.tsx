import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { LogEntry } from '@/components/LogEntry';

export const metadata: Metadata = {
  title: 'Project log',
  description: `Every project run by ${club.name}, with references and dates.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} entries · newest first`}
        title="Project log."
        standfirst="Every project the club has run, with its filing reference and date. All clinical activity listed here was supervised."
      />

      <div className="wrap band">
        {entries.map((project, index) => (
          <LogEntry key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
