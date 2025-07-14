import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Star,
  Users,
  PlayCircle,
  Calendar as CalendarIcon,
  MessageCircle,
  Award,
  Clock,
  MapPin,
  Languages,
  Video,
  Phone,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface Coach {
  id: string;
  name: string;
  avatar: string;
  title: string;
  category: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  experience: string;
  languages: string[];
  location: string;
  isOnline: boolean;
  skills: string[];
  sessionFormats: string[];
  totalStudents: number;
  responseTime: string;
  description: string;
  hasVideo: boolean;
  isTopRated: boolean;
  isVerified: boolean;
  nextAvailable: string;
}

interface CoachCardProps {
  coach: Coach;
  variant?: "default" | "compact" | "horizontal";
}

export default function CoachCard({
  coach,
  variant = "default",
}: CoachCardProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 transition-colors ${
          i < Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : i < rating
              ? "fill-amber-200 text-amber-400"
              : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  const formatPrice = (price: number) => {
    return price > 0 ? `$${price}` : "Free";
  };

  if (variant === "horizontal") {
    return (
      <Card className="group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          {/* Mobile Layout */}
          <div className="flex lg:hidden flex-col space-y-4">
            {/* Mobile Header: Avatar + Name + Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative flex-shrink-0">
                  <Link to={`/coach/${coach.id}`}>
                    <Avatar className="h-16 w-16 ring-2 ring-background shadow-md hover:ring-2 hover:ring-primary/50 transition-all duration-300 cursor-pointer">
                      <AvatarImage src={coach.avatar} alt={coach.name} />
                      <AvatarFallback className="text-sm font-medium bg-primary/10 text-primary">
                        {coach.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Link>
                  {coach.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-success rounded-full border-2 border-background shadow-sm flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Link to={`/coach/${coach.id}`}>
                      <h3 className="text-lg font-semibold text-foreground truncate hover:text-primary transition-colors duration-300 cursor-pointer">
                        {coach.name}
                      </h3>
                    </Link>
                    {coach.isTopRated && (
                      <Badge className="text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 px-2">
                        <Award className="w-3 h-3 mr-1" />
                        Top
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {coach.title}
                  </p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xl font-bold text-primary">
                  {formatPrice(coach.hourlyRate)}
                </div>
                <div className="text-xs text-muted-foreground">/hour</div>
              </div>
            </div>

            {/* Mobile Rating + Students */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {renderStars(coach.rating)}
                </div>
                <span className="font-medium">{coach.rating}</span>
                <span className="text-muted-foreground">
                  ({coach.reviewCount})
                </span>
              </div>
              <div className="flex items-center text-muted-foreground gap-1">
                <Users className="w-4 h-4" />
                <span className="font-medium">{coach.totalStudents}</span>
              </div>
            </div>

            {/* Mobile Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {coach.description}
            </p>

            {/* Mobile Skills */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {coach.skills.slice(0, 4).map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-xs border-border/50 bg-background/50"
                  >
                    {skill}
                  </Badge>
                ))}
                {coach.skills.length > 4 && (
                  <Badge
                    variant="outline"
                    className="text-xs text-muted-foreground"
                  >
                    +{coach.skills.length - 4}
                  </Badge>
                )}
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="flex gap-3 pt-2">
              <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogTrigger asChild>
                  <Button className="flex-1 h-11 font-medium">
                    Book Schedule
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Book a Session with {coach.name}</DialogTitle>
                    <DialogDescription>
                      Choose your preferred session type and available time slot.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    {/* Session Package */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Session Type</h3>
                      <Card className="p-4 border-primary bg-primary/5">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Discovery Session</h4>
                            <p className="text-sm text-muted-foreground">
                              Initial consultation to assess goals and fit
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              60 min
                            </p>
                          </div>
                          <div className="font-bold text-primary">
                            ${coach.hourlyRate}
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Calendar */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Select Date & Time</h3>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />

                      {selectedDate && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Available Times</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {["9:00 AM", "2:00 PM", "4:00 PM"].map((time) => (
                              <Button key={time} variant="outline" size="sm">
                                {time}
                              </Button>
                            ))}
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
                      Confirm Booking - ${coach.hourlyRate}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              {coach.hasVideo && (
                <Button
                  variant="outline"
                  size="icon"
                  className="h-11 w-11 flex-shrink-0"
                >
                  <PlayCircle className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-start gap-8">
            {/* Left: Avatar and Online Status */}
            <div className="relative flex-shrink-0">
              <div className="relative">
                <Link to={`/coach/${coach.id}`}>
                  <Avatar className="h-24 w-24 ring-4 ring-background shadow-lg hover:ring-2 hover:ring-primary/50 transition-all duration-300 cursor-pointer">
                    <AvatarImage src={coach.avatar} alt={coach.name} />
                    <AvatarFallback className="text-lg font-medium bg-primary/10 text-primary">
                      {coach.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                {coach.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-3 border-background shadow-sm flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Center: Main Content */}
            <div className="flex-1 min-w-0 space-y-5">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Link to={`/coach/${coach.id}`}>
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 hover:text-primary cursor-pointer">
                          {coach.name}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2">
                        {coach.isVerified && (
                          <Badge
                            variant="outline"
                            className="text-xs font-medium border-success/30 text-success bg-success/5 hover:bg-success/10 transition-colors"
                          >
                            ✓ Verified
                          </Badge>
                        )}
                        {coach.isTopRated && (
                          <Badge className="text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-sm">
                            <Award className="w-3 h-3 mr-1.5" />
                            Top Rated
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {coach.title}
                    </p>
                    <Badge
                      variant="secondary"
                      className="text-xs font-medium bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                      {coach.category}
                    </Badge>
                  </div>
                </div>

                {/* Rating and Stats */}
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {renderStars(coach.rating)}
                    </div>
                    <span className="font-semibold text-foreground">
                      {coach.rating}
                    </span>
                    <span className="text-muted-foreground">
                      ({coach.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="h-4 w-px bg-border"></div>
                  <div className="flex items-center text-muted-foreground gap-1.5">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{coach.totalStudents}</span>
                    <span>students</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-3xl">
                {coach.description}
              </p>

              {/* Skills */}
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {coach.skills.slice(0, 6).map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs font-medium border-border/50 bg-background/50 hover:bg-muted/50 hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {coach.skills.length > 6 && (
                    <Badge
                      variant="outline"
                      className="text-xs font-medium border-border/50 bg-background/50 text-muted-foreground"
                    >
                      +{coach.skills.length - 6} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Price and Actions */}
            <div className="flex flex-col items-end gap-6 flex-shrink-0 min-w-[160px]">
              {/* Price */}
              <div className="text-right space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
                    {formatPrice(coach.hourlyRate)}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    /hour
                  </span>
                </div>
                {coach.hasVideo && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto text-primary hover:text-primary/80 font-medium"
                  >
                    <PlayCircle className="w-4 h-4 mr-1.5" />
                    <span className="text-xs">Watch intro</span>
                  </Button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 w-full">
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full shadow-sm hover:shadow-md transition-shadow font-medium">
                      Book Schedule
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Book a Session with {coach.name}</DialogTitle>
                      <DialogDescription>
                        Choose your preferred session type and available time slot.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                      {/* Session Package */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Session Type</h3>
                        <Card className="p-4 border-primary bg-primary/5">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">Discovery Session</h4>
                              <p className="text-sm text-muted-foreground">
                                Initial consultation to assess goals and fit
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                60 min
                              </p>
                            </div>
                            <div className="font-bold text-primary">
                              ${coach.hourlyRate}
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Calendar */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Select Date & Time</h3>
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border"
                        />

                        {selectedDate && (
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm">Available Times</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {["9:00 AM", "2:00 PM", "4:00 PM"].map((time) => (
                                <Button key={time} variant="outline" size="sm">
                                  {time}
                                </Button>
                              ))}
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
                        Confirm Booking - ${coach.hourlyRate}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  variant="outline"
                  className="w-full border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === "compact") {
    return (
      <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="relative flex-shrink-0">
              <Link to={`/coach/${coach.id}`}>
                <Avatar className="h-12 w-12 hover:ring-2 hover:ring-primary/50 transition-all duration-300 cursor-pointer">
                  <AvatarImage src={coach.avatar} alt={coach.name} />
                  <AvatarFallback>
                    {coach.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </Link>
              {coach.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background"></div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <Link to={`/coach/${coach.id}`}>
                    <h3 className="font-semibold text-sm truncate hover:text-primary transition-colors duration-300 cursor-pointer">
                      {coach.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-muted-foreground truncate">
                    {coach.title}
                  </p>
                </div>
                <div className="flex items-center space-x-1 ml-2">
                  {coach.isTopRated && (
                    <Badge variant="secondary" className="text-xs px-1 py-0">
                      <Award className="w-2 h-2 mr-1" />
                      Top
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2 text-xs">
                  <div className="flex items-center">
                    {renderStars(coach.rating)}
                    <span className="ml-1 text-muted-foreground">
                      ({coach.reviewCount})
                    </span>
                  </div>
                </div>
                <div className="text-sm font-semibold">
                  {formatPrice(coach.hourlyRate)}/hr
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <div className="relative">
              <Link to={`/coach/${coach.id}`}>
                <Avatar className="h-16 w-16 hover:ring-2 hover:ring-primary/50 transition-all duration-300 cursor-pointer">
                  <AvatarImage src={coach.avatar} alt={coach.name} />
                  <AvatarFallback className="text-lg">
                    {coach.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </Link>
              {coach.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-background flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <Link to={`/coach/${coach.id}`}>
                  <h3 className="text-lg font-semibold truncate hover:text-primary transition-colors duration-300 cursor-pointer">
                    {coach.name}
                  </h3>
                </Link>
                {coach.isVerified && (
                  <Badge variant="outline" className="text-xs">
                    Verified
                  </Badge>
                )}
                {coach.isTopRated && (
                  <Badge className="text-xs">
                    <Award className="w-3 h-3 mr-1" />
                    Top Rated
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-2">{coach.title}</p>
              <Badge variant="secondary" className="text-xs">
                {coach.category}
              </Badge>
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(coach.hourlyRate)}
              <span className="text-sm font-normal text-muted-foreground">
                /hr
              </span>
            </div>
            {coach.hasVideo && (
              <Button variant="ghost" size="sm" className="mt-1 p-0 h-auto">
                <PlayCircle className="w-4 h-4 mr-1" />
                <span className="text-xs">Watch Intro</span>
              </Button>
            )}
          </div>
        </div>

        {/* Rating and Stats */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {renderStars(coach.rating)}
              <span className="font-medium">{coach.rating}</span>
              <span className="text-muted-foreground">
                ({coach.reviewCount} reviews)
              </span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Users className="w-4 h-4 mr-1" />
              {coach.totalStudents} students
            </div>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            Responds in {coach.responseTime}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {coach.description}
        </p>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {coach.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {coach.skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{coach.skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-muted-foreground">
          <div className="space-y-1">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {coach.location}
            </div>
            <div className="flex items-center">
              <Languages className="w-3 h-3 mr-1" />
              {coach.languages.slice(0, 2).join(", ")}
              {coach.languages.length > 2 && ` +${coach.languages.length - 2}`}
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center">
              <Award className="w-3 h-3 mr-1" />
              {coach.experience}
            </div>
            <div className="flex items-center space-x-1">
              {coach.sessionFormats.includes("Video Call") && (
                <Video className="w-3 h-3" />
              )}
              {coach.sessionFormats.includes("Phone Call") && (
                <Phone className="w-3 h-3" />
              )}
              {coach.sessionFormats.includes("In Person") && (
                <User className="w-3 h-3" />
              )}
            </div>
          </div>
        </div>

        {/* Next Available */}
        {coach.nextAvailable && (
          <div className="mb-4 p-2 bg-muted/50 rounded-md">
            <div className="flex items-center text-xs text-muted-foreground">
              <CalendarIcon className="w-3 h-3 mr-1" />
              Next available: {coach.nextAvailable}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button asChild className="flex-1">
            <Link to={`/coach/${coach.id}`}>View Profile</Link>
          </Button>
          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <CalendarIcon className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Book a Session with {coach.name}</DialogTitle>
                <DialogDescription>
                  Choose your preferred session type and available time slot.
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                {/* Session Package */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Session Type</h3>
                  <Card className="p-4 border-primary bg-primary/5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Discovery Session</h4>
                        <p className="text-sm text-muted-foreground">
                          Initial consultation to assess goals and fit
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          60 min
                        </p>
                      </div>
                      <div className="font-bold text-primary">
                        ${coach.hourlyRate}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Calendar */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Select Date & Time</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />

                  {selectedDate && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Available Times</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {["9:00 AM", "2:00 PM", "4:00 PM"].map((time) => (
                          <Button key={time} variant="outline" size="sm">
                            {time}
                          </Button>
                        ))}
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
                  Confirm Booking - ${coach.hourlyRate}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="icon">
            <MessageCircle className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}