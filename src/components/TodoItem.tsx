import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { MdDone, MdDelete, MdEdit, MdUndo, MdSave } from "react-icons/md";
interface Props {
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
export const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [isEditable, setisEditable] = useState<Boolean>(false)
    const [todoText, settodoText] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [isEditable])
    useEffect(()=>{
        
    })
    const handleDone = (id: number) => {
        //TODO when clicking done while edit - do save and done
        // if (isEditable) {
        //     handleEdit(id)
        // }
        setTodos(
            todos.map((i: Todo) =>
                i.id === id ? { ...i, isDone: !i.isDone } : i
            ).sort((a, b) => (a.isDone ? 1 : 0) - (b.isDone ? 1 : 0)));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(i => i.id !== id))
    }

    const handleEdit = (id: number, e?: React.KeyboardEvent<HTMLInputElement>) => {
        if (e && e.code !== "Enter") {
            return
        }
        if (isEditable && todoText !== todo.todo) {
            setTodos(todos.map(i =>
                i.id === id ? { ...i, todo: todoText } : i
            ))
        }
        setisEditable(!isEditable)
    }

    return (
        <div className='flex h-12 mt-3 bg-yellow-400 px-auto'>
            <div className={`flex-1 my-auto ml-2  mr-auto selection:bg-none ${todo.isDone ? "line-through" : ""}`} >

                <p className={`${isEditable ? "hidden" : ""}`}>{todo.todo}</p>
                <input autoFocus className={`${!isEditable ? "hidden" : ""}`} ref={inputRef} type="text" value={todoText} onChange={(e) => settodoText(e.target.value)}
                    onKeyUp={(e) =>
                        handleEdit(todo.id, e)
                    } />
            </div>

            <div className='flex my-auto mr-2 h-full align-middle cursor-pointer'>
                <span className='flex mr-1' onClick={() => handleDelete(todo.id)}>
                    <MdDelete className='my-auto' />
                </span>
                <span className={`flex mr-1 ${todo.isDone ? "hidden" : ""}`} onClick={() => handleEdit(todo.id)}>
                    {
                        !isEditable ?
                            <MdEdit className='my-auto' /> :
                            <MdSave className='my-auto' />
                    }
                </span>
                <span className='flex mr-1' onClick={() => handleDone(todo.id)}>
                    {
                        todo.isDone ?
                            <MdUndo className='my-auto' />
                            :
                            <MdDone className='my-auto' />


                    }
                </span>
            </div>
        </div >

    )
}
