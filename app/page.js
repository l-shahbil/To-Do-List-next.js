"use client";
import { useState, useRef } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { CompletedList } from "./components/CompletedList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { addTodo, updateTodo, deleteTodo, completeTodo } from "./utils/todoHelpers";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useLocalStorage("todoList", []);
  const [completedList, setCompletedList] = useLocalStorage("completedList", []);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      setTodoList(updateTodo(todoList, editingIndex, editText));
      setEditingIndex(null);
      setEditText("");
    } else {
      setTodoList(addTodo(todoList, todo));
      setTodo("");
    }
  };

  const handleDelete = (e, index, isCompleted) => {
    e.preventDefault();
    isCompleted
      ? setCompletedList(deleteTodo(completedList, index))
      : setTodoList(deleteTodo(todoList, index));
  };

  const handleEdit = (e, index) => {
    e.preventDefault();
    setEditingIndex(index);
    setEditText(todoList[index].text);

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleComplete = (e, index) => {
    e.preventDefault();
    const { updatedTodoList, updatedCompletedList } = completeTodo(todoList, completedList, index);
    setTodoList(updatedTodoList);
    setCompletedList(updatedCompletedList);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto p-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">To-Do App</h1>

        <div ref={formRef}>
          <TodoForm
            onSubmit={handleSubmit}
            editingIndex={editingIndex}
            editText={editText}
            setEditText={setEditText}
            todo={todo}
            setTodo={setTodo}
          />
        </div>

        {todoList.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">To-Do List</h3>
            <TodoList
              list={todoList}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onComplete={handleComplete}
              isCompleted={false}
            />
          </>
        )}

        {completedList.length > 0 && (
          <>
            <CompletedList completedList={completedList} onDelete={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
}