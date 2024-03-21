import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
  } from "./reducer";
import { KanbasState } from "../../store";


function Assignments() {
    const { courseId } = useParams();
//   const assignmentList = db.assignments.filter(
//     (assignment) => assignment.course === courseId);
    const assignments = useSelector((state: KanbasState) => 
        state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) => 
        state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const [assignmentToDelete, setAssignmentToDelete] = useState(null); 
    const [showDialog, setShowDialog] = useState(false); 
    const handleDelete = (id: any) => {
        setShowDialog(true);
        setAssignmentToDelete(id);
    };
  const handleConfirmDelete = () => { 
    dispatch(deleteAssignment(assignmentToDelete));
    console.log(assignmentToDelete);
    setShowDialog(false);
    setAssignmentToDelete(null);
  };
  const handleCancelDelete = () => {
    setShowDialog(false);
    setAssignmentToDelete(null);
  };

  return (
    <>
      <div>
        <input
        title="Type the name of the assignment to search for"
        placeholder="Search for Assignment"
        />
        <span className="float-end">
        <button>+ Group</button>
        <Link to="./AssignmentEditor"><button>+ Assignment</button></Link>
        <button><FaEllipsisV className="me-2" /></button>
        </span>
    </div>  
      <ul className="list-group">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignments.filter((assignment) => assignment.course === courseId)
            .map((assignment, index) => (
            <li key={index} className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link onClick={() => dispatch(setAssignment(assignment))}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end" >
                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                    
                    <button
                        onClick={() => handleDelete(assignment._id)}
                        //onClick={() => dispatch(deleteAssignment(assignment._id))}
                    >
                        Delete
                    </button>
                </span>

            </li>
            ))}       
          </ul>
        </li>
      </ul>
      {/* Delete dialog */}
      {showDialog && (
        <div>
          <p>Are you sure you want to remove the assignment?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
      {/* {assignmentToDelete && (
                <div>
                    <p>Are you sure you want to remove the assignment?</p>
                    <button onClick={handleConfirmDelete}>Yes</button>
                    <button onClick={handleCancelDelete}>No</button>
                </div>
            )} */}

    </>
  )
}
export default Assignments;

