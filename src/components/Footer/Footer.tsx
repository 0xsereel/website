import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
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
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">X / Twitter</a></li>
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
