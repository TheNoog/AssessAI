import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap } from "lucide-react";

export default function DataMaturityPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight">Data Maturity Assessment</CardTitle>
          <CardDescription className="text-lg">
            Understand and improve your organization's data management capabilities across key dimensions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            This assessment will guide you through evaluating various aspects of data maturity, including strategy, governance, technology, and culture. 
            Based on your responses, you'll receive actionable insights and recommendations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  Key Areas Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Data Strategy & Vision</li>
                  <li>Data Governance & Policies</li>
                  <li>Data Quality Management</li>
                  <li>Technology & Infrastructure</li>
                  <li>Data Literacy & Culture</li>
                  <li>Analytics & Insights Generation</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                   Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Identify strengths and weaknesses</li>
                  <li>Benchmark against industry standards</li>
                  <li>Develop a roadmap for improvement</li>
                  <li>Enhance data-driven decision-making</li>
                  <li>Optimize data-related investments</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Data Maturity Assessment
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Estimated time to complete: 30-45 minutes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
