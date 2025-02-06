export const TodoForm = ({ onSubmit, editingIndex, editText, setEditText, todo, setTodo }) => {
    return (
      <form onSubmit={onSubmit} className="card">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={editingIndex !== null ? editText : todo}
          onChange={(e) =>
            editingIndex !== null ? setEditText(e.target.value) : setTodo(e.target.value)
          }
          placeholder="Enter Your To-Do"
          className="input-field"
        />
        <button type="submit" className="btn-primary mt-4">
          {editingIndex !== null ? "Update" : "Submit"}
        </button>
      </form>
    );
  };