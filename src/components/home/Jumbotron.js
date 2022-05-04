import { handleClickHash } from 'utils/navigation/navigation';

function Jumbotron() {

  return (
    <>
      {/* jumbotron section */}
      <div className="container col-xxl-8 px-4 py-5" id="jumbotron">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Hi I'm Hutomo</h1>
            <p className="lead">
              Web Developer and Engineering Manager
            </p>
            <p className="lead">
              based on Jakarta, Indonesia
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={(e) => handleClickHash(e, "about")}>Explore More</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={(e) => handleClickHash(e, "connect")}>Connect</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jumbotron;