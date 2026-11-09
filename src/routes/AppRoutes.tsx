import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { LanguageProvider } from "../i18n/LanguageProvider";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Blog } from "../pages/Blog/Blog";
import { SingleBlog } from "../pages/Blog/SingleBlog";
import { Verticals } from "../pages/Verticals/Verticals";
import { SereelVerified } from "../pages/SereelVerified/SereelVerified";
import { Listings } from "../pages/Listings/Listings";
import { Terms } from "../pages/Terms/Terms";
import { PrivacyPolicy } from "../pages/PrivacyPolicy/PrivacyPolicy";
import { Editor } from "../pages/Editor/Editor";
import { FAQ } from "../components/Home/Faq/FAQ";
import { NotFound } from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  const isDev = import.meta.env.DEV;

  return (
    <Router>
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/verticals" element={<Verticals />} />
            <Route path="/sereel-verified" element={<SereelVerified />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog/:slug" element={<SingleBlog />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {isDev && <Route path="/editor" element={<Editor />} />}

            {/* French — same components, rendered localized via i18n + LanguageProvider */}
            <Route path="/fr" element={<Home />} />
            <Route path="/fr/verticals" element={<Verticals />} />
            <Route path="/fr/sereel-verified" element={<SereelVerified />} />
            <Route path="/fr/listings" element={<Listings />} />
            <Route path="/fr/about" element={<About />} />
            <Route path="/fr/contact" element={<Contact />} />
            <Route path="/fr/faq" element={<FAQ />} />
            <Route path="/fr/terms" element={<Terms />} />
            <Route path="/fr/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </Router>
  );
};

export default AppRoutes;
