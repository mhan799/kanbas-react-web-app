import ModuleList from "../Modules/List";
import { FaCheckCircle, FaEllipsisV, FaCalendar} from "react-icons/fa";


function Home() {
  return (
    <div className="container">
    
      <h2>Home</h2>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select>
            <option><FaCheckCircle className="text-success"/>Publish All</option>
            <option>Publish all items and modules</option>
            <option>UnPublish</option>
          </select>
        <button className="red-button">+ Module</button>
        <button><FaEllipsisV className="me-2" /></button>
        <hr/>

        <div className="row col-lg-9"><ModuleList/>
        </div>
      {/* <div className="flex-fill"><ModuleList/></div> */}

      <div className="col-lg-3 flex-grow-0 d-none d-lg-block" style={{ width: "350px" }}>
      {/* <div> */}
        <h3>Course Status</h3>
        <button>Unpublish</button>
        <button>Published</button>

        <ul className="list-group wd-side">
          <li className="list-group-item">
              <a href="#">Import Existing Content</a>
          </li>
          <li className="list-group-item">
            <div>
              <a href="#">Import From Commons</a>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <a href="#"> Choose Home Page</a>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <a href="#">View Course Stream</a>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <a href="#">New nnouncements</a>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <a href="#">New Analytics</a>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <a href="#">View Course Notifications</a>
            </div>
          </li>
        </ul>
        <br/>
 
        <h3>Comming Up</h3>
        <div className="float-end">
            <a href="#"><FaCalendar className="me-2"/>View Calendar</a></div>
            <ul className="list-group wd-time">
            <li className="list-group-item">
                <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
            </li>
            <li className="list-group-item">
                <a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
            </li>
            <li className="list-group-item">
                <a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a>
            </li>
        </ul>
    </div>
</div>
    
  );
}
export default Home;

