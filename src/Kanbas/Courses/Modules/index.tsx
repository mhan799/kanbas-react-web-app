import ModuleList from "./List";
import { FaCheckCircle, FaEllipsisV} from "react-icons/fa";

function Modules() {
  return (
    <div>
      <h2>Modules</h2>
      <button>Collapse All</button>
      <button>View Progress</button>
      <button>Collapse All</button>
      <select>
            <option><FaCheckCircle className="text-success"/>Publish All</option>
            <option>Publish all items and modules</option>
            <option>UnPublish</option>
          </select>
        <button className="red-button">+ Module</button>
      <button><FaEllipsisV className="me-2" /></button>
      <ModuleList />
    </div>
  );
}
export default Modules;