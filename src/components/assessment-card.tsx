import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowRightCircle } from 'lucide-react';

interface AssessmentCardProps {
  title: string;
  progressText: string;
  href: string;
  description: string;
  Icon?: LucideIcon; // Optional icon for the card
}

export function AssessmentCard({ title, progressText, href, description, Icon }: AssessmentCardProps) {
  return (
    <Link href={href} className="block group">
      <Card className="h-full flex flex-col transition-all duration-300 ease-in-out shadow-md hover:shadow-xl hover:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            {Icon && <Icon className="h-6 w-6 text-primary" />}
          </div>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow space-y-2">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Current Progress</p>
            <p className="text-3xl font-bold text-primary">{progressText}</p>
          </div>
        </CardContent>
        <div className="p-6 pt-4 flex justify-end items-center text-sm font-medium text-primary transition-colors duration-300 group-hover:text-accent-foreground">
          <span className="mr-2 group-hover:underline">View Assessment</span>
          <ArrowRightCircle className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
}
