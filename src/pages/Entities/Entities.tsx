import { SEO } from "../../components/SEO";

export const Entities = () => {
  const entities = [
    { name: "Sereel Technologies, Inc.", location: "Chicago, Illinois" },
    { name: "Sereel Technologies Botswana", location: "Gaborone, Botswana" },
    { name: "Sereel Technologies Kenya", location: "Nairobi, Kenya" },
  ];

  return (
    <main className="wrap">
      <SEO
        title="Global Entities & Company Structure"
        description="Sereel's global corporate structure: Sereel Technologies, Inc. in Chicago, Sereel Technologies Botswana in Gaborone, and Sereel Technologies Kenya in Nairobi."
        canonical="/entities"
      />
      <section className="page-hero">
        <div className="mono eyebrow lit">[ Entities ]</div>
        <h1>
          Global <span className="lit">Company</span> Structure
        </h1>
        <p className="lede">
          As a global company, we have a growing number of entities
          strategically positioned worldwide.
        </p>
      </section>

      <section className="section">
        <div className="locations three">
          {entities.map((entity) => (
            <div className="loc" key={entity.name}>
              <div className="name">{entity.name}</div>
              <div className="country mono">{entity.location}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
