import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Blog } from "../pages/Blog/Blog";
import { SingleBlog } from "../pages/Blog/SingleBlog";
import { Entities } from "../pages/Entities/Entities";
import { Partnerships } from "../pages/Partnerships/Partnerships";
import { Repositories } from "../pages/Repositories/Repositories";
import { Editor } from "../pages/Editor/Editor";
import { Terms } from "../pages/Terms/Terms";
import { PrivacyPolicy } from "../pages/PrivacyPolicy/PrivacyPolicy";
const AppRoutes = () => {
  const isDev = import.meta.env.DEV;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/entities" element={<Entities />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {isDev && <Route path="/editor" element={<Editor />} />}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
