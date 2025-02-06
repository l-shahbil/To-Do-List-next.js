export const TodoForm = ({ onSubmit, editingIndex, editText, setEditText, todo, setTodo }) => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (editingIndex !== null) {
            if (editText.trim() === "") return;
            setEditText(editText.trim());
          } else {
            if (todo.trim() === "") return;
            setTodo(todo.trim());
          }
          onSubmit(e);
        }}
        className="card"
      >
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="todo-input">
          Title
        </label>
        <input
          id="todo-input"
          type="text"
          value={editingIndex !== null ? editText : todo}
          onChange={(e) => {
            const value = e.target.value;
            editingIndex !== null ? setEditText(value) : setTodo(value);
          }}
          placeholder="Enter Your To-Do"
          className="input-field"
          required
          aria-label="Enter your to-do item"
        />
        <button type="submit" className="btn-primary mt-4">
          {editingIndex !== null ? "Update" : "Submit"}
        </button>
      </form>
    );
  };
  