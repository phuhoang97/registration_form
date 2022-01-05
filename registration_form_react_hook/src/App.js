import { useEffect, useState } from "react";
import Register from "./components/Register";
import { useForm } from "react-hook-form";

function App() {
  const [showForm, setShowFrom] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [Messes, setMesses] = useState(false);
  const [error, setError] = useState(true);

  const [user, setUser] = useState([
    {
      name: "",
      email: "",
      password: "",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const onHandleSubmit = (data) => {
    user.forEach((vle) => {
      if (vle.email === data.email && vle.password === data.password) {
        setMesses(!Messes);
        setError(true);
      } else {
        setError(!error);
      }
    });
  };

  return (
    <>
      <div className="App">
        <Register
          showForm={showForm}
          setShowFroms={setShowFrom}
          setUser={setUser}
          user={user}
        />
      </div>
      <div className={Messes ? " form " : "hidden"}>
        <form>
          <h4>{Messes ? "đăng nhập thành công" : "sai thông tin mật khẩu"}</h4>
          <input
            onClick={() => setMesses(!Messes)}
            className="btn btn-primary"
            value={"ok"}
          />
        </form>
      </div>
    </>
  );
}

export default App;
