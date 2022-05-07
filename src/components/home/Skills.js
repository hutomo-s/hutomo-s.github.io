import SkillCard from 'components/home/SkillCard'

function Skills() {

  const skills = [
    {
      "id": 1,
      "groupName": "Programming Languages",
      "items": [
        "JavaScript",
        "PHP",
        "Python"
      ]
    },
    {
      "id": 2,
      "groupName": "Front End",
      "items": [
        "ReactJS",
        "Webpack",
        "Bootstrap"
      ]
    },
    {
      "id": 3,
      "groupName": "Query Language",
      "items": [
        "GraphQL",
      ]
    },
    {
      "id": 4,
      "groupName": "Database Engines",
      "items": [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
      ]
    },
    {
      "id": 5,
      "groupName": "Web Frameworks",
      "items": [
        "Laravel",
        "Slim",
        "Django",
        "ExpressJS",
      ]
    },
    {
      "id": 6,
      "groupName": "Deployment",
      "items": [
        "CentOS",
        "Ubuntu",
        "nginx",
        "php-fpm",
        "Ansible",
      ]
    },
  ]

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

              {skills.map((skill) => {
                return <SkillCard key={skill.id} skill={skill} />
              })}

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Skills;