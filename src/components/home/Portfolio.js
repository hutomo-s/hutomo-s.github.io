function Portfolio() {
  return (
    <>
      {/* portfolio section */}
      <div className="container col-xxl-8 px-4 py-5" id="portfolio">
        <div className="row g-5">

          <div className="col-md-3">
            <h4>
              <span className="underline-blue">Portfolio</span>
            </h4>
          </div>

          <div className="col-md-9">
            <h5>Premiro.com Web Platform</h5>

            <span className="d-block">Premiro.com has some platform services to support the business</span>
            <span className="d-block mb-3"></span>

            <ul className="icon-list">
              <li>Premiro Web in <a href="https://www.premiro.com" target="_blank" rel="noreferrer">https://www.premiro.com</a></li>
            </ul>

            <div className="row mb-3"></div>

            <h5>Timer App</h5>

            <ul className="icon-list">
              <li>Timer App Live Demo <a href="https://hutomo-s.github.io/timer-app/" target="_blank" rel="noreferrer">https://hutomo-s.github.io/timer-app</a></li>
              <li>Timer App Github <a href="https://github.com/hutomo-s/timer-app " target="_blank" rel="noreferrer">https://github.com/hutomo-s/timer-app</a></li>
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio;