import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeDta'
import './Course.css'
import CourseList from '../CourseList/CourseList';
import Cart from '../Cart/Cart';


const Course = () => {
   //console.log(fakeData);
   
   const first12 = fakeData.slice(0, 12);
   const [courses, setCourses] = useState(first12);

   const [cart, setCart] = useState([]);

   const handleAddCourse = (course) => {
      // console.log("adddeees", course);
       const newCart = [...cart, course];
       setCart(newCart);
   }
  
    return (
        <div className="main-container">
            <div  className="course-container">
                  <ul>
                  {
                   courses.map(cd => <CourseList 
                    handleAddCourse = { handleAddCourse}
                    course={cd}></CourseList>)
                  }
               </ul>
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>




            
           </div>
       
    );
};

export default Course;