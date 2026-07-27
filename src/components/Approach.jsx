import PAGES from "../data/projectsData";

export default function Approach({projectsData}){
    return (
    <>
    <div className='approach-grid'>
        {projectsData.map((approaches) => (
        <div key={approaches.title}
             className='approach-item'
        >
            <h3>{approaches.content}</h3>
        </div>
        ))}      
    </div>
    </>
    )
}
