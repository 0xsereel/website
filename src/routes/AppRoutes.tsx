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
import { Platform } from "../pages/Platform/Platform";
import { Custody } from "../pages/Platform/Custody";
import { Marketplace } from "../pages/Platform/Marketplace";
import { APIs } from "../pages/Platform/APIs";
import { Settlement } from "../pages/Platform/Settlement";
import { Solutions } from "../pages/solutions/Solutions";
import { FundManagers } from "../pages/solutions/FundManagers";
import { Exchanges } from "../pages/solutions/Exchanges";
import { Banks } from "../pages/solutions/Banks";
import { FamilyOffices } from "../pages/solutions/FamilyOffices";
import { Developers } from "../pages/Developers/Developers";
import { Docs } from "../pages/Developers/Docs";
import { ApiReference } from "../pages/Developers/ApiReference";
import { Whitepapers } from "../pages/Resources/Whitepapers";
import { Careers } from "../pages/Company/Careers";
import { Advisory } from "../pages/Advisory/Advisory";
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
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/platform/custody" element={<Custody />} />
        <Route path="/platform/marketplace" element={<Marketplace />} />
        <Route path="/platform/apis" element={<APIs />} />
        <Route path="/platform/settlement" element={<Settlement />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/fund-managers" element={<FundManagers />} />
        <Route path="/solutions/exchanges" element={<Exchanges />} />
        <Route path="/solutions/banks" element={<Banks />} />
        <Route path="/solutions/family-offices" element={<FamilyOffices />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/developers/docs" element={<Docs />} />
        <Route path="/developers/api-reference" element={<ApiReference />} />
        <Route path="/resources/whitepapers" element={<Whitepapers />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/advisory" element={<Advisory />} />
        {isDev && <Route path="/editor" element={<Editor />} />}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
