import { useState } from "react"; //hook used to store value of task

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Add Todos +"
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}

export default TodoForm;