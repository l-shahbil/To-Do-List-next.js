import { TodoList } from "./TodoList";

export const CompletedList = ({ completedList, onDelete }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-green-500 mb-4">Completed List</h3>
      <TodoList list={completedList} onDelete={onDelete} isCompleted={true} />
    </div>
  );
};