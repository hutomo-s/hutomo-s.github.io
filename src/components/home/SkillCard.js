function SkillCard(props) {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.skill.groupName}</h5>
            <ul className="icon-list">
              {/* use index from array because the list is static */}
              {props.skill.items.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillCard;