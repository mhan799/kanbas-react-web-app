import React, { useState } from "react";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
    console.log(module);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <ul className="list-group wd-modules"> */}
      <ul className="list-group">
      <li className="list-group-item">
        <button 
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
        </button>
        <button onClick={() => {console.log(module); dispatch(updateModule(module)) }}>

            Update
        </button>
        <br/>
        <input value={module.name}
          onChange={(e) => 
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
          <br/>
        <textarea value={module.description}
          onChange={(e) => 
            dispatch(setModule({ ...module, description: e.target.value }))
        }/>
      </li>


        {/* {modulesList.map((module, index) => ( */}
        {moduleList.filter((module) => module.course === courseId).map((module, index) => (
          <li key={index}
            className="list-group-item">
              <button
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
              </button>
            <div>
              <FaEllipsisV className="me-2" />
              <h3>{module.name}</h3>
              <p>{module.description}</p>
              <p>{module._id}</p>
              {/* <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span> */}
            </div>
            {/* {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;

