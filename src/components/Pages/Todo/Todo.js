import NewTodo from './Newtodo';
import {useState} from 'react';

function Todo () {
    const [todoData, setTodoData] = useState({
        todos: [],
        newTodo: "",
    });
    
    const onChange = (e) => {
        const {name, value} = e.currentTarget;
        setTodoData({
            ...todoData, newTodo: value });
    };

    const onAddNew = (e) => {
        alert("Se aggregó la nota.");
    }

    return (
        <section>
            <NewTodo
                onChange={onChange}
                value={todoData.newTodo}
                onAddNew={onAddNew}
            ></NewTodo>
            <section className="TodoList">
                Lista de Todos
            </section>

        </section>
    );
}

export default Todo;