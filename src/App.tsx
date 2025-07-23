import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/home";
import Appointment from "./components/Appointment";
import Therapist from "./components/Therapist";
import FAQ from "./components/FAQ";
import routes from "tempo-routes";

function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="min-h-screen flex flex-col">
          <NavigationBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/therapist" element={<Therapist />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </div>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
