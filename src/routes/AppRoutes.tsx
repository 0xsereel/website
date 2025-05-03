import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Blog } from "../pages/Blog/Blog";
import { SingleBlog } from "../pages/Blog/SingleBlog";
import { Wallet } from "../pages/solutions/Wallet";
import { Tokenization } from "../pages/solutions/Tokenization";
import { Identity } from "../pages/solutions/Identity";
const AppRoutes = () => {
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
        <Route path="/solutions/identity" element={<Identity />} />
      </Routes>
    </Router>
  );
}; 

export default AppRoutes;
