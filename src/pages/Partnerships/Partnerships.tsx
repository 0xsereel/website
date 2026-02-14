import { V4Layout } from "../../components/V4/V4Layout";
import { C, grdT } from "../../components/V4/theme";
import { MeshBg, Gc, Rv } from "../../components/V4/shared";

export const Partnerships = () => {
  const partnerships = [
    {
      name: "VIA Labs",
      logo: "/images/partnerships/logos/via-labs-logo.jpg",
      url: "https://vialabs.io"
    },
    {
      name: "Primus Labs",
      logo: "/images/partnerships/logos/primus-labs-logo.jpg",
      url: "https://primuslabs.xyz"
    }
  ];

  return (
    <V4Layout>
      <section style={{
        minHeight: "80vh", display: "flex", alignItems: "center",
        padding: "140px clamp(16px,4vw,56px) 60px", position: "relative",
      }}>
        <MeshBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1120, margin: "0 auto", width: "100%", textAlign: "center" }}>
          <Rv>
            <h1 style={{
              fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 800, lineHeight: 1.1,
              letterSpacing: "-3px", fontFamily: "var(--display)", marginBottom: 24,
            }}>
              Strategic <span style={grdT}>Partnerships</span>
            </h1>
          </Rv>
          <Rv d={0.1}>
            <p style={{ fontSize: 18, color: C.m, maxWidth: 720, margin: "0 auto", lineHeight: 1.8 }}>
              Collaborating with industry leaders to drive innovation and interoperability in institutional DeFi
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="sl">Our Partners</div>
            <h2 style={{ fontSize: "clamp(30px,3.8vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.04, fontFamily: "var(--display)" }}>
              Building the future <span style={{ color: C.m }}>together</span>
            </h2>
          </div>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {partnerships.map((partner, index) => (
            <Rv key={index} d={index * 0.1}>
              <a href={partner.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Gc style={{ 
                  height: "100%", 
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 240
                }} p="40px 36px">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{ 
                      width: "100%", 
                      height: "auto", 
                      objectFit: "contain",
                      transition: "transform 0.3s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </Gc>
              </a>
            </Rv>
          ))}
        </div>
      </section>
    </V4Layout>
  );
};
