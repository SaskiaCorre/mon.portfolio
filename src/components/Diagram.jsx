import PAGES from "../data/projectsData";

export default function Diagram({projectsData}){
    return (
    <>
    <div className="diagram-grid">
        {projectsData.map((diagrams) => (
        <div key={diagrams.title}
             className="diagram-item"
        >
          <h3>{diagrams.title}</h3>
            <img 
              src={diagrams.image}  
              className='grid-img'
            />
            {/* <h3>{diagrams.title}</h3>
                <p>{diagrams.content1}</p>
                <p>{diagrams.content2}</p> */}
        </div>
          ))}
    </div>
    </>
    )
}
