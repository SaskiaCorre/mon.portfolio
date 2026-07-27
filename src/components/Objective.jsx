import PAGES from "../data/projectsData";

export default function Objective({projectsData}){
    return (
    <>
    <div className='objectives-grid'>
        {projectsData.map((objectives) => (
        <div key={objectives.title}
             className='objective-item'
        >
            <h3>{objectives.content}</h3>
        </div>
        ))}      
    </div>
    </>
    )
}
