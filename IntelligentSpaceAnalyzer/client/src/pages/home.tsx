import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            AI Interior Design Assistant
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Upload your room photos and get personalized design recommendations
          </p>
          <Link href="/upload">
            <Button size="lg" className="w-full sm:w-auto">
              Start Design Journey
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Room Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Upload photos of your room and get AI-powered analysis of the space
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Smart Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Receive personalized furniture and layout suggestions based on your style
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Visual Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                View 2D layout visualizations to help plan your space effectively
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
