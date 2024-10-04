import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavLayout from "./layouts/NavLayout";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Task from "./pages/Task";
import Board from "./pages/Board";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NavLayout>
            <Home />
          </NavLayout>
        }
      />
      <Route
        path="/settings"
        element={
          <NavLayout>
            <Profile />
          </NavLayout>
        }
      />
      <Route
        path="/task"
        element={
          <NavLayout>
            <Task />
          </NavLayout>
        }
      />
      <Route
        path="/board"
        element={
          <NavLayout>
            <Board />
          </NavLayout>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
