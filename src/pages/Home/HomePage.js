import custsatisfaction from 'assets/customer-satisfaction.png'
import quality from 'assets/shield.png'
import values from 'assets/values.png'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'assets/app.css';
import Navbar from 'components/navbar/Navbar';
import Jumbotron from 'components/home/Jumbotron';
import Footer from 'components/footer/Footer';

function HomePage() {

  return (
    <div className="App">

      <Navbar />
      <Jumbotron />

      {/* about section */}
      <div className="bg-grey">
        <div class="container col-xxl-8 px-4 py-5" id="about">
          <div class="row g-5">
            <div class="col-md-3">
              <h4>
                <span className="underline-blue">About Me</span>
              </h4>
            </div>

            <div class="col-md-9">
              <p>Highly motivated software engineer with 7 years of professional experience.</p>
              <p>Manage and improve legacy platform in parallel with developing new platform with brownfield strategy.</p>
              <p>Experienced in building IT team from scratch by creating technical and non-technical standards.</p>
              <p>Migrating painful insurance paperworks into a computerized system resulting in increasing productivity of marketing team to generate more revenue.</p>
            </div>

          </div>

        </div>
      </div>

      {/* education section */}
      <div class="container col-xxl-8 px-4 py-5" id="education">
        <div class="row g-5">
          <div class="col-md-3">
            <h4>
              <span className="underline-blue">Education</span>
            </h4>
          </div>

          <div class="col-md-9">
            <h5>Universitas Indonesia</h5>
            <p>Bachelor of Engineering (Computer Engineering)</p>
            <span className="d-block">GPA 3.38 of 4.00</span>
            <span className="d-block">Graduated in July 2014</span>
          </div>

        </div>

        <div className="row mb-5"></div>

        <div class="row g-5">
          <div class="col-md-3">
            <h4>
              <span className="underline-blue">Certification</span>
            </h4>
          </div>

          <div class="col-md-9 pt-1">
            <h5>UX Indonesia (uxindo.com)</h5>
            <p>UX Essentials</p>
            <span className="d-block">Training Completed in January 2018</span>
          </div>

        </div>

      </div>

      {/* core values section */}
      <div className="bg-grey">
        <div class="container col-xxl-8 px-4 py-5" id="corevalues">
          <div class="row g-5">
            <div class="col-md-3">
              <h4>
                <span className="underline-blue">Core Values</span>
              </h4>
            </div>

            <div class="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <img src={quality} class="img-fluid p-5" alt="Commitment to Quality" />
                  <h5>Commitment to Quality</h5>
                  <p>We are not creating a perfect software, but we will do our best to deliver high quality code that can be used for a long-term period.</p>
                </div>

                <div className="col-md-4">
                  <img src={custsatisfaction} class="img-fluid p-5" alt="Customer Centric Approach" />
                  <h5>Customer Centric Approach</h5>
                  <p>Our strategy in developing software is to understand the needs, wants and pain points of the customer. We expect our target market can use our product to satisfy their need, want and pain.</p>
                </div>

                <div className="col-md-4">
                  <img src={values} class="img-fluid p-5" alt="Focus on Business Value" />
                  <h5>Focus on Business Value</h5>
                  <p>Priority management is very important in every business. We collaborate with product and business team to prioritize on projects and tasks that bring the maximum value for your business.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* experience section */}
      <div class="container col-xxl-8 px-4 py-5" id="experience">
        <div class="row g-5">
          <div class="col-md-3">
            <h4>
              <span className="underline-blue">Experience</span>
            </h4>
          </div>


          <div class="col-md-9 pt-1">
            <h5>IT Manager</h5>

            <span className="d-block">Premiro.com (PT Mitra Ibisnis Terapan)</span>
            <span className="d-block">April 2020 - December 2021</span>
            <span className="d-block mb-3"></span>

            <ul class="icon-list">
              <li>Managing Product and Technology Team as A Scrum Master and Tech Lead</li>
              <li>Create printed Standard Operating Procedure for SDLC</li>
              <li>Improve communication both in Tech Team and outside of Tech Team</li>
              <li>Improve documentation standards for Technical Team and Product Specifications</li>
              <li>Mentoring for subordinates by regular 1-on-1 and code review</li>
            </ul>

            <div className="row mb-3"></div>

            <h5>Lead Web Developer</h5>
            <span className="d-block">Premiro.com (PT Mitra Ibisnis Terapan)</span>
            <span className="d-block">October 2017 - March 2021</span>
            <span className="d-block mb-3"></span>

            <ul class="icon-list">
              <li>Migrate System from On Premise to Alibaba Cloud</li>
              <li>Implementation of VT Snap with ReactJS, ExpressJS and GraphQL</li>
              <li>Create Brute Force Handler for User Login Module</li>
              <li>Developing a New Backend Platform using Slim 4 Framework and Stateless Architecture</li>
              <li>Processing Bulk Transaction Using php7 and Redis Queue</li>
              <li>Maintain Legacy System written in Codeigniter Framework</li>
            </ul>

            <div className="row mb-3"></div>

            <h5>Web Developer</h5>
            <span className="d-block">Cekaja.com (PT Puncak Finansial Utama)</span>
            <span className="d-block">April - September 2017</span>
            <span className="d-block mb-3"></span>

            <ul class="icon-list">
              <li>Manage and Improve Partnership Project with MSIG Online (msigonline.co.id)</li>
              <li>Manage and Improve Partnership Project with Premiro (premiro.com)</li>
            </ul>

            <div className="row mb-3"></div>

            <h5>Web Developer</h5>
            <span className="d-block">KUDO (PT Kudo Teknologi Indonesia)</span>
            <span className="d-block">December 2015 - April 2017</span>
            <span className="d-block mb-3"></span>

            <ul class="icon-list">
              <li>Prepare the system architecture and tools for the project</li>
              <li>Develop applications using Laravel PHP Framework and Wordpress</li>
              <li>Implement better web and automation technologies (ReactJS, Grunt)</li>
            </ul>

            <div className="row mb-3"></div>

            <h5>Web Developer</h5>
            <span className="d-block">Detik.com (PT Agranet Multicitra Siberkom)</span>
            <span className="d-block">September 2014 - November 2015</span>
            <span className="d-block mb-3"></span>

            <ul class="icon-list">
              <li>Developer team of SolusiUKM using Panada PHP Framework and PostgreSQL. SolusiUKM is a native ads platform of detik.com.</li>
              <li>Operational and maintenance team of myTrans (VOD and livestreaming platform)</li>
            </ul>


          </div>

        </div>
      </div>

      {/* skills section */}
      <div className="bg-grey">
        <div class="container col-xxl-8 px-4 py-5" id="skills">
          <div class="row g-5">
            <div class="col-md-3">
              <h4>
                <span className="underline-blue">Skills</span>
              </h4>
            </div>

            <div class="col-md-9">

              <div className="row">
                <div className="col-md-4 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5 className="card-title">Programming Languages</h5>
                      <ul class="icon-list">
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>Python</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5>Front End</h5>
                      <ul class="icon-list">
                        <li>ReactJS</li>
                        <li>Webpack</li>
                        <li>Bootstrap</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5>Query Language</h5>
                      <ul class="icon-list">
                        <li>GraphQL</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5>Database Engines</h5>
                      <ul class="icon-list">
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Redis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5>Web Frameworks</h5>
                      <ul class="icon-list">
                        <li>Laravel</li>
                        <li>Slim</li>
                        <li>Django</li>
                        <li>ExpressJS</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h5>Deployment</h5>
                      <ul class="icon-list">
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
      </div>

      {/* portfolio section */}
      <div class="container col-xxl-8 px-4 py-5" id="portfolio">
        <div class="row g-5">

          <div class="col-md-3">
            <h4>
              <span className="underline-blue">Portfolio</span>
            </h4>
          </div>

          <div className="col-md-9">
            <h5>Premiro.com Web Platform</h5>

            <span className="d-block">Premiro.com has some platform services to support the business</span>
            <span className="d-block mb-3"></span>

            <ul class="icon-list">
              <li>Premiro Web in <a href="https://www.premiro.com" target="_blank" rel="noreferrer">https://www.premiro.com</a></li>
              <li>Premiro Slim Dashboard for Back Office Service</li>
              <li>Premiro Slim API as Back End Services for Premiro Web (Internal) and External Partners</li>
            </ul>

            <div className="row mb-3"></div>

            <h5>Timer App</h5>

            <span className="d-block">Lorem Ipsum</span>
            <span className="d-block mb-3"></span>

            <ul class="icon-list">
              <li>Timer App Live Demo <a href="#" target="_blank" rel="noreferrer">#</a></li>
              <li>Timer App Github <a href="#" target="_blank" rel="noreferrer">#</a></li>
            </ul>

          </div>
        </div>
      </div>

      {/* connect section */}
      <div className="bg-grey">
        <div class="container col-xxl-8 px-4 py-5" id="connect">
          <div class="row g-5">
            <div class="col-md-3">
              <h4>
                <span className="underline-blue">Connect with Me</span>
              </h4>
            </div>

            <div class="col-md-9">
              <h5>I'm happy to connect with you :)</h5>
              <p>Keep in touch for further collaboration</p>

              <ul class="icon-list">
                <li>LinkedIn <a href="https://www.linkedin.com/in/hutomo-sugianto-763414107/" target="_blank" rel="noreferrer">Hutomo Sugianto</a></li>
                <li>Instagram <a href="https://instagram.com/hutomo.sugianto" target="_blank" rel="noreferrer">@hutomo.sugianto</a></li>
                <li>Medium <a href="https://medium.com/@hutomo_s" target="_blank" rel="noreferrer">@hutomo_s</a></li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default HomePage;