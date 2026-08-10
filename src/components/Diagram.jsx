import PAGES from "../data/projectsData";

export default function Diagram({diagram, diagramCards}){
  if (
    !diagram.title && !diagram.content && 
    !diagramCards.title && !diagramCards.image) {
      return null;
  }
  return (
    <div className="diagram">
      {diagram.title && (
        <h2 className="section-title">
          {diagram.title}
        </h2>
      )}
      {diagram.content && (   
        <p className="section-description">
          {diagram.content}
        </p>
      )}

      <div className="diagram-grid">
      {diagramCards.map((diagramCards) => (
        <div 
          key={diagramCards.title}
          className="diagram-card"
        >
          {diagramCards.title && (
            <h3>{diagramCards.title}</h3>
          )}
          {diagramCards.image && (
            <img 
              src={diagramCards.image}  
              className='grid-img'
            />
          )}
        </div>
      ))}
      </div>
    </div>
    )
}
