import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, X, Star } from "lucide-react";
import { useState } from "react";

export interface FilterState {
  search: string;
  category: string;
  priceRange: [number, number];
  rating: string;
  availability: string;
  experience: string;
  language: string;
  format: string[];
  skills: string[];
}

interface SearchFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClearFilters: () => void;
}

const categories = [
  "Business & Leadership",
  "Technology & Programming",
  "Health & Wellness",
  "Creative Arts",
  "Language Learning",
  "Career Development",
  "Finance & Investing",
  "Marketing & Sales",
  "Personal Development",
  "Education & Training",
];

const skills = [
  "Public Speaking",
  "Project Management",
  "JavaScript",
  "Python",
  "Leadership",
  "Marketing Strategy",
  "Data Analysis",
  "UI/UX Design",
  "Content Writing",
  "Sales",
  "Mindfulness",
  "Career Transition",
];

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Portuguese",
  "Italian",
  "Russian",
  "Arabic",
];

export default function SearchFilters({
  filters,
  onFiltersChange,
  onClearFilters,
}: SearchFiltersProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const updateFilter = (key: keyof FilterState, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleSkill = (skill: string) => {
    const newSkills = filters.skills.includes(skill)
      ? filters.skills.filter((s) => s !== skill)
      : [...filters.skills, skill];
    updateFilter("skills", newSkills);
  };

  const toggleFormat = (format: string) => {
    const newFormats = filters.format.includes(format)
      ? filters.format.filter((f) => f !== format)
      : [...filters.format, format];
    updateFilter("format", newFormats);
  };

  const hasActiveFilters = () => {
    return (
      filters.search ||
      (filters.category && filters.category !== "all") ||
      (filters.rating && filters.rating !== "any") ||
      filters.priceRange[0] > 0 ||
      filters.priceRange[1] < 200 ||
      (filters.availability && filters.availability !== "any") ||
      (filters.experience && filters.experience !== "any") ||
      (filters.language && filters.language !== "any") ||
      filters.format.length > 0 ||
      filters.skills.length > 0
    );
  };

  return (
    <Card className="sticky top-20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-lg">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </CardTitle>
          <div className="flex items-center space-x-2">
            {hasActiveFilters() && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="text-xs"
              >
                <X className="w-3 h-3 mr-1" />
                Clear
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? "Show" : "Hide"}
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isCollapsed && (
        <CardContent className="space-y-6">
          {/* Search */}
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search coaches, skills, or keywords..."
                value={filters.search}
                onChange={(e) => updateFilter("search", e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Separator />

          {/* Category */}
          <div className="space-y-2">
            <Label>Category</Label>
            <Select
              value={filters.category}
              onValueChange={(value) => updateFilter("category", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <Label>
              Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
              /hour
            </Label>
            <Slider
              value={filters.priceRange}
              onValueChange={(value) =>
                updateFilter("priceRange", value as [number, number])
              }
              max={200}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$0</span>
              <span>$200+</span>
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-2">
            <Label>Minimum Rating</Label>
            <Select
              value={filters.rating}
              onValueChange={(value) => updateFilter("rating", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Any rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Rating</SelectItem>
                <SelectItem value="4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-500 mr-1" />
                    4+ Stars
                  </div>
                </SelectItem>
                <SelectItem value="4.5">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-500 mr-1" />
                    4.5+ Stars
                  </div>
                </SelectItem>
                <SelectItem value="4.8">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-500 mr-1" />
                    4.8+ Stars
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Availability */}
          <div className="space-y-2">
            <Label>Availability</Label>
            <Select
              value={filters.availability}
              onValueChange={(value) => updateFilter("availability", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Any time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Time</SelectItem>
                <SelectItem value="today">Available Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="next-week">Next Week</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <Label>Experience Level</Label>
            <Select
              value={filters.experience}
              onValueChange={(value) => updateFilter("experience", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Any experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Experience</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10+">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Language */}
          <div className="space-y-2">
            <Label>Language</Label>
            <Select
              value={filters.language}
              onValueChange={(value) => updateFilter("language", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Any language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Language</SelectItem>
                {languages.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Session Format */}
          <div className="space-y-3">
            <Label>Session Format</Label>
            <div className="space-y-2">
              {["Video Call", "Phone Call", "In Person", "Group Session"].map(
                (format) => (
                  <div key={format} className="flex items-center space-x-2">
                    <Checkbox
                      id={format}
                      checked={filters.format.includes(format)}
                      onCheckedChange={() => toggleFormat(format)}
                    />
                    <Label htmlFor={format} className="text-sm">
                      {format}
                    </Label>
                  </div>
                ),
              )}
            </div>
          </div>

          <Separator />

          {/* Skills */}
          <div className="space-y-3">
            <Label>Skills & Expertise</Label>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant={
                    filters.skills.includes(skill) ? "default" : "outline"
                  }
                  className="cursor-pointer"
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                  {filters.skills.includes(skill) && (
                    <X className="w-3 h-3 ml-1" />
                  )}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
