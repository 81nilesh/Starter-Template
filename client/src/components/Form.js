import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';

const createTodo = (text) => {
    return () => fetch('http://localhost:8000/todo/create', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    })
}
const Form = () => {
    const [text, setText] = useState();
    const todoMutation = useMutation(createTodo(text), {
        onSuccess: () => {
            console.log('Success');
        },
        onError: (erro) => {
            console.log("Error")
        }
    });

    return (
        <>
            <input onClick={(e) => setText(e.target.value)} value={text} type="text" />
            <button onClick={(e) => todoMutation.mutate()}>Create</button>
        </>
    );
}

export default Form;
