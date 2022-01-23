import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.app.todos);
  console.log(todos);

  return (
    <div>
      {todos.map((e) => (
        <div key={e.id}> {e.title}</div>
      ))}
    </div>
  );
};
