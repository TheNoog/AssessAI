import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto h-16 flex items-center justify-between px-4">
          <Link href="/" passHref>
            <Button variant="outline" className="text-sm">
              <Home className="mr-2 h-4 w-4" />
              AssessAI Dashboard
            </Button>
          </Link>
          <Link href="/" passHref>
             <Button variant="ghost" className="text-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Assessments
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-10">
        {children}
      </main>
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AssessAI. Empowering Your Business Insights.
        </div>
      </footer>
    </div>
  );
}
