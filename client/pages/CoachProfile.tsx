import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Star,
  Calendar as CalendarIcon,
  MessageCircle,
  Award,
  PlayCircle,
  Clock,
  Users,
  MapPin,
  Languages,
  ChevronLeft,
  Heart,
  Share2,
  CheckCircle,
  BookOpen,
  Target,
  Zap,
  Briefcase,
  GraduationCap,
  Calendar as CalendarIconSolid,
  Users2,
  Clock3,
  DollarSign,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

// Mock coach data - in real app this would come from API
const getCoachData = (id: string) => {
  const coaches = {
    "1": {
      id: "1",
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c633?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
      title: "Leadership & Executive Coach",
      category: "Business & Leadership",
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 80,
      experience: "8+ years",
      languages: ["English", "Spanish"],
      location: "New York, USA",
      isOnline: true,
      skills: [
        "Leadership",
        "Executive Coaching",
        "Team Management",
        "Strategic Planning",
        "Communication",
        "Conflict Resolution",
      ],
      sessionFormats: ["Video Call", "Phone Call"],
      totalStudents: 234,
      responseTime: "2 hours",
      description:
        "Former Fortune 500 executive with 15+ years of leadership experience. I help professionals advance their careers and develop leadership skills through proven methodologies and personalized coaching approaches.",
      hasVideo: true,
      isTopRated: true,
      isVerified: true,
      nextAvailable: "Today at 3:00 PM",
      longDescription: `I'm a certified executive coach and former Fortune 500 leader with over 15 years of experience in developing high-performing teams and leaders. My passion lies in unlocking human potential and helping professionals navigate complex challenges while achieving sustainable growth.

My coaching approach combines evidence-based methodologies with practical business insights gained from leading diverse teams across multiple industries. I specialize in leadership development, career transitions, and organizational transformation.

Throughout my career, I've guided over 500 professionals from emerging leaders to C-suite executives, helping them overcome obstacles, develop authentic leadership styles, and achieve measurable results in their personal and professional lives.`,
      education: [
        {
          degree: "MBA in Organizational Leadership",
          school: "Harvard Business School",
          year: "2008",
        },
        {
          degree: "BS in Business Administration",
          school: "Stanford University",
          year: "2003",
        },
      ],
      certifications: [
        "International Coach Federation (ICF) - Professional Certified Coach (PCC)",
        "Leadership Circle Profile Practitioner",
        "Emotional Intelligence Assessment Certified",
        "Gallup CliftonStrengths Coach",
      ],
      workExperience: [
        {
          role: "Senior Vice President",
          company: "Goldman Sachs",
          duration: "2015-2020",
        },
        {
          role: "Director of Operations",
          company: "McKinsey & Company",
          duration: "2010-2015",
        },
        {
          role: "Management Consultant",
          company: "Boston Consulting Group",
          duration: "2008-2010",
        },
      ],
      specializations: [
        "Executive Leadership Development",
        "Career Transition Coaching",
        "Team Performance Optimization",
        "Strategic Communication",
        "Conflict Resolution & Mediation",
        "Change Management",
      ],
      sessionPackages: [
        {
          name: "Discovery Session",
          duration: "60 min",
          price: 80,
          description: "Initial consultation to assess goals and fit",
        },
        {
          name: "Leadership Intensive",
          duration: "90 min",
          price: 120,
          description: "Deep-dive sessions for complex leadership challenges",
        },
        {
          name: "Monthly Coaching",
          duration: "4 sessions",
          price: 300,
          description: "Ongoing monthly support package",
        },
        {
          name: "Executive Program",
          duration: "3 months",
          price: 900,
          description: "Comprehensive leadership transformation program",
        },
      ],
      reviews: [
        {
          id: 1,
          name: "Michael Chen",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format&q=80",
          rating: 5,
          date: "2 weeks ago",
          comment:
            "Sarah transformed my approach to leadership. Her insights into executive presence and strategic thinking were game-changing for my career advancement.",
          role: "VP of Engineering",
        },
        {
          id: 2,
          name: "Emily Rodriguez",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format&q=80",
          rating: 5,
          date: "1 month ago",
          comment:
            "Working with Sarah helped me navigate a difficult career transition. Her structured approach and genuine care made all the difference.",
          role: "Marketing Director",
        },
        {
          id: 3,
          name: "David Park",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format&q=80",
          rating: 5,
          date: "2 months ago",
          comment:
            "Sarah's executive coaching program exceeded my expectations. The ROI in terms of career growth and personal development was incredible.",
          role: "Senior Manager",
        },
      ],
      openCourses: [
        {
          id: 1,
          name: "Executive Leadership Mastery",
          startDate: "2024-02-15",
          totalSlots: 12,
          enrolledStudents: 8,
          duration: "8 weeks",
          price: 1200,
          description: "Comprehensive leadership program designed for senior managers and executives. Learn advanced leadership strategies, team dynamics, and executive presence.",
          highlights: [
            "Weekly 2-hour group sessions",
            "1-on-1 coaching sessions",
            "Leadership assessment tools",
            "Peer networking opportunities"
          ],
          level: "Advanced"
        },
        {
          id: 2,
          name: "Strategic Communication Workshop",
          startDate: "2024-02-22",
          totalSlots: 15,
          enrolledStudents: 12,
          duration: "4 weeks",
          price: 600,
          description: "Master the art of strategic communication in leadership roles. Perfect for managers looking to improve their influence and impact.",
          highlights: [
            "Interactive workshops",
            "Real-world case studies",
            "Presentation skills training",
            "Feedback and coaching"
          ],
          level: "Intermediate"
        },
        {
          id: 3,
          name: "New Manager Bootcamp",
          startDate: "2024-03-01",
          totalSlots: 20,
          enrolledStudents: 5,
          duration: "6 weeks",
          price: 800,
          description: "Essential skills for first-time managers. Learn how to transition from individual contributor to effective team leader.",
          highlights: [
            "Management fundamentals",
            "Team building strategies",
            "Performance management",
            "Conflict resolution"
          ],
          level: "Beginner"
        }
      ],
      availability: [
        { day: "Monday", slots: ["9:00 AM", "2:00 PM", "4:00 PM"] },
        { day: "Tuesday", slots: ["10:00 AM", "1:00 PM"] },
        { day: "Wednesday", slots: ["9:00 AM", "3:00 PM", "5:00 PM"] },
        { day: "Thursday", slots: ["11:00 AM", "2:00 PM"] },
        { day: "Friday", slots: ["9:00 AM", "1:00 PM", "3:00 PM"] },
      ],
    },
  };

  return coaches[id as keyof typeof coaches] || coaches["1"];
};

export default function CoachProfile() {
  const { id } = useParams();
  const coach = getCoachData(id || "1");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(
    coach.sessionPackages[0],
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : i < rating
              ? "fill-amber-200 text-amber-400"
              : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/coaches">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Coaches
          </Link>
        </Button>

        {/* Cover Banner */}
        <div className="relative h-64 md:h-80 lg:h-96 mb-8 rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop&auto=format&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Banner Content */}
          <div className="relative h-full flex items-end p-8">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-6 text-white">
                <div className="relative">
                  <Avatar className="h-24 w-24 md:h-32 md:w-32 ring-4 ring-white/20 shadow-2xl">
                    <AvatarImage src={coach.avatar} alt={coach.name} />
                    <AvatarFallback className="text-2xl font-medium bg-primary/10 text-primary">
                      {coach.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {coach.isOnline && (
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                    <h1 className="text-3xl md:text-4xl font-bold">
                      {coach.name}
                    </h1>
                    <div className="flex items-center gap-2">
                      {coach.isVerified && (
                        <Badge
                          variant="outline"
                          className="border-white/30 text-white bg-white/10 backdrop-blur-sm"
                        >
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                      {coach.isTopRated && (
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                          <Award className="w-3 h-3 mr-1" />
                          Top Rated
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl text-white/90 mb-2">
                    {coach.title}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {renderStars(coach.rating)}
                      </div>
                      <span className="font-bold text-lg">{coach.rating}</span>
                      <span className="text-white/80">
                        ({coach.reviewCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center text-white/80 gap-1">
                      <Users className="w-4 h-4" />
                      <span>{coach.totalStudents} students</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Favorite and Share Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-3 gap-8 pb-20 lg:pb-0">
          {/* Coach Details */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-primary/5 text-primary border-primary/20"
                >
                  {coach.category}
                </Badge>

                <p className="text-muted-foreground leading-relaxed">
                  {coach.description}
                </p>

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary/60" />
                    <span>{coach.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Languages className="w-4 h-4 text-primary/60" />
                    <span>{coach.languages.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary/60" />
                    <span>{coach.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary/60" />
                    <span>Responds in {coach.responseTime}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Mobile Fixed Bottom Booking Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  {/* Price */}
                  <div className="text-left">
                    <div className="text-xl font-bold text-primary">
                      ${coach.hourlyRate}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      per hour
                    </div>
                  </div>

                  {/* Button Actions */}
                  <div className="flex gap-2 flex-1 max-w-xs">
                    <Dialog
                      open={isBookingOpen}
                      onOpenChange={setIsBookingOpen}
                    >
                      <DialogTrigger asChild>
                        <Button className="flex-1 h-10 text-sm font-semibold">
                          <CalendarIcon className="w-3 h-3 mr-1" />
                          Book
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>
                            Book a Session with {coach.name}
                          </DialogTitle>
                          <DialogDescription>
                            Choose your preferred session type and available
                            time slot.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                          {/* Session Packages */}
                          <div className="space-y-4">
                            <h3 className="font-semibold">
                              Choose Session Type
                            </h3>
                            <div className="space-y-2">
                              {coach.sessionPackages.map((pkg) => (
                                <Card
                                  key={pkg.name}
                                  className={`p-4 cursor-pointer transition-colors ${
                                    selectedPackage.name === pkg.name
                                      ? "border-primary bg-primary/5"
                                      : ""
                                  }`}
                                  onClick={() => setSelectedPackage(pkg)}
                                >
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h4 className="font-medium">
                                        {pkg.name}
                                      </h4>
                                      <p className="text-sm text-muted-foreground">
                                        {pkg.description}
                                      </p>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        {pkg.duration}
                                      </p>
                                    </div>
                                    <div className="font-bold text-primary">
                                      ${pkg.price}
                                    </div>
                                  </div>
                                </Card>
                              ))}
                            </div>
                          </div>

                          {/* Calendar */}
                          <div className="space-y-4">
                            <h3 className="font-semibold">
                              Select Date & Time
                            </h3>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              className="rounded-md border"
                            />

                            {selectedDate && (
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">
                                  Available Times
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                  {["9:00 AM", "2:00 PM", "4:00 PM"].map(
                                    (time) => (
                                      <Button
                                        key={time}
                                        variant="outline"
                                        size="sm"
                                      >
                                        {time}
                                      </Button>
                                    ),
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => setIsBookingOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button className="flex-1">
                            Confirm Booking - ${selectedPackage.price}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Coach Details Tabs */}
            <Tabs defaultValue="about" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="reviews">
                  Reviews ({coach.reviewCount})
                </TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                {/* Video Introduction */}
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="flex items-center gap-2">
                      <PlayCircle className="w-5 h-5" />
                      Introduction Video
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=450&fit=crop&auto=format&q=80')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors shadow-lg">
                          <PlayCircle className="w-8 h-8 text-primary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-white">
                          <h3 className="font-semibold text-lg">
                            Meet {coach.name}
                          </h3>
                          <p className="text-white/80 text-sm">
                            Learn about my coaching approach and experience
                          </p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-black/50 text-white border-0">
                          3:24
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* About Description */}
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      About {coach.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="prose max-w-none">
                      {coach.longDescription
                        .split("\n\n")
                        .map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-muted-foreground leading-relaxed mb-4"
                          >
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Specializations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {coach.specializations.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                        >
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="font-medium">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="flex items-center gap-2">
                      <CalendarIconSolid className="w-5 h-5" />
                      Open Courses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    {coach.openCourses && coach.openCourses.length > 0 ? (
                      <div className="space-y-6">
                        {coach.openCourses.map((course) => {
                          const startDate = new Date(course.startDate);
                          const spotsLeft = course.totalSlots - course.enrolledStudents;
                          const isAlmostFull = spotsLeft <= 3;
                          
                          return (
                            <div
                              key={course.id}
                              className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
                            >
                              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-lg font-semibold">{course.name}</h3>
                                    <Badge 
                                      variant={course.level === 'Advanced' ? 'default' : course.level === 'Intermediate' ? 'secondary' : 'outline'}
                                      className="text-xs"
                                    >
                                      {course.level}
                                    </Badge>
                                  </div>
                                  <p className="text-muted-foreground mb-3 leading-relaxed">
                                    {course.description}
                                  </p>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                      <CalendarIconSolid className="w-4 h-4 text-primary/60" />
                                      <span className="text-muted-foreground">Starts:</span>
                                      <span className="font-medium">
                                        {startDate.toLocaleDateString('en-US', { 
                                          month: 'short', 
                                          day: 'numeric',
                                          year: 'numeric'
                                        })}
                                      </span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                      <Clock3 className="w-4 h-4 text-primary/60" />
                                      <span className="text-muted-foreground">Duration:</span>
                                      <span className="font-medium">{course.duration}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                      <DollarSign className="w-4 h-4 text-primary/60" />
                                      <span className="text-muted-foreground">Price:</span>
                                      <span className="font-medium">${course.price}</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex flex-col items-end gap-3">
                                  <div className="text-right">
                                    <div className="flex items-center gap-2 mb-1">
                                      <Users2 className="w-4 h-4 text-primary/60" />
                                      <span className="text-sm font-medium">
                                        {course.enrolledStudents}/{course.totalSlots} enrolled
                                      </span>
                                    </div>
                                    <div className="w-32 bg-muted rounded-full h-2">
                                      <div 
                                        className="bg-primary h-2 rounded-full transition-all"
                                        style={{ width: `${(course.enrolledStudents / course.totalSlots) * 100}%` }}
                                      />
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1">
                                      {spotsLeft > 0 ? (
                                        <span className={isAlmostFull ? "text-warning font-medium" : ""}>
                                          {spotsLeft} spots left
                                        </span>
                                      ) : (
                                        <span className="text-destructive font-medium">Course Full</span>
                                      )}
                                    </div>
                                  </div>
                                  
                                  <Button 
                                    className="w-full lg:w-auto"
                                    disabled={spotsLeft === 0}
                                  >
                                    {spotsLeft === 0 ? 'Course Full' : 'Enroll Now'}
                                  </Button>
                                </div>
                              </div>
                              
                              {/* Course Highlights */}
                              <div className="border-t pt-4">
                                <h4 className="text-sm font-medium mb-3">What's Included:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {course.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm">
                                      <CheckCircle className="w-3 h-3 text-success" />
                                      <span className="text-muted-foreground">{highlight}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <CalendarIconSolid className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
                        <p className="text-muted-foreground">No open courses available at the moment.</p>
                        <p className="text-sm text-muted-foreground mt-1">Check back soon for new course offerings!</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Skills & Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="flex flex-wrap gap-2">
                      {coach.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        Reviews & Ratings
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {renderStars(coach.rating)}
                        </div>
                        <span className="font-bold text-2xl">
                          {coach.rating}
                        </span>
                        <span className="text-muted-foreground">out of 5</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    {/* Rating Breakdown */}
                    <div className="space-y-3 mb-8">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-4">
                          <span className="text-sm w-12">{stars} star</span>
                          <Progress
                            value={stars === 5 ? 85 : stars === 4 ? 10 : 3}
                            className="flex-1"
                          />
                          <span className="text-sm text-muted-foreground w-12">
                            {stars === 5 ? "85%" : stars === 4 ? "10%" : "3%"}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-6" />

                    {/* Individual Reviews */}
                    <div className="space-y-6">
                      {coach.reviews.map((review) => (
                        <div key={review.id} className="space-y-3">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10">
                              <AvatarImage
                                src={review.avatar}
                                alt={review.name}
                              />
                              <AvatarFallback>
                                {review.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold">{review.name}</h4>
                                <span className="text-sm text-muted-foreground">
                                  •
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {review.role}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  {renderStars(review.rating)}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {review.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {review.comment}
                          </p>
                          <Separator />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-6">
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="space-y-4">
                      {coach.education.map((edu, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{edu.degree}</h3>
                            <p className="text-muted-foreground">
                              {edu.school}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {edu.year}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="space-y-3">
                      {coach.certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                        >
                          <Award className="w-4 h-4 text-primary" />
                          <span className="font-medium">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Work Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="space-y-4">
                      {coach.workExperience.map((work, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{work.role}</h3>
                            <p className="text-muted-foreground">
                              {work.company}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {work.duration}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {coach.sessionPackages.map((pkg) => (
                    <Card
                      key={pkg.name}
                      className="p-6 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader className="px-0 pt-0">
                        <CardTitle className="flex items-center justify-between">
                          <span>{pkg.name}</span>
                          <Badge variant="outline">{pkg.duration}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-0">
                        <div className="space-y-4">
                          <div className="text-3xl font-bold text-primary">
                            ${pkg.price}
                          </div>
                          <p className="text-muted-foreground">
                            {pkg.description}
                          </p>
                          <Button
                            className="w-full"
                            onClick={() => setIsBookingOpen(true)}
                          >
                            Select Package
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle>What's Included in All Sessions</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Pre-session goal setting",
                        "Personalized action plans",
                        "Session recordings (when requested)",
                        "Follow-up resources and materials",
                        "Email support between sessions",
                        "Progress tracking and analytics",
                      ].map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right: Sticky Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Combined Pricing & Functions Card */}
              <Card className="p-6">
                <div className="space-y-6">
                  {/* Pricing Header */}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">
                      ${coach.hourlyRate}
                    </div>
                    <div className="text-muted-foreground">per hour</div>
                    {coach.hasVideo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 text-primary"
                      >
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Watch Intro Video
                      </Button>
                    )}
                  </div>

                  <Separator />

                  {/* Quick Actions */}
                  <div className="space-y-3">
                    <Dialog
                      open={isBookingOpen}
                      onOpenChange={setIsBookingOpen}
                    >
                      <DialogTrigger asChild>
                        <Button className="w-full h-12 font-semibold">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          Book Session
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>
                            Book a Session with {coach.name}
                          </DialogTitle>
                          <DialogDescription>
                            Choose your preferred session type and available
                            time slot.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                          {/* Session Packages */}
                          <div className="space-y-4">
                            <h3 className="font-semibold">
                              Choose Session Type
                            </h3>
                            <div className="space-y-2">
                              {coach.sessionPackages.map((pkg) => (
                                <Card
                                  key={pkg.name}
                                  className={`p-4 cursor-pointer transition-colors ${
                                    selectedPackage.name === pkg.name
                                      ? "border-primary bg-primary/5"
                                      : ""
                                  }`}
                                  onClick={() => setSelectedPackage(pkg)}
                                >
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h4 className="font-medium">
                                        {pkg.name}
                                      </h4>
                                      <p className="text-sm text-muted-foreground">
                                        {pkg.description}
                                      </p>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        {pkg.duration}
                                      </p>
                                    </div>
                                    <div className="font-bold text-primary">
                                      ${pkg.price}
                                    </div>
                                  </div>
                                </Card>
                              ))}
                            </div>
                          </div>

                          {/* Calendar */}
                          <div className="space-y-4">
                            <h3 className="font-semibold">
                              Select Date & Time
                            </h3>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              className="rounded-md border"
                            />

                            {selectedDate && (
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">
                                  Available Times
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                  {["9:00 AM", "2:00 PM", "4:00 PM"].map(
                                    (time) => (
                                      <Button
                                        key={time}
                                        variant="outline"
                                        size="sm"
                                      >
                                        {time}
                                      </Button>
                                    ),
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => setIsBookingOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button className="flex-1">
                            Confirm Booking - ${selectedPackage.price}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>

                  {/* Next Available */}
                  <div className="text-center p-3 bg-success/10 rounded-lg border border-success/20">
                    <div className="text-sm font-medium text-success">
                      Next Available
                    </div>
                    <div className="text-sm text-foreground">
                      {coach.nextAvailable}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}