export const Partnerships = () => {
  const partnerships = [
    {
      name: "VIA Labs",
      description:
        "VIA Labs is a platform focused on connecting blockchain networks to create a seamless, interoperable environment.",
      focus: "Blockchain Interoperability",
      collaboration: "Cross-chain infrastructure development",
    },
    {
      name: "Primus Labs",
      description:
        "Primus Labs is a zkTLS-based data & compute verification layer for blockchains. We utilize their technology to verify real world assets.",
      focus: "zkTLS Verification",
      collaboration: "Real-world asset verification systems",
    },
  ];

  return (
    <main className="wrap">
      <section className="page-hero">
        <div className="mono eyebrow lit">[ Partners ]</div>
        <h1>
          Strategic <span className="lit">Partnerships</span>
        </h1>
        <p className="lede">
          Collaborating with industry leaders to drive innovation and
          interoperability in institutional DeFi.
        </p>
      </section>

      <section className="section">
        <div className="spec-grid">
          {partnerships.map((partner) => (
            <div className="spec-card" key={partner.name}>
              <span className="badge">● {partner.name}</span>
              <h3>{partner.name}</h3>
              <div className="sub">{partner.focus}</div>
              <p>{partner.description}</p>
              <ul>
                <li>Focus: {partner.focus}</li>
                <li>Collaboration: {partner.collaboration}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
