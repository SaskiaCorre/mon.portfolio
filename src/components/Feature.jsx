import PAGES from "../data/projectsData";

export default function Feature({projectsData}){
    return (
    <>
    <div className="features-grid">
    {projectsData.map((features) => {
      const Icon = features.icon;

      return (
        <div
          key={features.title}
          className="feature-item"
        >
          <Icon className="feature-icon" />
          <h3>{features.title}</h3>
        </div>
      );
    })}
    </div>
    </>
    )
}
