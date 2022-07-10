import React, { useRef } from 'react'

interface Props {
    todo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export const TaskInput: React.FC<Props> = ({ todo, setToDo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (

        <form className='' onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }
        }>
            <input type="text" value={todo}
                ref={inputRef}
                onChange={
                    (e) => setToDo(e.target.value)
                }
                className='outer-shadow h-12 placeholder-slate-400 px-3 py-1 rounded-none focus:outline-none' placeholder='Enter task name' name="" id="TaskName" />
            <input type="submit" value="Add" className='mt-1 px-3 py-1 h-12 font-b rounded-none bg-lime-400' onClick={() => inputRef.current && inputRef.current.focus()} />
        </form>
    )
}
