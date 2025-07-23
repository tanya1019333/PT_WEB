import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users, Clock } from "lucide-react";

const Therapist = () => {
  const { t, language } = useLanguage();

  const specializations = [
    { icon: <Award className="w-5 h-5" />, text: t("spec1") },
    { icon: <Users className="w-5 h-5" />, text: t("spec2") },
    { icon: <BookOpen className="w-5 h-5" />, text: t("spec3") },
    { icon: <Clock className="w-5 h-5" />, text: t("spec4") },
    { icon: <Award className="w-5 h-5" />, text: t("spec5") },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("therapistTitle")}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Therapist Photo and Basic Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=kenneth&backgroundColor=b6e3f4,c0aede,d1d4f9&clothesColor=262e33,3c4f5c,5199e4&eyebrowType=default&eyeType=default&facialHairType=light&hairColor=2c1b18,724133,a55728&mouthType=smile&skinColor=ae5d29,d08b5b,edb98a&topType=shortHairShortFlat"
                      alt="Kenneth Chiu"
                      className="w-40 h-40 rounded-full"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {t("therapistName")}
                    {language === "zh" && (
                      <span className="block text-lg text-gray-600 mt-1">
                        Kenneth Chiu
                      </span>
                    )}
                  </h2>
                  <p className="text-primary font-medium mb-4">
                    {t("therapistCredentials")}
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>📧 kenneth@kennethphysio.com</p>
                    <p>📞 +886 2 1234 5678</p>
                    <p>🏥 6+ Years Experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience & Expertise */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-primary" />
                  <span>{t("experienceTitle")}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {t("experienceText")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Education
                    </h4>
                    <p className="text-sm text-gray-600">
                      Master of Physical Therapy
                    </p>
                    <p className="text-sm text-gray-600">
                      National Taiwan University
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Certifications
                    </h4>
                    <p className="text-sm text-gray-600">
                      Licensed Physical Therapist
                    </p>
                    <p className="text-sm text-gray-600">
                      Orthopedic Manual Therapy
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card>
              <CardHeader>
                <CardTitle>{t("specializations")}</CardTitle>
                <CardDescription>
                  Areas of expertise and specialized treatment approaches
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="text-primary">{spec.icon}</div>
                      <span className="text-gray-700">{spec.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Treatment Philosophy */}
            <Card>
              <CardHeader>
                <CardTitle>Treatment Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-gray-700 italic">
                      &quot;I believe in empowering my patients through
                      education and movement. Recovery is not just about
                      treating symptoms, but about building resilience and
                      preventing future injuries through proper movement
                      patterns and strength training.&quot;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        500+
                      </div>
                      <div className="text-sm text-gray-600">
                        Patients Treated
                      </div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        95%
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">
                        6+
                      </div>
                      <div className="text-sm text-gray-600">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  Ready to Start Your Recovery Journey?
                </h3>
                <p className="mb-4 opacity-90">
                  Book a consultation with Kenneth and take the first step
                  towards better health.
                </p>
                <Link to="/appointment">
                  <Button variant="secondary" size="lg">
                    {t("bookAppointment")}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
