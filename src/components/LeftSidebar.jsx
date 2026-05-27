export default function LeftSidebar({sidebar}){
    return (<>
        <ul>
            {sidebar.map((item, index) => (
                <h2 key={index}>{item}</h2>
            ))}
        </ul>
        </>
    )
}
