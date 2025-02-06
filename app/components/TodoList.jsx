import { TodoItem } from "./TodoItem";

export const TodoList = ({ list, onEdit, onDelete, onComplete, isCompleted }) => {
  return (
    <ul className="space-y-2">
      {list.length >= 1 ? (
        list.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            onEdit={onEdit}
            onDelete={onDelete}
            onComplete={onComplete}
            isCompleted={isCompleted}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 italic">
          {isCompleted ? "No completed tasks" : "Enter a ToDo"}
        </p>
      )}
    </ul>
  );
};