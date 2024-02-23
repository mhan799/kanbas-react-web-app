import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      {/* Add buttons and other fields here */}
      <div>
        <input
        title="Type the name of the assignment to search for"
        placeholder="Search for Assignment"
        />
        <span className="float-end">
        <button>+ Group</button>
        <button>+ Assignment</button>
        <button><FaEllipsisV className="me-2" /></button>
        </span>
    </div>      
   


      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                   <br/>
                <span className="text-muted">Due Date: 2024-03-15 | </span>
                          <span className="text-muted">Start time: 2024-03-10 | </span>
                          <span className="text-muted">Points: 100</span>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;

