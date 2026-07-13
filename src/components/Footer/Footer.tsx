import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const isBlogPage =
    location.pathname === "/blog" || location.pathname.startsWith("/blog/");

  if (!isBlogPage) {
    return (
      <footer className="marketing-footer">
        <div className="wrap">
          <div className="marketing-footer-grid">
            <div className="marketing-footer-brand">
              <Link className="brand" to="/">
                <img src="/assets/glowing-logo.png" alt="" />
                <span className="name">SEREEL</span>
              </Link>
              <p>Compliant rails for tokenized capital markets.</p>
            </div>

            <div>
              <h4>System</h4>
              <ul>
                <li><a href="/#platform">Control system</a></li>
                <li><a href="/#served">Deployment dossiers</a></li>
                <li><a href="/#use-cases">Workflow ledger</a></li>
              </ul>
            </div>

            <div>
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/standards">Standards</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:team@sereel.com">team@sereel.com</a></li>
                <li>
                  <a href="https://www.linkedin.com/company/0xsereel" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://x.com/0xSereel" target="_blank" rel="noopener noreferrer">
                    X / Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="legal">
            <span>© Sereel Technologies, Inc. 2026</span>
            <span>Infrastructure provider, not issuer or asset sponsor</span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="blog-footer">
      <div className="wrap">
        <div className="row">
          <div className="col" style={{ maxWidth: 280 }}>
            <div className="brand" style={{ marginBottom: 14 }}>
              <img src="/assets/glowing-logo.png" alt="" />
              <span className="name">SEREEL</span>
            </div>
            <span className="mono">Institutional tokenization infrastructure</span>
          </div>
          <div className="col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/entities">Entities</Link></li>
              <li><Link to="/partnerships">Partnerships</Link></li>
            </ul>
          </div>
          <div className="col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/repositories">Research Repository</Link></li>
              <li><Link to="/standards">Standards</Link></li>
            </ul>
          </div>
          <div className="col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:team@sereel.com">team@sereel.com</a></li>
              <li>
                  <a href="https://www.linkedin.com/company/0xsereel" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>

              <li>
                  <a href="https://x.com/0xSereel" target="_blank" rel="noopener noreferrer">
                    X / Twitter
                  </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© Sereel Technologies, Inc. 2026</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};
