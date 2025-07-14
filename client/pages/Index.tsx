import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  Users,
  Star,
  Clock,
  Shield,
  Zap,
  Target,
  BookOpen,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Why CoachConnect
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="text-primary">Succeed</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform brings together world-class coaches and ambitious
              learners with cutting-edge technology to create the ultimate
              learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Expert Coaches</CardTitle>
                <CardDescription>
                  Access verified professionals with proven track records and
                  real-world experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>AI-Powered Matching</CardTitle>
                <CardDescription>
                  Smart algorithms match you with the perfect coach based on
                  your goals and learning style
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-info" />
                </div>
                <CardTitle>Secure & Trusted</CardTitle>
                <CardDescription>
                  End-to-end encryption, verified profiles, and secure payment
                  processing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <CardTitle>Flexible Scheduling</CardTitle>
                <CardDescription>
                  Book sessions that fit your schedule with easy rescheduling
                  and time zone support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-success" />
                </div>
                <CardTitle>Goal Tracking</CardTitle>
                <CardDescription>
                  Set objectives, track progress, and celebrate milestones with
                  built-in analytics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Global Community</CardTitle>
                <CardDescription>
                  Connect with coaches and learners worldwide in 40+ languages
                  and time zones
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Journey in{" "}
              <span className="text-primary">3 Steps</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. Find your coach, book a session, and
              begin transforming your life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold">Discover Coaches</h3>
              <p className="text-muted-foreground">
                Browse our curated selection of expert coaches or use AI
                recommendations to find your perfect match
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold">Book Your Session</h3>
              <p className="text-muted-foreground">
                Schedule a free consultation or jump straight into paid sessions
                with instant booking
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold">Achieve Your Goals</h3>
              <p className="text-muted-foreground">
                Work with your coach, track progress, and unlock your full
                potential with personalized guidance
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/coaches">
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands Worldwide
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join a global community of learners and professionals who have
              transformed their careers and lives
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-sm opacity-80">Expert Coaches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-sm opacity-80">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-80">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">40+</div>
              <div className="text-sm opacity-80">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-0">
            <CardHeader className="space-y-6">
              <Badge variant="outline" className="w-fit mx-auto">
                Ready to Start?
              </Badge>
              <CardTitle className="text-3xl md:text-4xl">
                Take the Next Step in Your Journey
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Whether you're looking to advance your career, learn new skills,
                or achieve personal goals, our expert coaches are here to guide
                you every step of the way.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/coaches">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Find Your Coach
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/become-coach">
                    <Users className="w-4 h-4 mr-2" />
                    Become a Coach
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Free consultation available • No commitment required
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">CoachConnect</span>
              </div>
              <p className="text-muted-foreground">
                Connecting ambitious learners with world-class coaches to unlock
                human potential.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Learners</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/coaches" className="hover:text-foreground">
                    Find Coaches
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="hover:text-foreground">
                    Browse Categories
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="hover:text-foreground">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link to="/success-stories" className="hover:text-foreground">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Coaches</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/become-coach" className="hover:text-foreground">
                    Join as Coach
                  </Link>
                </li>
                <li>
                  <Link to="/coach-resources" className="hover:text-foreground">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to="/coach-success" className="hover:text-foreground">
                    Coach Success
                  </Link>
                </li>
                <li>
                  <Link to="/coach-support" className="hover:text-foreground">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CoachConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
