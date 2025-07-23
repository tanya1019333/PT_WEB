import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contactInfo")}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">{t("address")}</p>
                  <p className="text-gray-300 text-sm">{t("addressText")}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-gray-300">+886 2 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-gray-300">info@kennethphysio.com</p>
              </div>
            </div>
          </div>

          {/* Clinic Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("clinicHours")}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-gray-300 text-sm">{t("monday")}</p>
                  <p className="text-gray-300 text-sm">{t("saturday")}</p>
                  <p className="text-gray-300 text-sm">{t("sunday")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kenneth Physio Space</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t("missionText").substring(0, 150)}...
            </p>
            <p className="text-gray-400 text-xs">{t("emergencyNote")}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Kenneth Physio Space. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
