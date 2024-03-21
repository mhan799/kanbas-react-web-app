import React, { useState }  from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";

import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "../reducer"
import { KanbasState } from "../../../store";
import { add } from "../../../../Labs/a4/ReduxExamples/AddRedux/addReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === assignmentId);
    const assignments = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignment);
    console.log(assignment)
    const dispatch = useDispatch();

    const currentUrl = useLocation().pathname;
        
  const { courseId } = useParams();
  const navigate = useNavigate();

const handleSaveClick = () => {
   
    if (currentUrl.endsWith("AssignmentEditor")) {
      // If the current URL ends with "AssignmentEditor", dispatch addAssignment
      dispatch(addAssignment({ ...assignment, course: courseId }));
      //console.log(assignments, ...assignment)
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);

    } else {
      // Otherwise, dispatch updateAssignment
      //assignment["_id"] = assignmentId
      console.log(assignment, assignmentId)
      dispatch(updateAssignment({...assignment, course:courseId}));
      console.log(assignments)
    }
  };

  return (
    <div>
      <h2>Assignment Name</h2>
      <input //value={assignment?.title}
            onChange= {(e) => dispatch(setAssignment({
                ...assignment, title: e.target.value
            }))}
             className="form-control mb-3" />
        <textarea className="form-control mb-3"
                id="textarea1"
                onChange={(e) => dispatch(setAssignment({...assignment, description: e.target.value}))}
                rows={5}
                ></textarea>
      <h3>Points</h3>
        <input type ="number"
            onChange={(e) => dispatch(setAssignment({...assignment, points: e.target.value}))}
           className="form-control mb-3" />
      <h3>Assign</h3>
      <label htmlFor="due">Due</label>
      <input type="date" 
            id="due" 
            onChange={(e) => dispatch(setAssignment({...assignment, due: e.target.value}))}
            className="form-control mb-3"/>
      <label htmlFor="available">Available from</label>
      <input type="date"
             id="available"
             onChange={(e) => dispatch(setAssignment({...assignment, available: e.target.value}))}
            className="form-control mb-3"/>
      <label htmlFor="until">Until</label>
      <input type="date"
             id="until"
            onChange={(e) => dispatch(setAssignment({...assignment, until: e.target.value}))}
            className="form-control mb-3"/>      

    <button onClick={handleSaveClick} className="btn btn-success ms-2 float-end">
        Save
    </button>    
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;

