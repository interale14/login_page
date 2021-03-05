import NewTodo from './Newtodo';
import TodoList from './TodoList';
import {useState} from 'react';
import "./TodoList.css";

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
        alert("Se agregó la nota.");

        let newTodo = {
            description: todoData.newTodo,
            completed: false,
            id: new Date().getTime()
        };

        let newTodos = todoData.todos;

        newTodos.push(newTodo);

        setTodoData({todos:newTodos, newTodo: ""});
    }

    const doneH = (id) => {
        const newTodos = todoData.todos.map((o)=>{
            if(o.id === id){
                o.completed = !o.completed;
            }
            return o;
        });

        setTodoData({...todoData, todos:newTodos});
    };

    const deleteH = (id) => {
        const newTodos = todoData.todos.filter((o) => {
            return o.id !==id;
        });

        setTodoData({ ...todoData, todos: newTodos });
    }

    const tmpTodos = todoData.todos.map((o) => {return JSON.stringify(o)} ).join(" | ");

    return (
        <section>
            <NewTodo
                onChange={onChange}
                value={todoData.newTodo}
                onAddNew={onAddNew}
            ></NewTodo>
            <TodoList 
                todos={todoData.todos}
                doneH={doneH} 
                deleteH={deleteH}
            ></TodoList>
        </section>
    )
}

export default Todo;