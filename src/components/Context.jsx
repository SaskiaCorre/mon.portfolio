import PAGES from "../data/projectsData";

export default function Context({projectsData}){
    return (<>
    <div className="context-grid">
        {projectsData.map((contextItems) => (
            <div 
                className="context-item" 
                key={contextItems.title}
            >
                {contextItems.title && (
                    <h3>{contextItems.title}</h3>
                )}
                {contextItems.content && (
                    <p>{contextItems.content}</p>
                )}
            </div>
        ))}
    </div>
     </>
    )
}
