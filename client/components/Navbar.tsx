import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Search,
  User,
  Settings,
  LogOut,
  Moon,
  Sun,
  BookOpen,
  Users,
  Star,
  TrendingUp,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/i18n";

interface NavbarProps {
  userRole?: "coach" | "trainee" | null;
  userName?: string;
  userAvatar?: string;
}

export default function Navbar({
  userRole = null,
  userName,
  userAvatar,
}: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              CoachConnect
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/coaches"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/coaches") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {t('nav.findCoaches')}
            </Link>
            <Link
              to="/how-it-works"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/how-it-works")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {t('nav.howItWorks')}
            </Link>
            <Link
              to="/recommendations"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/recommendations")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {t('nav.aiRecommendations')}
            </Link>
            {userRole === "coach" && (
              <Link
                to="/coach-resources"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/coach-resources")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Coach Resources
              </Link>
            )}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Dark mode toggle */}
            <div className="hidden sm:flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                checked={mounted ? theme === "dark" : false}
                onCheckedChange={toggleDarkMode}
              />
              <Moon className="h-4 w-4" />
            </div>

            {/* Search (for authenticated users) */}
            {userRole && (
              <Button variant="outline" size="sm" className="hidden xl:flex">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            )}

            {/* User actions */}
            {userRole ? (
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Role badge */}
                <Badge
                  variant={userRole === "coach" ? "default" : "secondary"}
                  className="hidden sm:flex"
                >
                  {userRole === "coach" ? (
                    <>
                      <Users className="w-3 h-3 mr-1" />
                      Coach
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-3 h-3 mr-1" />
                      Trainee
                    </>
                  )}
                </Badge>

                {/* User menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={userAvatar} alt={userName} />
                        <AvatarFallback>
                          {userName?.charAt(0)?.toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{userName || "User"}</p>
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {userRole === "coach"
                            ? "Professional Coach"
                            : "Learning Journey"}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard">
                        <User className="mr-2 h-4 w-4" />
                        {t('nav.dashboard')}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile">
                        <Settings className="mr-2 h-4 w-4" />
                        {t('nav.profile')}
                      </Link>
                    </DropdownMenuItem>
                    {userRole === "coach" && (
                      <DropdownMenuItem asChild>
                        <Link to="/my-reviews">
                          <Star className="mr-2 h-4 w-4" />
                          My Reviews
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      {t('nav.logout')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="outline" asChild className="hidden sm:flex">
                  <Link to="/login">{t('nav.login')}</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">
                    <span className="hidden sm:inline">{t('nav.getStarted')}</span>
                    <span className="sm:hidden">{t('nav.getStarted')}</span>
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
