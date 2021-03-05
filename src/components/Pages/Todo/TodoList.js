import {MdDone, MdDelete} from 'react-icons/md';

function TodoListItems(description, id, completed, doneH, deleteH) {
    const onClick = (e) => {
        doneH(id);
    };

    const onDelClick = (e) => {
        deleteH(id);
    };

    const myClass = (completed)?"striked": "";

    return (
        <li>
            <span className={myClass}>{description}</span>
            <MdDone onClick={onClick}></MdDone>
            <MdDelete onClick={onDelClick}></MdDelete>
        </li>
    );
}

function TodoList ({todos, doneH, deleteH}) {

    const todosItems = todos.map((o) => {
        return (
            <TodoListItems
                key={o.doneHid}
                description={o.description} 
                id={o.id}
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