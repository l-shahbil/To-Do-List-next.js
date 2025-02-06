export const addTodo = (todoList, todo) => {
    return [{ text: todo, completed: false }, ...todoList];
  };
  
  export const updateTodo = (todoList, index, newText) => {
    return todoList.map((item, idx) =>
      idx === index ? { ...item, text: newText } : item
    );
  };
  
  export const deleteTodo = (list, index) => {
    return list.filter((_, idx) => idx !== index);
  };
  
  export const completeTodo = (todoList, completedList, index) => {
    const completedItem = { ...todoList[index], completed: true };
    const updatedTodoList = deleteTodo(todoList, index);
    const updatedCompletedList = [...completedList, completedItem];
    return { updatedTodoList, updatedCompletedList };
  };