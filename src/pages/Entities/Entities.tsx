import { Layout } from "../../components/Core/Layout";
import { C, grdT } from "../../components/Core/theme";
import { MeshBg, Gc, Rv } from "../../components/Core/shared";

export const Entities = () => {
  const entities = [
    {
      name: "Seree Technologies, Inc.",
      location: "Delaware, USA",
      icon: "🏢",
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      name: "Sereel Technologies Botswana",
      location: "Gaborone, Botswana",
      icon: "🌍",
      color: "from-[#1CA36E]/10 to-green-500/10",
    },
  ];

  return (
    <Layout>
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
              <span style={grdT}>Global</span> Company Structure
            </h1>
          </Rv>
          <Rv d={0.1}>
            <p style={{ fontSize: 18, color: C.m, maxWidth: 680, margin: "0 auto", lineHeight: 1.8 }}>
              As a global company, we have a growing number of entities strategically positioned worldwide
            </p>
          </Rv>
        </div>
      </section>

      <section style={{ padding: "80px clamp(16px,4vw,56px) 100px", maxWidth: 1120, margin: "0 auto" }}>
        <Rv>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="sl">Our Entities</div>
            <h2 style={{ fontSize: "clamp(30px,3.8vw,46px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.04, fontFamily: "var(--display)" }}>
              Strategically positioned to serve <span style={{ color: C.m }}>institutional clients globally</span>
            </h2>
          </div>
        </Rv>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 20 }}>
          {entities.map((entity, index) => (
            <Rv key={index} d={index * 0.1}>
              <Gc style={{ height: "100%", cursor: "pointer" }} p="40px 36px">
                <div style={{ fontSize: 52, marginBottom: 28 }}>{entity.icon}</div>
                <h3 style={{ 
                  fontSize: 24, 
                  fontWeight: 700, 
                  color: C.g, 
                  marginBottom: 12, 
                  fontFamily: "var(--body)",
                  transition: "color 0.3s"
                }}>
                  {entity.name}
                </h3>
                <p style={{ fontSize: 15, color: C.m, display: "flex", alignItems: "center", gap: 8 }}>
                  <span>📍</span> {entity.location}
                </p>
              </Gc>
            </Rv>
          ))}
        </div>
      </section>
    </Layout>
  );
};
