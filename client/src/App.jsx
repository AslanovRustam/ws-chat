import { useContext } from "react";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { ThemeContext } from "./context/ThemeContext";
import "./styles/_main.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { theme, userName } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Navbar />
      {userName ? <Chat /> : <Login />}
    </div>
  );
}

export default App;
