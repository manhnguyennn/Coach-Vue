import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Target,
  BookOpen,
  Users,
  TrendingUp,
  Brain,
  Zap,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Recommendations() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Personalized Recommendations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get AI-powered recommendations for skills, courses, and coaches
            based on your goals and learning style
          </p>
        </div>

        {/* Coming Soon */}
        <Card className="text-center py-20">
          <CardContent>
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">AI Recommendations</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our advanced AI system will analyze your goals, preferences, and
              learning patterns to provide personalized recommendations.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <Card className="p-6 border-primary/20">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Smart Goal Setting</h3>
                <p className="text-sm text-muted-foreground">
                  AI helps you define clear, achievable goals based on your
                  interests and career aspirations
                </p>
              </Card>

              <Card className="p-6 border-accent/20">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Course Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Discover courses and skills that align with your career path
                  and learning preferences
                </p>
              </Card>

              <Card className="p-6 border-info/20">
                <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-info" />
                </div>
                <h3 className="font-semibold mb-2">Coach Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Find coaches whose expertise and teaching style perfectly
                  match your learning needs
                </p>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Coming Features:</h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-warning" />
                  Skill gap analysis
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-success" />
                  Career progression paths
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 text-primary" />
                  Learning style assessment
                </div>
                <div className="flex items-center">
                  <Brain className="w-4 h-4 mr-2 text-accent" />
                  Personalized learning plans
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild>
                <Link to="/coaches">Browse Coaches Instead</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
