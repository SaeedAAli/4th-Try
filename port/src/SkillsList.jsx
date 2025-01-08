import React from 'react'

function SkillsList({src, skill}) {
  return (
    <span>
      <img src={src} alt="Tick-Icon">
      <p>{skill}</p>
      </img>
    </span>
  )
}

export default SkillsList
