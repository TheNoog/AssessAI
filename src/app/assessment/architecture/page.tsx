import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ArchitectureAssessmentPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">Architecture Assessment</CardTitle>
          <CardDescription className="text-lg">
            Evaluate the design, scalability, and resilience of your current data and systems architecture.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            This section is under development. Soon, you'll be able to perform a comprehensive architecture assessment here.
          </p>
          <div className="text-center pt-4">
            <Button size="lg" disabled>
              Start Architecture Assessment (Coming Soon)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
