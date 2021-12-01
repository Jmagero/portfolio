import React from 'react'; 
 
const Thumbnail = (props) => {
  return (
    <div className="project">
      <a href={props.link}>{props.title}</a>
      {/* <div className="project-title"></div> */}
      <div className="project-image">
          <img src={props.image} alt="Projects"/>
        </div>
        
        <div className="project-description">{props.description}</div>
    </div>
  );
}
 
export default Thumbnail;