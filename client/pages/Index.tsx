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
import { useTranslation } from "@/lib/i18n";

export default function Index() {
  const { t } = useTranslation();

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
              {t('features.badge')}
            </Badge>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: t('features.title') }}
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('features.expertCoaches.title')}</CardTitle>
                <CardDescription>
                  {t('features.expertCoaches.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>{t('features.aiMatching.title')}</CardTitle>
                <CardDescription>
                  {t('features.aiMatching.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-info" />
                </div>
                <CardTitle>{t('features.secure.title')}</CardTitle>
                <CardDescription>
                  {t('features.secure.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <CardTitle>{t('features.flexible.title')}</CardTitle>
                <CardDescription>
                  {t('features.flexible.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-success" />
                </div>
                <CardTitle>{t('features.goalTracking.title')}</CardTitle>
                <CardDescription>
                  {t('features.goalTracking.description')}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('features.globalCommunity.title')}</CardTitle>
                <CardDescription>
                  {t('features.globalCommunity.description')}
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
              {t('howItWorks.badge')}
            </Badge>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: t('howItWorks.title') }}
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('howItWorks.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold">{t('howItWorks.step1.title')}</h3>
              <p className="text-muted-foreground">
                {t('howItWorks.step1.description')}
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold">{t('howItWorks.step2.title')}</h3>
              <p className="text-muted-foreground">
                {t('howItWorks.step2.description')}
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold">{t('howItWorks.step3.title')}</h3>
              <p className="text-muted-foreground">
                {t('howItWorks.step3.description')}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/coaches">
                {t('howItWorks.startJourney')}
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
              {t('stats.title')}
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {t('stats.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-sm opacity-80">{t('stats.coaches')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-sm opacity-80">{t('stats.stories')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-80">{t('stats.satisfaction')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">40+</div>
              <div className="text-sm opacity-80">{t('stats.countries')}</div>
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
                {t('cta.badge')}
              </Badge>
              <CardTitle className="text-3xl md:text-4xl">
                {t('cta.title')}
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                {t('cta.description')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/coaches">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {t('cta.findCoach')}
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/become-coach">
                    <Users className="w-4 h-4 mr-2" />
                    {t('cta.becomeCoach')}
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('cta.freeConsultation')}
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
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.forLearners')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/coaches" className="hover:text-foreground">
                    {t('footer.findCoaches')}
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="hover:text-foreground">
                    {t('footer.browseCategories')}
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="hover:text-foreground">
                    {t('footer.howItWorks')}
                  </Link>
                </li>
                <li>
                  <Link to="/success-stories" className="hover:text-foreground">
                    {t('footer.successStories')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.forCoaches')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/become-coach" className="hover:text-foreground">
                    {t('footer.joinAsCoach')}
                  </Link>
                </li>
                <li>
                  <Link to="/coach-resources" className="hover:text-foreground">
                    {t('footer.resources')}
                  </Link>
                </li>
                <li>
                  <Link to="/coach-success" className="hover:text-foreground">
                    {t('footer.coachSuccess')}
                  </Link>
                </li>
                <li>
                  <Link to="/coach-support" className="hover:text-foreground">
                    {t('footer.support')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/about" className="hover:text-foreground">
                    {t('footer.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-foreground">
                    {t('footer.careers')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-foreground">
                    {t('footer.contact')}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-foreground">
                    {t('footer.privacy')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
