import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { HelpCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("faq1Q"),
      answer: t("faq1A"),
    },
    {
      question: t("faq2Q"),
      answer: t("faq2A"),
    },
    {
      question: t("faq3Q"),
      answer: t("faq3A"),
    },
    {
      question: t("faq4Q"),
      answer: t("faq4A"),
    },
    {
      question: t("faq5Q"),
      answer: t("faq5A"),
    },
    {
      question: t("faq6Q"),
      answer: t("faq6A"),
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("faqTitle")}
          </h1>
          <p className="text-xl text-gray-600">{t("faqSubtitle")}</p>
        </div>

        {/* FAQ Accordion */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Additional Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>Call Us</span>
              </CardTitle>
              <CardDescription>Speak directly with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                +886 2 1234 5678
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {t("monday")}
                <br />
                {t("saturday")}
              </p>
              <Button variant="outline" className="w-full">
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>Email Us</span>
              </CardTitle>
              <CardDescription>Get detailed answers via email</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                info@kennethphysio.com
              </p>
              <p className="text-sm text-gray-600 mb-4">
                We typically respond within 24 hours
              </p>
              <Button variant="outline" className="w-full">
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Still Have Questions CTA */}
        <Card className="bg-primary text-white text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 opacity-90">
              We're here to help! Book a consultation to discuss your specific
              needs.
            </p>
            <Link to="/appointment">
              <Button variant="secondary" size="lg">
                {t("bookAppointment")}
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Quick Tips for Your Visit
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl mb-2">👕</div>
              <h4 className="font-medium mb-1">Dress Comfortably</h4>
              <p className="text-sm text-gray-600">
                Wear loose, comfortable clothing
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl mb-2">📋</div>
              <h4 className="font-medium mb-1">Bring Records</h4>
              <p className="text-sm text-gray-600">
                Medical history and imaging results
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl mb-2">⏰</div>
              <h4 className="font-medium mb-1">Arrive Early</h4>
              <p className="text-sm text-gray-600">
                Come 15 minutes before your appointment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
