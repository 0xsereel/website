import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Blog } from "../pages/Blog/Blog";
import { SingleBlog } from "../pages/Blog/SingleBlog";
import { Wallet } from "../pages/solutions/Wallet";
import { Tokenization } from "../pages/solutions/Tokenization";
import DeFi from "../pages/solutions/DeFi";
import { Entities } from "../pages/Entities/Entities";
import { Partnerships } from "../pages/Partnerships/Partnerships";
import { Repositories } from "../pages/Repositories/Repositories";
import { Editor } from "../pages/Editor/Editor";
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
        <Route path="/solutions/wallet" element={<Wallet />} />
        <Route path="/solutions/tokenization" element={<Tokenization />} />
        <Route path="/solutions/defi" element={<DeFi />} />
        <Route path="/entities" element={<Entities />} />
        <Route path="/patnerships" element={<Partnerships />} />
        <Route path="/repositories" element={<Repositories />} />
        {isDev && <Route path="/editor" element={<Editor />} />}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
