import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const logUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "./login";
    });
  };

  return (
    <Router>
      <nav className="nav">
        <Link to="/">Home</Link>
        {/* <Link to="/createpost">Create Post</Link> */}
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            {" "}
            <Link to="/createpost">Create Post</Link>{" "}
            <button onClick={logUserOut} className="" className="logOutButton">
              Log Out
            </button>{" "}
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
