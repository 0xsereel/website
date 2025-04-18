import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={"Hello World"} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
