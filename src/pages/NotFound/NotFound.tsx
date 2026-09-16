import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";

export const NotFound = () => {
  return (
    <main className="wrap">
      <SEO title="Page Not Found" noIndex />
      <section className="page-hero" style={{ textAlign: "center" }}>
        <div className="mono eyebrow lit">[ 404 ]</div>
        <h1>Page not found.</h1>
        <p className="lede">
          The page you are looking for doesn&apos;t exist or has moved.
        </p>
        <div style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center" }}>
          <Link className="pill" to="/">
            <span className="dot"></span>Back to Home
          </Link>
          <Link className="pill" to="/blog">
            <span className="dot"></span>Read the Journal
          </Link>
        </div>
      </section>
    </main>
  );
};
