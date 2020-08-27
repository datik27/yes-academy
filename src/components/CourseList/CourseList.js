import React from 'react';
import './CourseList.css'
import Button from 'react-bootstrap/Button';

const CourseList = (props) => {
    //console.log(props);
    const {img, title, description,  price} = props.course;
    return (
        <div className="course">
            <div className="course-img">
               <img src={img} alt=""/>
            </div>
            <div className="course-info">
            <h1>{title}</h1>
           <h3>Description : {description}</h3>
           <h2>Price : $ { price}</h2>
               <Button
               onClick={() => props. handleAddCourse(props.course)} 
                 variant="outline-success">Enroll Now</Button>{' '}
              

            </div>
            
        </div>
    );
};

export default CourseList;