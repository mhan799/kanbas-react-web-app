import {Link} from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Quiz4 from "./q4";
import Nav from "../Nav";
import PathParameters from "./a3/routing/PathParameters";
import {Routes, Route, Navigate} from "react-router";

import store from "./store";
import { Provider } from "react-redux";

function Labs() {
    return (
        <Provider store={store}>
      <div className="container-fluid">
        <h1>Labs</h1>
        <Nav />
        {/* <Link to="/Labs/a3">Assignment 3</Link> |
        <Link to="/Labs/a3">Assignment 4</Link> | */}
        {/* <Link to="/Labs/a4">Q4</Link> */}
        <Routes>
            <Route path = "/" element={<Navigate to="a3"/>}/>
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
        </Routes>
      </div>
      </Provider>
    );
  }
  export default Labs;
  
  

// function Labs() {
//     return (
//        <div>
//         <Nav/>
//         {/* <Link to="/Labs/a3">A3</Link> |
//         <Link to="/Kanbas">Kanbas</Link> |
//         <Link to="/hello">Hello</Link> | */}
//           <Assignment3/>
//        </div>
//     );
//  }
//  export default Labs;
 
 