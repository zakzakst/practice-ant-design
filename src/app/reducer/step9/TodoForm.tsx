"use client";
import { useState } from "react";
import { ActionTypes } from "./useTodoReducer";
import { useTodoDispatch } from "./todoContext";

export const TodoForm = () => {
  const { dispatch } = useTodoDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: ActionTypes.ADD_TODO, text });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
