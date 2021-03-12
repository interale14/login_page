import NewTodo from './Newtodo';
import TodoList from './TodoList';
import { useState, useEffect } from 'react';
import "./TodoList.css";

import fire from '../../../FireBaseInit';

function Todo () {
    const [todoData, setTodoData] = useState({
        todos: [],
        newTodo: "",
        waiting:false,
    });

    useEffect(
        ()=>{
            const todosRef = fire.database().ref('todos').orderByKey().limitToLast(100);
            todosRef.on('child_added', (snapshot) => {
                let newTodo = { ...snapshot.val(), fb_id: snapshot.key };
                let newTodos = todoData.todos;
                newTodos.push(newTodo);
                setTodoData({...todoData, todos: newTodos});
            });
            todosRef.on('child_removed', (snapshot)=>{
                const deletedKey = snapshot.key;
                let newTodos = todoData.todos.filter(o=>{
                  return o.fb_id !==deletedKey;
                });
                setTodoData({ ...todoData, todos: newTodos });
            });
            todosRef.on('child_changed', (snapshot) => {
                const changedKey = snapshot.key;
                const data = snapshot.val();
                let newTodos = todoData.todos.map(o => {
                  if (o.fb_id == changedKey) {
                    o = {...o, ...data};
                  }
                  return o;
                });
                setTodoData({ ...todoData, todos: newTodos });
            });
            return ()=>{
                todosRef.off();
            }        
        },[]
    );
    
    const onChange = (e) => {
        const {name, value} = e.currentTarget;
        setTodoData({
            ...todoData, newTodo: value });
    };

    const onAddNew = (e) => {
        alert("Se agregó la nota.");
        e.preventDefault();
        e.stopPropagation();

        let newTodo = {
            description: todoData.newTodo,
            completed: false,
            id: new Date().getTime()
        };
        

        fire.database().ref("todos").push(newTodo);
        /*
        let newTodos = todoData.todos;

        newTodos.push(newTodo);

        setTodoData({todos:newTodos, newTodo: ""});
        */
    }

    const doneH = (id) => {
        const ref = fire.database().ref("todos");
        const fbtodo = ref.child(id);
        const lcTodo = todoData.todos.find( (o)=>{
            return o.fb_id === id;
        });

        fbtodo.update({
            "completed": !lcTodo.completed
        });

        /*
        const newTodos = todoData.todos.map((o)=>{
            if(o.id === id){
                o.completed = !o.completed;
            }
            return o;
        });

        setTodoData({...todoData, todos:newTodos});
        */
    };

    const deleteH = (id) => {
        const ref = fire.database().ref("todos");
        const fbtodo = ref.child(id);
        const lcTodo = todoData.todos.find( (o)=>{
            return o.fb_id === id;
        });

        fbtodo.update({
            "completed": !lcTodo.completed
        });
        /*
        const newTodos = todoData.todos.filter((o) => {
            return o.id !==id;
        });

        setTodoData({ ...todoData, todos: newTodos });
        */
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