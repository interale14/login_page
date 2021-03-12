import {MdDone, MdDelete} from 'react-icons/md';

function TodoListItems(description, fb_id, completed, doneH, deleteH, key) {
    const onClick = (e) => {
        doneH(fb_id);
    };

    const onDelClick = (e) => {
        deleteH(fb_id);
    };

    const styles = {
        backgroundColor: "#888",
        display: "flex",
        padding: 1,
        borderBottom: "1 solid #333",
        justifyContent:"space-between",
        alignItems:"center",
    }

    const myClass = (completed)?"striked": "";

    return (
        <li style={styles} key={key}>
            <span className={myClass}>{description}</span>
            <span className="flex">
                <MdDone onClick={onClick}></MdDone>
                <MdDelete onClick={onDelClick}></MdDelete>
            </span>
        </li>
    );
}

function TodoList ({todos, doneH, deleteH}) {

    const todosItems = todos.map((o)=>{
        return (
            <TodoListItems
                key={o.id}
                description={o.description} 
                id={o.id}
                fb_id={o.fb_id}
                completed={o.completed}
                doneH={doneH} 
                deleteH={deleteH}
            />
        )
    });

    return (
        <section className="TodoList">
          <ul>
             {todosItems}
          </ul>
        </section>
    );
}

export default TodoList;