import { Login } from "../Components/Login";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../Redux/auth/action";

export const LoginPage = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleLogin = ({ email, password }) => {
    //fake auth login
    let user = { email, password };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res.token);
        const action = loginSuccess("fakeToken");
        dispatch(action);
      });

    //     if (email === "admin" && password === "admin") {
    //       //console.log(email, password);
    //       const action = loginSuccess("fakeToken");
    //       dispatch(action);
    //     } else {
    //       const action = loginFailure("wrong credentials");
    //       dispatch(action);
    //     }
  };

  if (isAuth) {
    console.log("hhhh");
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Login handleLogin={handleLogin} />
    </div>
  );
};
