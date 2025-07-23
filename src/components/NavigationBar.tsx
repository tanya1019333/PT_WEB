import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: "/", label: t("home") },
    { path: "/appointment", label: t("appointment") },
    { path: "/therapist", label: t("therapist") },
    { path: "/faq", label: t("faq") },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900">
                {language === "en" ? "Kenneth Physio Space" : "邱閔琮復健空間"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "中文" : "EN"}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "中文" : "EN"}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-gray-50 rounded-md ${
                    location.pathname === item.path
                      ? "text-primary bg-gray-50"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
