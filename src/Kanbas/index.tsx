import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import Dashboard from "./Dashboard";

import db from "./Database";
import { useState } from "react";

import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState({
      _id: "1234", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
      setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId: any) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };

    // For Adding, deleteAssignment, updateAssignment, and selectAssignment. 
    // const [assignments, setAssignments] = useState<any[]>(db.assignments);
    // const [assignment, setAssignment] = useState({
    //   _id: "A105", title: "New Assignment", course: "Some Course Number"
    // })
    // const addNewAssignment = () => {
    //   setAssignments([...assignments, {...assignment, _id: new Date().getTime().toString() }])
    // }
    // const deleteAssignment = (assignmentId: any) => {
    //   setAssignments(assignments.filter((assignment) => assignment._id !== assignmentId));
    // }
    // const updateAssignment = () => {
    //   setAssignments(
    //     assignments.map((c) => {
    //       if (c._id === assignment._id) {
    //         return assignment;
    //       } else {
    //         return c;
    //       }
    //     })
    //   )
    // }
  


  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
            } />
          {/* <Route path="Courses/*" element={<h1>Courses</h1>} /> */}
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses}/>} />
          </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas