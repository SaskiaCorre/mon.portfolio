export default function MainContent({title, subtitle, firstcontent, secondcontent, thirdcontent, cta}){
  return (
    <>
      <div className="page-content">

          {title && (
            <h1 className="page-title">
              {title}
            </h1>
          )}

          {subtitle && (
            <h2 className="page-subtitle">
              {subtitle}
            </h2>
          )}

          {firstcontent && (
            <p className="page-text">
              {firstcontent}
            </p>
            )}

          {secondcontent && (
            <p className="page-text">
              {secondcontent}
            </p>
          )}

          {cta && (
            <button className="page-cta">
              {cta}
            </button>
          )}
        </div>   
    </>
    )
}