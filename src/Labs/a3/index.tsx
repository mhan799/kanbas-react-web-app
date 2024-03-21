import JavaScript from "./JavaScript";
//import Assignment3 from "/*"
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes"
import Styles from "./Styles"
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import { useSelector } from "react-redux";
import { LabState } from "../store";



function Assignment3() {
//     const a = [1, 2, 3]
//     const e = [...a, 4]
// const [w, x, y, z] = e
// console.log(z)
    const { todos } = useSelector((state: LabState) => state.todosReducer);
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <ul className="list-group">
                {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    {todo.title}
                </li>
                ))}
            </ul>
            
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <JavaScript/>
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>   
            <Add a={3} b={4} />   
            
                
        </div>
    );
    }
export default Assignment3;

  

