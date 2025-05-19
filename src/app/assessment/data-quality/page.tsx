import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DataQualityAssessmentPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">Data Quality Assessment</CardTitle>
          <CardDescription className="text-lg">
            Measure and improve the accuracy, completeness, consistency, and timeliness of your data assets.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            This section is under development. Soon, you'll be able to perform a detailed data quality assessment here.
          </p>
          <div className="text-center pt-4">
            <Button size="lg" disabled>
              Start Data Quality Assessment (Coming Soon)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
