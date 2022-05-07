function Experience() {

  const experiences = [
    {
      "id": 1,
      "title": "IT Manager",
      "company": "Premiro.com (PT Mitra Ibisnis Terapan)",
      "period": "April 2020 - December 2021",
      "descriptionList": [
        "Managing Product and Technology Team as A Scrum Master and Tech Lead",
        "Create printed Standard Operating Procedure for SDLC",
        "Improve communication both in Tech Team and outside of Tech Team",
        "Improve documentation standards for Technical Team and Product Specifications",
        "Mentoring for subordinates by regular 1-on-1 and code review"
      ]
    },
    {
      "id": 2,
      "title": "Lead Web Developer",
      "company": "Premiro.com (PT Mitra Ibisnis Terapan)",
      "period": "October 2017 - March 2021",
      "descriptionList": [
        "Migrate System from On Premise to Alibaba Cloud",
        "Implementation of VT Snap with ReactJS, ExpressJS and GraphQL",
        "Create Brute Force Handler for User Login Module",
        "Developing a New Backend Platform using Slim 4 Framework and Stateless Architecture",
        "Processing Bulk Transaction Using php7 and Redis Queue",
        "Maintain Legacy System written in Codeigniter Framework"
      ]
    },
    {
      "id": 3,
      "title": "Web Developer",
      "company": "Cekaja.com (PT Puncak Finansial Utama)",
      "period": "April - September 2017",
      "descriptionList": [
        "Manage and Improve Partnership Project with MSIG Online (msigonline.co.id)",
        "Manage and Improve Partnership Project with Premiro (premiro.com)",
      ]
    },
    {
      "id": 4,
      "title": "Web Developer",
      "company": "KUDO (PT Kudo Teknologi Indonesia)",
      "period": "December 2015 - April 2017",
      "descriptionList": [
        "Prepare the system architecture and tools for the project",
        "Develop applications using Laravel PHP Framework and Wordpress",
        "Implement better web and automation technologies (ReactJS, Grunt)",
      ]
    },
    {
      "id": 5,
      "title": "Web Developer",
      "company": "Detik.com (PT Agranet Multicitra Siberkom)",
      "period": "September 2014 - November 2015",
      "descriptionList": [
        "Developer team of SolusiUKM using Panada PHP Framework and PostgreSQL. SolusiUKM is a native ads platform of detik.com.",
        "Operational and maintenance team of myTrans (VOD and livestreaming platform)",
      ]
    },
  ];

  return (
    <>
      {/* experience section */}
      <div className="container col-xxl-8 px-4 py-5" id="experience">
        <div className="row g-5">
          <div className="col-md-3">
            <h4>
              <span className="underline-blue">Experience</span>
            </h4>
          </div>


          <div className="col-md-9 pt-1">

            {experiences.map((experience) => {
              return (
                <>
                  <h5>{experience.title}</h5>

                  <span className="d-block">{experience.company}</span>
                  <span className="d-block">{experience.period}</span>
                  <span className="d-block mb-3"></span>

                  <ul className="icon-list">
                    {experience.descriptionList.map((list, index) => {
                      return (
                        <li key={index}>{list}</li>
                      )
                    })}
                  </ul>
                  
                  <div className="row mb-3"></div>
                </>
              )
            })}

          </div>

        </div>
      </div>
    </>
  )
}

export default Experience;