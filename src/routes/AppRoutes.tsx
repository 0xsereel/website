import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Blog } from "../pages/Blog/Blog";
import { SingleBlog } from "../pages/Blog/SingleBlog";
import { Standards } from "../pages/Standards/Standards";
import { Entities } from "../pages/Entities/Entities";
import { Repositories } from "../pages/Repositories/Repositories";
import { Terms } from "../pages/Terms/Terms";
import { PrivacyPolicy } from "../pages/PrivacyPolicy/PrivacyPolicy";
import { Editor } from "../pages/Editor/Editor";
import { FAQ } from "../components/Home/Faq/FAQ";

const AppRoutes = () => {
  const isDev = import.meta.env.DEV;

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/standards" element={<Standards />} />
          <Route path="/entities" element={<Entities />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {isDev && <Route path="/editor" element={<Editor />} />}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
