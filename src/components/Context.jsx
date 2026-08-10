import PROJECTS from "../data/projectsData";

export default function Context({context, contextCards}){
    return (<>
    <div className="context">
        {context.title && (
            <h2 className="section-title">
                {context.title}
            </h2>
        )}
        {context.category && (   
            <p className="section-category">
                {context.category}
            </p>
        )}
        {context.content && (   
            <p className="section-description">
                {context.content}
            </p>
        )}

        <div className="context-grid">
            {contextCards.map((contextCards) => (
                <div 
                    className="context-card" 
                    key={contextCards.title}
                >
                    {contextCards.title && (
                        <h3>{contextCards.title}</h3>
                    )}
                    {contextCards.content && (
                        <p>{contextCards.content}</p>
                    )}
                </div>
            ))}
        </div>
    </div>
     </>
    )
}
