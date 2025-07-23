import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Activity, Heart, Users, Award } from "lucide-react";

function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: t("service1"),
      description: "Personalized exercise programs designed for your recovery",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: t("service2"),
      description: "Restore your daily activities and improve quality of life",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: t("service3"),
      description: "Comprehensive evaluation of your movement patterns",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: t("service4"),
      description: "Proactive strategies to prevent future injuries",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("welcomeHeadline")}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t("welcomeSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointment">
                  <Button size="lg" className="w-full sm:w-auto">
                    {t("bookAppointment")}
                  </Button>
                </Link>
                <Link to="/therapist">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {t("learnMore")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80"
                alt="Physical therapy session"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t("missionTitle")}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("missionText")}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("servicesTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards better health and mobility.
          </p>
          <Link to="/appointment">
            <Button size="lg" variant="secondary">
              {t("bookAppointment")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
