function Skills() {
  return (
    <>
      {/* skills section */}
      <div className="container col-xxl-8 px-4 py-5" id="skills">
          <div className="row g-5">
            <div className="col-md-3">
              <h4>
                <span className="underline-blue">Skills</span>
              </h4>
            </div>

            <div className="col-md-9">

              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Programming Languages</h5>
                      <ul className="icon-list">
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>Python</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5>Front End</h5>
                      <ul className="icon-list">
                        <li>ReactJS</li>
                        <li>Webpack</li>
                        <li>Bootstrap</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5>Query Language</h5>
                      <ul className="icon-list">
                        <li>GraphQL</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5>Database Engines</h5>
                      <ul className="icon-list">
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Redis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5>Web Frameworks</h5>
                      <ul className="icon-list">
                        <li>Laravel</li>
                        <li>Slim</li>
                        <li>Django</li>
                        <li>ExpressJS</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5>Deployment</h5>
                      <ul className="icon-list">
                        <li>CentOS</li>
                        <li>Ubuntu</li>
                        <li>nginx</li>
                        <li>php-fpm</li>
                        <li>Ansible</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default Skills;