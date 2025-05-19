import { AssessmentCard } from '@/components/assessment-card';
import { BarChart3, Network, ShieldCheck, FileText } from 'lucide-react';

export default function HomePage() {
  const assessments = [
    {
      title: "Data Maturity Assessment",
      description: "Evaluate your organization's data management capabilities.",
      progressText: "Stage 2.3 of 5",
      href: "/assessment/data-maturity",
      Icon: BarChart3,
    },
    {
      title: "Architecture Assessment",
      description: "Assess the robustness and scalability of your data architecture.",
      progressText: "75%",
      href: "/assessment/architecture",
      Icon: Network,
    },
    {
      title: "Data Quality Assessment",
      description: "Analyze the accuracy, completeness, and consistency of your data.",
      progressText: "Needs Review",
      href: "/assessment/data-quality",
      Icon: ShieldCheck,
    },
    {
      title: "Data Contracts Assessment",
      description: "Define and manage schemas for reliable data exchange.",
      progressText: "Not Started",
      href: "/assessment/data-contracts",
      Icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-8 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight">AssessAI Dashboard</h1>
          <p className="text-lg opacity-90 mt-1">Your central hub for business assessments.</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-8 text-foreground">Available Assessments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {assessments.map((assessment) => (
            <AssessmentCard
              key={assessment.title}
              title={assessment.title}
              description={assessment.description}
              progressText={assessment.progressText}
              href={assessment.href}
              Icon={assessment.Icon}
            />
          ))}
        </div>
      </main>

      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AssessAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
