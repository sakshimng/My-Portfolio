import React from 'react'

const Skills = ({ label, svg, faClass }) => {
    return (
        <div data-aos="fade-up" className="skill__square col-3 col-sm-2 my-3 mx-auto" style={{display: 'inline', textAlign: 'center'}}>
            <h6 className="mt-2">{label}</h6>
        </div>
    )
}

export default Skills
