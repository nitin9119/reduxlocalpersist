import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
};
