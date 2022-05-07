function Education() {
  return (
    <>
      {/* education section */}
      <div className="container col-xxl-8 px-4 py-5" id="education">
        <div className="row g-5">
          <div className="col-md-3">
            <h4>
              <span className="underline-blue">Education</span>
            </h4>
          </div>

          <div className="col-md-9">
            <h5>Universitas Indonesia</h5>
            <p>Bachelor of Engineering (Computer Engineering)</p>
            <span className="d-block">GPA 3.38 of 4.00</span>
            <span className="d-block">Graduated in July 2014</span>
          </div>

        </div>

        <div className="row mb-5"></div>

        <div className="row g-5">
          <div className="col-md-3">
            <h4>
              <span className="underline-blue">Certification</span>
            </h4>
          </div>

          <div className="col-md-9 pt-1">
            <h5>UX Indonesia (uxindo.com)</h5>
            <p>UX Essentials</p>
            <span className="d-block">Training Completed in January 2018</span>
          </div>

        </div>

      </div>
    </>
  )
}

export default Education;