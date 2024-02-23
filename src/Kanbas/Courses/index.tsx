import { courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./Navigation/index.css"

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const pathParts  = useLocation().pathname.split('/').filter(part => part.trim() !== '');
  const currentPath = pathParts[pathParts.length - 1];
  return (
    <div>
        <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <HiMiniBars3/>{`Course ${course?.name}`}
        </li>
        <li className="breadcrumb-item"> 
        {currentPath}
        </li>
      </ol>
    </nav>
      <CourseNavigation /> 
    <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={{ left: "320px", top: "50px" }} >
        <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home/>} />
        <Route path="Modules" element={<Modules/>} />
        <Route path="Piazza" element={<h1>Piazza</h1>} />
        <Route path="Assignments" element={<Assignments/>} />
        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
        <Route path="Grades" element={<Grades/>} />
        </Routes>
    </div>
      </div>


  );
}
export default Courses;

