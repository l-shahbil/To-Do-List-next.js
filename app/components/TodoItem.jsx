import { FaEdit, FaCheck, FaTrash } from "react-icons/fa";

export const TodoItem = ({ item, index, onEdit, onDelete, onComplete, isCompleted }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
      <span
        className={`text-gray-700 ${isCompleted ? "line-through opacity-50" : ""}`}
      >
        {item.text}
      </span>
      <div className="flex gap-2">
        {!isCompleted && (
          <>
            <button
              onClick={(e) => onEdit(e, index)}
              className="btn-warning flex items-center gap-1"
            >
              <FaEdit />
            </button>
            <button
              onClick={(e) =>onComplete(e, index)}
              className="btn-success flex items-center gap-1"
            >
              <FaCheck />
            </button>
          </>
        )}
        <button
          onClick={(e) => onDelete(e, index, isCompleted)}
          className="btn-danger flex items-center gap-1"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};