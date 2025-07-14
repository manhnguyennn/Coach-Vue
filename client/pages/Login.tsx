import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  LogIn,
  Mail,
  Lock,
  Users,
  BookOpen,
  TrendingUp,
  Eye,
  EyeOff,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"trainee" | "coach" | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to continue your learning journey
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Sign In</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-3">
                <Label>I want to sign in as:</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant={userType === "trainee" ? "default" : "outline"}
                    onClick={() => setUserType("trainee")}
                    className="h-20 flex-col"
                  >
                    <BookOpen className="w-6 h-6 mb-2" />
                    <span>Trainee</span>
                    <span className="text-xs opacity-75">Learn & Grow</span>
                  </Button>
                  <Button
                    variant={userType === "coach" ? "default" : "outline"}
                    onClick={() => setUserType("coach")}
                    className="h-20 flex-col"
                  >
                    <Users className="w-6 h-6 mb-2" />
                    <span>Coach</span>
                    <span className="text-xs opacity-75">Teach & Mentor</span>
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Login Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <Link
                    to="/forgot-password"
                    className="text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button className="w-full" disabled={!userType}>
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                  {userType && (
                    <Badge variant="secondary" className="ml-2">
                      as {userType}
                    </Badge>
                  )}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up here
                  </Link>
                </div>
              </div>

              <Separator />

              {/* Demo Notice */}
              <Card className="bg-muted/50 border-0">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium mb-1">Demo Mode</p>
                  <p className="text-xs text-muted-foreground">
                    Full authentication system coming soon. For now, you can
                    explore the platform without signing in.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
