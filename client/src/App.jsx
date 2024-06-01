import { useContext } from "react";
import Chat from "./components/Chat/Chat";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import "./styles/_main.scss";

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
