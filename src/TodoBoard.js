
import TodoItem from './TodoItem.js'

// function TodoBoard (props) {

//     return (
//         <div className="board">
//             <h1>To do List</h1>
//             <hr />
//             {props.todoList.map(
//                 (item) => (
//                     <TodoItem key={item.id} item={item}></TodoItem>
//                 ) 
//             )} 
//         </div>
//     );
// } 
// export default TodoBoard;


function TodoBoard (props) {

    return (
        <div className="board">
            <h1>To do list</h1>
            <hr />
            {props.todoList.map ( (item)=>
                <TodoItem item={item}></TodoItem>
            )}
        </div>
    );
}
export default TodoBoard;