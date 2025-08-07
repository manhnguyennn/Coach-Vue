import { useState, useMemo } from "react";
import { useTranslation } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import SearchFilters, { FilterState } from "@/components/SearchFilters";
import CoachCard, { Coach } from "@/components/CoachCard";
import {
  Search,
  Filter,
  TrendingUp,
  Users,
  Star,
  ChevronDown,
} from "lucide-react";

// Mock data for coaches
const mockCoaches: Coach[] = [
  {
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
    ],
    sessionFormats: ["Video Call", "Phone Call"],
    totalStudents: 234,
    responseTime: "2 hours",
    description:
      "Former Fortune 500 executive with 15+ years of leadership experience. I help professionals advance their careers and develop leadership skills.",
    hasVideo: true,
    isTopRated: true,
    isVerified: true,
    nextAvailable: "Today at 3:00 PM",
  },
  {
    id: "2",
    name: "Marcus Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    title: "Senior Software Engineer & Tech Lead",
    category: "Technology & Programming",
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 65,
    experience: "6+ years",
    languages: ["English", "Chinese"],
    location: "San Francisco, USA",
    isOnline: true,
    skills: ["JavaScript", "React", "System Design", "Career Growth"],
    sessionFormats: ["Video Call", "In Person"],
    totalStudents: 156,
    responseTime: "1 hour",
    description:
      "Tech lead at a major tech company specializing in frontend development and system design. I mentor developers at all levels.",
    hasVideo: true,
    isTopRated: false,
    isVerified: true,
    nextAvailable: "Tomorrow at 10:00 AM",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    title: "Business Strategy & Entrepreneurship",
    category: "Business & Leadership",
    rating: 5.0,
    reviewCount: 234,
    hourlyRate: 120,
    experience: "10+ years",
    languages: ["English", "Spanish", "Portuguese"],
    location: "London, UK",
    isOnline: false,
    skills: [
      "Business Strategy",
      "Entrepreneurship",
      "Startup Mentoring",
      "Fundraising",
    ],
    sessionFormats: ["Video Call", "Phone Call", "Group Session"],
    totalStudents: 445,
    responseTime: "30 minutes",
    description:
      "Serial entrepreneur and business strategist. Founded 3 successful startups and helped dozens of entrepreneurs scale their businesses.",
    hasVideo: true,
    isTopRated: true,
    isVerified: true,
    nextAvailable: "Next Week",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    title: "Health & Wellness Coach",
    category: "Health & Wellness",
    rating: 4.7,
    reviewCount: 76,
    hourlyRate: 90,
    experience: "12+ years",
    languages: ["English"],
    location: "Toronto, Canada",
    isOnline: true,
    skills: ["Nutrition", "Fitness", "Mental Health", "Lifestyle"],
    sessionFormats: ["Video Call", "Phone Call", "In Person"],
    totalStudents: 198,
    responseTime: "4 hours",
    description:
      "Certified nutritionist and wellness expert. I help busy professionals achieve optimal health through sustainable lifestyle changes.",
    hasVideo: false,
    isTopRated: false,
    isVerified: true,
    nextAvailable: "Friday at 2:00 PM",
  },
  {
    id: "5",
    name: "Priya Patel",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    title: "Digital Marketing Specialist",
    category: "Marketing & Sales",
    rating: 4.6,
    reviewCount: 54,
    hourlyRate: 55,
    experience: "5+ years",
    languages: ["English", "Hindi"],
    location: "Mumbai, India",
    isOnline: true,
    skills: ["SEO", "Content Marketing", "Social Media", "Analytics"],
    sessionFormats: ["Video Call"],
    totalStudents: 87,
    responseTime: "6 hours",
    description:
      "Digital marketing expert with experience working with startups and enterprises. Specialized in growth marketing and SEO.",
    hasVideo: true,
    isTopRated: false,
    isVerified: false,
    nextAvailable: "Monday at 9:00 AM",
  },
  {
    id: "6",
    name: "Alex Thompson",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
    title: "UX/UI Design Mentor",
    category: "Creative Arts",
    rating: 4.9,
    reviewCount: 112,
    hourlyRate: 70,
    experience: "7+ years",
    languages: ["English", "French"],
    location: "Paris, France",
    isOnline: true,
    skills: ["UI Design", "UX Research", "Figma", "Design Thinking"],
    sessionFormats: ["Video Call", "Group Session"],
    totalStudents: 203,
    responseTime: "3 hours",
    description:
      "Senior UX designer at a leading design agency. I help designers improve their craft and advance their careers in design.",
    hasVideo: true,
    isTopRated: true,
    isVerified: true,
    nextAvailable: "Today at 6:00 PM",
  },
];

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "rating", label: "Highest Rated" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Most Popular" },
];

export default function CoachSearch() {
  const { t } = useTranslation();
  const [sortBy, setSortBy] = useState("recommended");
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    priceRange: [0, 200],
    rating: "any",
    availability: "any",
    experience: "any",
    language: "any",
    format: [],
    skills: [],
  });

  const filteredAndSortedCoaches = useMemo(() => {
    let filtered = mockCoaches.filter((coach) => {
      // Search filter
      if (
        filters.search &&
        !coach.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        !coach.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !coach.skills.some((skill) =>
          skill.toLowerCase().includes(filters.search.toLowerCase()),
        )
      ) {
        return false;
      }

      // Category filter
      if (
        filters.category &&
        filters.category !== "all" &&
        coach.category !== filters.category
      ) {
        return false;
      }

      // Price range filter
      if (
        coach.hourlyRate < filters.priceRange[0] ||
        coach.hourlyRate > filters.priceRange[1]
      ) {
        return false;
      }

      // Rating filter
      if (
        filters.rating > 0 &&
        filters.rating !== "any" &&
        coach.rating < Number(filters.rating)
      ) {
        return false;
      }

      // Language filter
      if (
        filters.language &&
        filters.language !== "any" &&
        !coach.languages.includes(filters.language)
      ) {
        return false;
      }

      // Skills filter
      if (
        filters.skills.length > 0 &&
        !filters.skills.some((skill) => coach.skills.includes(skill))
      ) {
        return false;
      }

      // Format filter
      if (
        filters.format.length > 0 &&
        !filters.format.some((format) => coach.sessionFormats.includes(format))
      ) {
        return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.hourlyRate - b.hourlyRate;
        case "price-high":
          return b.hourlyRate - a.hourlyRate;
        case "popular":
          return b.totalStudents - a.totalStudents;
        case "newest":
          return 0; // Would use actual date in real app
        default:
          // Recommended: combination of rating, reviews, and top rated status
          const scoreA = a.rating * a.reviewCount + (a.isTopRated ? 1000 : 0);
          const scoreB = b.rating * b.reviewCount + (b.isTopRated ? 1000 : 0);
          return scoreB - scoreA;
      }
    });

    return filtered;
  }, [filters, sortBy]);

  const clearFilters = () => {
    setFilters({
      search: "",
      category: "all",
      priceRange: [0, 200],
      rating: "any",
      availability: "any",
      experience: "any",
      language: "any",
      format: [],
      skills: [],
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t('coachSearch.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('coachSearch.description')}
            </p>
          </div>

          {/* Quick search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder={t('coachSearch.searchPlaceholder')}
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="pl-12 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <SearchFilters
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={clearFilters}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <h2 className="text-lg sm:text-xl font-semibold">
                  {filteredAndSortedCoaches.length} {t('coachSearch.coachesFound')}
                </h2>
                {(filters.search ||
                  (filters.category && filters.category !== "all") ||
                  filters.skills.length > 0) && (
                  <div className="flex flex-wrap items-center gap-2">
                    {filters.search && (
                      <Badge variant="secondary">"{filters.search}"</Badge>
                    )}
                    {filters.category && filters.category !== "all" && (
                      <Badge variant="secondary">{filters.category}</Badge>
                    )}
                    {filters.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Grid */}
            {filteredAndSortedCoaches.length > 0 ? (
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {filteredAndSortedCoaches.map((coach) => (
                  <CoachCard
                    key={coach.id}
                    coach={coach}
                    variant="horizontal"
                  />
                ))}
              </div>
            ) : (
              <Card className="text-center py-16">
                <CardContent>
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t('coachSearch.noResults')}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t('coachSearch.noResultsDescription')}
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    {t('coachSearch.clearFilters')}
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Load More */}
            {filteredAndSortedCoaches.length > 12 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  {t('coachSearch.loadMore')}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
