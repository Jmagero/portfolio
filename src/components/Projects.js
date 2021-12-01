import React from 'react'
import Thumbnail from '../Thumbnails/thumbnail'
import img from '../dist/images/railscapstone1.png'

const Projects = () => {
    return(
        <div>
            <h1>Projects</h1>
            <Thumbnail
                link="https://freshpages.herokuapp.com/"
                image={img}
                title="Fresh Pages!"
                description="Fresh pages is an entertainment website created 
                using Ruby on Rails, based on the design idea by Nelson Sakwa on Behance"
            />
        </div>
    )

}

export default Projects;