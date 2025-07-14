import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Calendar,
  Users,
  Star,
  BookOpen,
  TrendingUp,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar userRole="trainee" userName="Alex Johnson" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Learning Dashboard</h1>
          <p className="text-muted-foreground">
            Track your progress and manage your coaching sessions
          </p>
        </div>

        {/* Coming Soon */}
        <Card className="text-center py-20">
          <CardContent>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Dashboard Coming Soon</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your personalized dashboard with progress tracking, session
              management, and AI recommendations is under development.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">Session Calendar</div>
                    <div className="text-sm text-muted-foreground">
                      Upcoming sessions
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-success" />
                  <div className="text-left">
                    <div className="font-semibold">Progress Tracking</div>
                    <div className="text-sm text-muted-foreground">
                      Goal completion
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-warning" />
                  <div className="text-left">
                    <div className="font-semibold">Reviews & Ratings</div>
                    <div className="text-sm text-muted-foreground">
                      Coach feedback
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <Button asChild>
              <Link to="/coaches">Explore Coaches</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
