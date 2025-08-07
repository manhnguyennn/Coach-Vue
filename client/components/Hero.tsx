import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  PlayCircle,
  Star,
  Users,
  TrendingUp,
  BookOpen,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <TrendingUp className="w-3 h-3 mr-1" />
                {t('hero.badge')}
              </Badge>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                dangerouslySetInnerHTML={{ __html: t('hero.title') }}
              />
              <p className="text-lg text-muted-foreground max-w-lg">
                {t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/coaches">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {t('hero.findCoach')}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/become-coach">
                  <Users className="w-4 h-4 mr-2" />
                  {t('hero.becomeCoach')}
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">
                  {t('hero.expertCoaches')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">
                  {t('hero.successStories')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center">
                  <Star className="w-3 h-3 fill-current text-yellow-500 mr-1" />
                  {t('hero.averageRating')}
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Featured coaches */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold mb-2">
                {t('hero.featuredCoaches')}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t('hero.featuredSubtitle')}
              </p>
            </div>

            <div className="space-y-4">
              {/* Coach Card 1 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold truncate">Sarah Johnson</h4>
                      <Badge variant="secondary" className="text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        Top Rated
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Leadership & Executive Coaching
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-current text-yellow-500 mr-1" />
                        4.9 (127 reviews)
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        $80/hr
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <PlayCircle className="w-4 h-4" />
                  </Button>
                </div>
              </Card>

              {/* Coach Card 2 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg" alt="Marcus Chen" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold truncate">Marcus Chen</h4>
                      <Badge variant="outline" className="text-xs">
                        Tech Expert
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Software Engineering & Career Growth
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-current text-yellow-500 mr-1" />
                        4.8 (89 reviews)
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        $65/hr
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <PlayCircle className="w-4 h-4" />
                  </Button>
                </div>
              </Card>

              {/* Coach Card 3 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/placeholder.svg"
                        alt="Elena Rodriguez"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold truncate">
                        Elena Rodriguez
                      </h4>
                      <Badge className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Business Strategy & Entrepreneurship
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-current text-yellow-500 mr-1" />
                        5.0 (234 reviews)
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        $120/hr
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <PlayCircle className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </div>

            <div className="text-center pt-4">
              <Button variant="ghost" asChild>
                <Link to="/coaches">
                  View All Coaches
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
