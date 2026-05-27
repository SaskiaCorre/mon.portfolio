export default function Hero({title, content, image, cta}){
  return (
    <>
      <section className="hero-layout">

        <div className="hero-content">

          {title && (
            <h1 className="hero-title">
              {title}
            </h1>
          )}

          {content && (
            <p className="hero-text">
              {content}
            </p>
            )}

          {cta && (
            <div className="hero-cta">
              {cta}
            </div>
          )}
        </div>
        <aside>
          {image && (
            <div className="hero-image">
              {image}
            </div>        
          )}
        </aside>
      </section>
    </>
    )
}