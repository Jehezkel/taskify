import React from 'react'
import { Todo } from '../model';
import { TodoItem } from './TodoItem';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>


}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div>
            {todos.map((t) => (
                <TodoItem key={t.id} todo={t} todos={todos} setTodos={setTodos}></TodoItem>
            )
            )}
        </div>

    )
}
